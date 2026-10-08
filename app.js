(function () {
  var cv = window.CV;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var MONTHS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
  var fmt = function (ym) { var p = ym.split("-"); return MONTHS[+p[1] - 1] + " " + p[0]; };

  function duration(from, to) {
    var a = from.split("-"), now = new Date();
    var b = to ? to.split("-") : [now.getFullYear(), now.getMonth() + 1];
    var m = (b[0] - a[0]) * 12 + (b[1] - a[1]);
    var y = Math.floor(m / 12), r = m % 12, out = [];
    if (y) out.push(y + " an" + (y > 1 ? "s" : ""));
    if (r) out.push(r + " mois");
    return out.join(" ") || "moins d'un mois";
  }

  // Une techno correspond à une clé si elle est identique ou en est une déclinaison ("Java" → "Java 25", pas "JavaScript").
  function techMatches(tech, key) {
    return tech === key || tech.indexOf(key + " ") === 0;
  }

  // --- Static content ---
  $("name").textContent = cv.name;
  $("title").textContent = cv.title;
  $("intro").textContent = cv.intro;
  $("links").innerHTML = cv.links.map(function (l) {
    return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
  }).join("");
  $("edu").innerHTML = cv.education.map(function (e) {
    return "<li><strong>" + esc(e.label) + "</strong><span>" + esc(e.place) + ", " + esc(e.year) + "</span></li>";
  }).join("");
  $("training").innerHTML = cv.training.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
  $("projects").innerHTML = cv.projects.map(function (p) {
    var name = p.href ? '<a href="' + esc(p.href) + '" target="_blank" rel="noopener">' + esc(p.name) + "</a>" : esc(p.name);
    return "<li><strong>" + name + "</strong><span>" + esc(p.desc) + "</span></li>";
  }).join("");

  // --- Skills ---
  $("skills").innerHTML = cv.skills.map(function (s, gi) {
    return '<div class="sk"><h3>' + esc(s.group) + "</h3><ul>" + s.items.map(function (it, ii) {
      return it.k
        ? '<li><button type="button" class="skill" data-g="' + gi + '" data-i="' + ii + '" aria-pressed="false">' + esc(it.l) + "</button></li>"
        : "<li><span>" + esc(it.l) + "</span></li>";
    }).join("") + "</ul></div>";
  }).join("");

  // --- Experiences ---
  function missionHtml(m, mi) {
    var more = m.more && m.more.length;
    return (
      '<div class="mission" data-tech="' + esc(m.tech.join("|")) + '">' +
      (m.name ? "<h4>" + esc(m.name) + "</h4>" : "") +
      '<p class="sum">' + esc(m.summary) + "</p>" +
      "<ul>" + m.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" +
      (more
        ? '<details><summary>Autres responsabilités</summary><ul>' +
          m.more.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></details>"
        : "") +
      '<p class="tech">' + m.tech.map(function (t) { return '<span data-t="' + esc(t) + '">' + esc(t) + "</span>"; }).join(", ") + "</p>" +
      "</div>"
    );
  }
  $("experiences").innerHTML = cv.experiences.map(function (e) {
    var cur = !e.to;
    return (
      '<article class="exp">' +
      '<div class="when"><span>' + fmt(e.from) + " – " + (cur ? "aujourd'hui" : fmt(e.to)) + "</span><small>" + duration(e.from, e.to) + "</small></div>" +
      '<div class="what"><h3>' + esc(e.company) + ' <span class="about">' + esc(e.about) + "</span></h3>" +
      '<p class="role">' + esc(e.role) + "</p>" +
      e.missions.map(missionHtml).join("") + "</div></article>"
    );
  }).join("");

  // --- Highlight by skill ---
  var current = null;
  function applyHighlight() {
    var keys = current ? cv.skills[current.g].items[current.i].k : null;
    var hits = 0;
    document.querySelectorAll(".mission").forEach(function (el) {
      var techs = el.dataset.tech.split("|");
      var ok = !keys || techs.some(function (t) { return keys.some(function (k) { return techMatches(t, k); }); });
      el.classList.toggle("dim", !ok);
      if (ok && keys) hits++;
      el.querySelectorAll(".tech span").forEach(function (s) {
        s.classList.toggle("hit", !!keys && keys.some(function (k) { return techMatches(s.dataset.t, k); }));
      });
    });
    document.querySelectorAll(".exp").forEach(function (a) {
      a.classList.toggle("dim", !!keys && !a.querySelector(".mission:not(.dim)"));
    });
    document.querySelectorAll(".skill").forEach(function (b) {
      var on = !!current && +b.dataset.g === current.g && +b.dataset.i === current.i;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on);
    });
    var st = $("status");
    st.hidden = !keys;
    if (keys) {
      var label = cv.skills[current.g].items[current.i].l;
      st.textContent = label + " : " + hits + " mission" + (hits > 1 ? "s" : "") + " sur " + document.querySelectorAll(".mission").length + ". Cliquer à nouveau pour réinitialiser.";
    }
  }
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest(".skill");
    if (b) {
      var sel = { g: +b.dataset.g, i: +b.dataset.i };
      current = current && current.g === sel.g && current.i === sel.i ? null : sel;
      applyHighlight();
      return;
    }
    var t = ev.target.closest(".tech span");
    if (t) {
      // Clic sur une techno d'une mission : retrouve la compétence correspondante, si elle existe.
      var name = t.dataset.t;
      for (var g = 0; g < cv.skills.length; g++) {
        for (var i = 0; i < cv.skills[g].items.length; i++) {
          var k = cv.skills[g].items[i].k;
          if (k && k.some(function (x) { return techMatches(name, x); })) {
            current = current && current.g === g && current.i === i ? null : { g: g, i: i };
            applyHighlight();
            return;
          }
        }
      }
    }
  });

  // --- Expand all, theme, print ---
  var expanded = false;
  $("expand").addEventListener("click", function () {
    expanded = !expanded;
    document.querySelectorAll(".mission details").forEach(function (d) { d.open = expanded; });
    $("expand").textContent = expanded ? "Tout replier" : "Tout déplier";
  });
  $("theme").addEventListener("click", function () {
    var cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  $("print").addEventListener("click", function () {
    document.querySelectorAll(".mission details").forEach(function (d) { d.open = true; });
    window.print();
  });
})();
