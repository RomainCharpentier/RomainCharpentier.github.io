// Contenu du CV (source : Google Doc « 2026 – CV Shodo Nantes »). Modifier ici, le reste du site se met à jour.
window.CV = {
  name: "Romain Charpentier",
  title: "Développeur Full Stack, lead technique",
  intro:
    "Développeur full stack Java / TypeScript, lead technique chez Nickel. Je conçois des systèmes critiques maintenables, dans la banque, l'assurance et le secteur public, et j'introduis l'IA agentique dans les pratiques d'équipe.",
  links: [
    { label: "GitHub", href: "https://github.com/RomainCharpentier" },
    { label: "LinkedIn", href: "https://linkedin.com/in/romain-charpentier" },
  ],
  // k = noms de technologies reliés à cette compétence (clic = surlignage des missions)
  skills: [
    { group: "Langages", items: [{ l: "Java", k: ["Java"] }, { l: "TypeScript", k: ["TypeScript"] }, { l: "JavaScript", k: ["JavaScript"] }, { l: "HTML / CSS" }] },
    { group: "Frameworks", items: [{ l: "Spring", k: ["Spring"] }, { l: "React", k: ["React"] }, { l: "Vue.js", k: ["Vue.js"] }, { l: "Angular", k: ["Angular", "AngularJS"] }] },
    { group: "Données", items: [{ l: "PostgreSQL", k: ["PostgreSQL"] }, { l: "Oracle", k: ["Oracle"] }, { l: "SQL Server", k: ["MSSQL"] }, { l: "Kafka", k: ["Kafka"] }] },
    { group: "Pratiques", items: [{ l: "Clean Architecture", k: ["Clean Architecture"] }, { l: "TDD" }, { l: "Pair / Mob programming" }, { l: "ADR" }] },
    { group: "IA & agentique", items: [{ l: "Gemini Code Assist", k: ["Gemini Code Assist"] }, { l: "gemini-cli", k: ["gemini-cli"] }, { l: "Context engineering" }] },
  ],
  education: [
    { year: "2019", label: "Master Informatique", place: "Université de Poitiers" },
    { year: "2017", label: "Licence Informatique", place: "Université de Poitiers" },
  ],
  training: ["Test Driven Development", "Domain-Driven Design stratégique, Event Storming", "DevFest Nantes"],
  projects: [
    { name: "blindtest-webapp", desc: "Application web de blind test musical.", href: "https://blindtest-webapp.vercel.app" },
    { name: "Auto-hébergement, automatisation, IA", desc: "Projets personnels d'expérimentation." },
  ],
  experiences: [
    {
      company: "Nickel",
      about: "FinTech du groupe BNP Paribas",
      role: "Développeur Full Stack, puis lead développeur",
      from: "2022-11",
      to: null,
      missions: [
        {
          name: "Surveillance des comptes à risque",
          summary:
            "Refonte d'un ensemble applicatif critique de lutte anti-blanchiment, anti-terrorisme et anti-fraude, pour gagner en performance, résilience et maintenabilité sous contraintes réglementaires. Équipe de 10, Scrum / Kanban.",
          bullets: [
            "Architecture microservices rénovée en Clean Architecture, conformité garantie avec ArchUnit.",
            "Lead technique : mentorat, revues de code, ateliers de Pair Review et de Pair / Mob programming.",
            "Parmi les premiers de l'entreprise à adopter Gemini Code Assist et gemini-cli, en mode agent autonome et en scripts non interactifs sur des traitements par lots.",
            "Fichiers de contexte encodant les conventions d'architecture et de code de l'équipe, diffusés avec les prompts, et retours d'usage structurés au client et à l'éditeur.",
            "ADR, études technico-fonctionnelles et POC (micro-frontends, IA générative), chiffrage et challenge des besoins avec les Product Owners.",
          ],
          more: [
            "Gestion de la dette technique : montées de version Java 17 → 21 → 25.",
            "Mise en place du tracking avec Snowplow.",
            "Maintenance et décommissionnement du legacy .NET et T-SQL.",
            "Incidents et bugs en lien direct avec les utilisateurs, organisation des mises en production.",
          ],
          tech: ["Java 25", "Spring Boot", "Spring Batch", "Kafka", "TypeScript", "React", "Vite", "Micro-frontend", "MSSQL", "Liquibase", "JUnit", "Mockito", "Jest", "ArchUnit", "Clean Architecture", "Gemini Code Assist", "gemini-cli"],
        },
      ],
    },
    {
      company: "Thales",
      about: "Aérospatiale, défense, sécurité",
      role: "Développeur Full Stack",
      from: "2021-10",
      to: "2022-11",
      missions: [
        {
          name: "PILAT, Direction générale des Finances publiques",
          summary: "Outils d'assistance aux gestionnaires pour le contrôle fiscal. Équipe de 20, cycle en V.",
          bullets: [
            "Reprise et construction du projet from scratch : choix des technologies, mise en place de la base de code.",
            "Batchs Java de traitement de données et APIs Java.",
            "Lead tech intermédiaire sur le pôle MCO : accompagnement de l'équipe lors des task forces.",
            "Sessions de partage sur le Software Craftsmanship, revues de code, Pair Programming.",
          ],
          more: [],
          tech: ["Java 11", "Spring", "Spring Batch", "Vue.js", "PostgreSQL", "JUnit", "Jest", "Mockito"],
        },
        {
          name: "Application de flex office",
          summary: "Application web d'organisation des bureaux avec carte interactive des bâtiments. Équipe de 8, agile.",
          bullets: [
            "Analyse des besoins fonctionnels et techniques.",
            "Développement full stack, tests unitaires et fonctionnels, gestion des anomalies.",
          ],
          more: [],
          tech: ["Angular 12", "Java 11", "TypeScript", "Spring", "Docker"],
        },
      ],
    },
    {
      company: "Cat-Amania",
      about: "ESN, transformation digitale",
      role: "Développeur Full Stack (alternance puis CDI)",
      from: "2018-07",
      to: "2021-10",
      missions: [
        {
          name: "GERAP, assurance vie Macif",
          summary: "Outil d'envoi et de signature électronique des documents d'ouverture d'un contrat. Équipe de 10, agile.",
          bullets: [
            "Analyse des user stories et documentation technique.",
            "Participation aux cérémonies agiles : daily, sprint review, poker planning, démonstrations.",
          ],
          more: [],
          tech: ["Java 8", "Spring", "AngularJS", "JavaScript", "Oracle", "Jenkins", "Maven"],
        },
        {
          name: "MAPA, migration de traitements de masse",
          summary: "Reconstruction des traitements automatisés gérant tous les contrats du client, sous fortes contraintes de mémoire et de temps. Cycle en V.",
          bullets: [
            "Traitements de masse : comptabilité, relances, échéanciers.",
            "Accompagnement des mises en production et gestion d'anomalies critiques.",
            "Spécifications, réunions client, wiki d'équipe, chiffrage de projets.",
            "Accueil, formation et support technique des autres développeurs.",
          ],
          more: [],
          tech: ["Java", "Oracle", "HSQL", "Mockito", "Jenkins", "Maven"],
        },
      ],
    },
  ],
};
