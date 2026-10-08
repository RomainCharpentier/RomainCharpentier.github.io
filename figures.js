// Schémas inline : ils utilisent les variables CSS du site, donc suivent le thème clair / sombre.
window.FIGURES = {
  clean: {
    caption: "Clean Architecture : les dépendances pointent vers le domaine, ArchUnit vérifie la règle dans les tests.",
    svg: '<svg viewBox="0 0 640 210" role="img" aria-label="Schéma de Clean Architecture en trois couches">' +
      '<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>' +
      '<rect x="8" y="8" width="624" height="194" rx="14" fill="none" stroke="var(--line)" stroke-width="2"/>' +
      '<text x="26" y="34" class="f-label">Adapters</text>' +
      '<rect x="150" y="44" width="340" height="146" rx="12" fill="var(--side)" stroke="var(--line)" stroke-width="2"/>' +
      '<text x="168" y="68" class="f-label">Application, cas d\'usage</text>' +
      '<rect x="230" y="84" width="180" height="90" rx="10" fill="var(--accent)" fill-opacity=".12" stroke="var(--accent)" stroke-width="2"/>' +
      '<text x="320" y="135" text-anchor="middle" class="f-title">Domaine</text>' +
      '<g class="f-small"><text x="26" y="86">API REST</text><text x="26" y="112">Kafka</text><text x="26" y="138">Base de données</text></g>' +
      '<g class="f-small" text-anchor="end"><text x="614" y="86">Spring Boot</text><text x="614" y="112">Spring Batch</text><text x="614" y="138">Front React</text></g>' +
      '<path d="M122 112H146" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar)"/>' +
      '<path d="M494 112H518" stroke="var(--accent)" stroke-width="2" marker-start="url(#ar)" transform="translate(0 0)"/>' +
      '<path d="M200 132H226" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar)"/>' +
      '</svg>',
  },
  agent: {
    caption: "Le contexte de l'équipe est écrit une fois, puis réutilisé par l'agent en mode autonome ou en script par lots.",
    svg: '<svg viewBox="0 0 640 150" role="img" aria-label="Flux : fichiers de contexte, agent, revue par l\'équipe">' +
      '<defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>' +
      '<rect x="8" y="25" width="180" height="105" rx="12" fill="var(--side)" stroke="var(--line)" stroke-width="2"/>' +
      '<text x="98" y="68" text-anchor="middle" class="f-title">Contexte</text>' +
      '<text x="98" y="90" text-anchor="middle" class="f-small">conventions d\'architecture</text>' +
      '<text x="98" y="108" text-anchor="middle" class="f-small">et de code</text>' +
      '<rect x="230" y="25" width="180" height="105" rx="12" fill="var(--accent)" fill-opacity=".12" stroke="var(--accent)" stroke-width="2"/>' +
      '<text x="320" y="62" text-anchor="middle" class="f-title">Agent</text>' +
      '<text x="320" y="86" text-anchor="middle" class="f-small">Gemini Code Assist</text>' +
      '<text x="320" y="102" text-anchor="middle" class="f-small">gemini-cli</text>' +
      '<text x="320" y="118" text-anchor="middle" class="f-small">autonome ou scripté</text>' +
      '<rect x="452" y="25" width="180" height="105" rx="12" fill="var(--side)" stroke="var(--line)" stroke-width="2"/>' +
      '<text x="542" y="68" text-anchor="middle" class="f-title">Équipe</text>' +
      '<text x="542" y="90" text-anchor="middle" class="f-small">revue de code,</text>' +
      '<text x="542" y="108" text-anchor="middle" class="f-small">retours d\'usage</text>' +
      '<path d="M190 77H226" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar2)"/>' +
      '<path d="M412 77H448" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar2)"/>' +
      '</svg>',
  },
};
