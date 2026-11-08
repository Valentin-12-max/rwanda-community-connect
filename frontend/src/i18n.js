cat > src/i18n.js <<'EOF'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      community: "Community",
      marketplace: "Marketplace",
      education: "Education",
      jobs: "Jobs",
      events: "Events",
      login: "Log in",
      signup: "Join RCC",
      badge: "Together, we build a stronger Rwanda",
      heroTitle: "Connect. Discover. Grow.",
      heroText: "One digital community bringing people, businesses, opportunities and ideas together across Rwanda.",
      explore: "Explore the community",
      learn: "Discover more",
      members: "Community members",
      businesses: "Local businesses",
      opportunities: "Opportunities",
      welcome: "Everything your community needs",
      welcomeText: "Discover useful services and opportunities, connect with people and become part of a growing community.",
      communityDesc: "Share ideas, connect with people, join groups and participate in conversations.",
      marketDesc: "Discover local shops, products, services and businesses across Rwanda.",
      educationDesc: "Find learning resources, training programmes, scholarships and educational opportunities.",
      jobsDesc: "Explore jobs, internships, professional connections and career opportunities.",
      eventsDesc: "Discover community events, workshops, conferences and activities near you.",
      connectTitle: "Your community. Your opportunities. One platform.",
      connectText: "Whether you are a student, entrepreneur, professional or community member, RCC helps you discover opportunities and build meaningful connections.",
      getStarted: "Get started today",
      footerText: "Connecting people and opportunities across Rwanda.",
      quickLinks: "Quick links",
      about: "About RCC",
      contact: "Contact",
      privacy: "Privacy",
      rights: "All rights reserved."
    }
  },
  rw: {
    translation: {
      home: "Ahabanza",
      community: "Umuryango",
      marketplace: "Isoko",
      education: "Uburezi",
      jobs: "Akazi",
      events: "Ibirori",
      login: "Injira",
      signup: "Iyandikishe",
      badge: "Dufatanyije twubaka u Rwanda rukomeye",
      heroTitle: "Huza. Menya. Tera imbere.",
      heroText: "Urubuga ruhuza abantu, ubucuruzi, amahirwe n'ibitekerezo mu Rwanda hose.",
      explore: "Sura umuryango",
      learn: "Menya byinshi",
      members: "Abanyamuryango",
      businesses: "Ubucuruzi",
      opportunities: "Amahirwe",
      welcome: "Ibyo umuryango wawe ukeneye byose",
      welcomeText: "Menya serivisi n'amahirwe, huza n'abandi kandi ube umwe mu bagize umuryango mugari.",
      communityDesc: "Sangiza ibitekerezo, huza n'abantu kandi winjire mu matsinda.",
      marketDesc: "Menya amaduka, ibicuruzwa na serivisi biboneka mu Rwanda.",
      educationDesc: "Shaka amasomo, amahugurwa, buruse n'andi mahirwe y'uburezi.",
      jobsDesc: "Shaka akazi, kwimenyereza umwuga n'amahirwe yo kwiteza imbere.",
      eventsDesc: "Menya ibirori, amahugurwa n'ibikorwa bibera hafi yawe.",
      connectTitle: "Umuryango wawe. Amahirwe yawe. Urubuga rumwe.",
      connectText: "Waba uri umunyeshuri, rwiyemezamirimo cyangwa umunyamwuga, RCC igufasha kubona amahirwe no guhuza n'abandi.",
      getStarted: "Tangira uyu munsi",
      footerText: "Duhuza abantu n'amahirwe mu Rwanda.",
      quickLinks: "Ahuza y'ingenzi",
      about: "Ibyerekeye RCC",
      contact: "Twandikire",
      privacy: "Amakuru bwite",
      rights: "Uburenganzira bwose burarinzwe."
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      community: "Communauté",
      marketplace: "Marché",
      education: "Éducation",
      jobs: "Emplois",
      events: "Événements",
      login: "Connexion",
      signup: "Rejoindre RCC",
      badge: "Ensemble, construisons un Rwanda plus fort",
      heroTitle: "Connectez. Découvrez. Progressez.",
      heroText: "Une communauté numérique qui rassemble les personnes, les entreprises et les opportunités au Rwanda.",
      explore: "Explorer la communauté",
      learn: "En savoir plus",
      members: "Membres",
      businesses: "Entreprises locales",
      opportunities: "Opportunités",
      welcome: "Tout ce dont votre communauté a besoin",
      welcomeText: "Découvrez des services et des opportunités, rencontrez des personnes et participez à une communauté en pleine croissance.",
      communityDesc: "Partagez des idées, rencontrez des personnes et rejoignez des groupes.",
      marketDesc: "Découvrez des boutiques, des produits et des services locaux.",
      educationDesc: "Trouvez des formations, des bourses et des ressources éducatives.",
      jobsDesc: "Explorez des emplois, des stages et des opportunités professionnelles.",
      eventsDesc: "Découvrez des événements, des ateliers et des activités près de chez vous.",
      connectTitle: "Votre communauté. Vos opportunités. Une plateforme.",
      connectText: "Étudiant, entrepreneur ou professionnel, RCC vous aide à découvrir des opportunités et à créer des liens.",
      getStarted: "Commencer aujourd'hui",
      footerText: "Connecter les personnes et les opportunités au Rwanda.",
      quickLinks: "Liens rapides",
      about: "À propos de RCC",
      contact: "Contact",
      privacy: "Confidentialité",
      rights: "Tous droits réservés."
    }
  },
  sw: {
    translation: {
      home: "Nyumbani",
      community: "Jamii",
      marketplace: "Soko",
      education: "Elimu",
      jobs: "Kazi",
      events: "Matukio",
      login: "Ingia",
      signup: "Jiunge na RCC",
      badge: "Pamoja tunajenga Rwanda imara",
      heroTitle: "Unganisha. Gundua. Endelea.",
      heroText: "Jumuiya ya kidijitali inayounganisha watu, biashara na fursa kote Rwanda.",
      explore: "Gundua jumuiya",
      learn: "Jifunze zaidi",
      members: "Wanajamii",
      businesses: "Biashara za ndani",
      opportunities: "Fursa",
      welcome: "Kila kitu ambacho jamii yako inahitaji",
      welcomeText: "Gundua huduma na fursa, ungana na watu na uwe sehemu ya jumuiya inayokua.",
      communityDesc: "Shiriki mawazo, ungana na watu na jiunge na vikundi.",
      marketDesc: "Gundua maduka, bidhaa na huduma za ndani nchini Rwanda.",
      educationDesc: "Pata mafunzo, ufadhili wa masomo na rasilimali za elimu.",
      jobsDesc: "Gundua kazi, mafunzo kwa vitendo na fursa za taaluma.",
      eventsDesc: "Gundua matukio, warsha na shughuli zilizo karibu nawe.",
      connectTitle: "Jumuiya yako. Fursa zako. Jukwaa moja.",
      connectText: "Uwe mwanafunzi, mjasiriamali au mtaalamu, RCC inakusaidia kupata fursa na kujenga mahusiano.",
      getStarted: "Anza leo",
      footerText: "Kuunganisha watu na fursa kote Rwanda.",
      quickLinks: "Viungo vya haraka",
      about: "Kuhusu RCC",
      contact: "Wasiliana nasi",
      privacy: "Faragha",
      rights: "Haki zote zimehifadhiwa."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
EOF