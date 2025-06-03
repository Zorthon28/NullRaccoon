const translations = {
  en: {
    bilingualBadge: "Bilingual Support",
    availability: "Accepting new clients",
    headline: "Professional Websites",
    subheadline: "We build websites that convert visitors into customers",
    ctaStart: "Get Started",
    ctaPortfolio: "Portfolio",
    indicators: [
      "2+ Years Experience",
      "Bilingual Support",
      "Quality & Testing Focus",
      "Robust & Scalable Development",
      "Effective Problem-Solving",
      "Project Management & Delivery",
    ],
    portfolioTitle: "Portfolio",
    portfolioSubtitle: "Some of our recent work",
    portfolioProjects: [
      {
        title: "E-commerce Platform",
        description: "A modern online store with cart, checkout, and admin panel.",
        image: "/images/ecommerce-project.jpg",
        type: "CaseStudy",
        link: "/store",
      },
      {
        title: "Medical Equipment Management",
        description: "Inventory and maintenance system for medical center with QR tracking",
        image: "/images/medtech-premier-thumbnail.png",
        type: "CaseStudy",
        link: "/case-study/medtech-premier",
      },
      {
        title: "Personal Portfolio",
        description: "A responsive portfolio site for a creative freelancer.",
        image: "/images/portfolio-project-thumbnail.png",
        link: "/Portfolio/",
      },
    ],
    certificationsTitle: "My Certifications",
    certificationsList: [
      {
        name: "Codecademy User",
        imgSrc: "/images/codecademy-logo.png",
        url: "https://www.codecademy.com/profiles/Zorthon28",
      },
      {
        name: "CSS Certificate",
        imgSrc: "/images/CSS-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/3a62023b0054dc793edc0adecd715fd7",
      },
      {
        name: "Junit Certificate",
        imgSrc: "/images/Junit-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/e95ecc4c837848d4a6548967fb8fe349",
      },
      {
        name: "React Certificate",
        imgSrc: "/images/React-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/af00e5032d0a68cc84879983f5d8333b",
      },
      {
        name: "Design Thinking for Innovation: Prototyping and Testing",
        imgSrc: "/images/Testing-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/cf46232352e042c6baa6a2d3c53c62f5",
      },
      {
        name: "Website Deployment & Hosting Fundamentals",
        imgSrc: "/images/DeployWeb-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/358e250fca144526a6b2934ff44fbc01",
      },
    ],

    // --- ADDED CASE STUDY SPECIFIC UI STRINGS HERE ---
    backToCases: "Back to Case Studies",
    overview: "Project Overview",
    challenge: "The Challenge",
    solution: "Our Solution",
    technologies: "Technologies Used",
    results: "Key Results",
    testimonial: "Client Testimonial",
    nextCase: "Next Case Study",
    features: "Key Features",
    screenshot: "Screenshot",
    previous: "Previous",
    next: "Next",
    casestudyavailable: "Case Study Available",
    
  },
  es: {
    // Existing Hero translations (from your previous Hero.jsx)
    bilingualBadge: "Soporte Bilingüe",
    availability: "Aceptando nuevos clientes",
    headline: "Sitios web profesionales",
    subheadline: "Creamos sitios web que convierten visitantes en clientes",
    ctaStart: "Comenzar",
    ctaPortfolio: "Portafolio",
    indicators: [
      "2+ Años de experiencia",
      "Soporte bilingüe",
      "Enfoque en Calidad y Pruebas",
      "Desarrollo Robusto y Escalable",
      "Resolución de Problemas Eficaz",    // ¡Nuevo!
      "Gestión y Entrega de Proyectos", // ¡Nuevo!
    ],
    portfolioTitle: "Portafolio",
    portfolioSubtitle: "Algunos de nuestros trabajos recientes",
    portfolioProjects: [
      {
        title: "Plataforma de Comercio Electrónico",
        description: "Una tienda en línea moderna con carrito, pago y panel de administración.",
        image: "/images/ecommerce-project.jpg",
        type: "CaseStudy",
        link: "/store",
      },
      {
        title: "Gestión de Equipos Médicos",
        description: "Sistema de inventario y mantenimiento para un centro médico con seguimiento por QR.",
        image: "/images/medtech-premier-thumbnail.png",
        type: "CaseStudy",
        link: "/case-study/medtech-premier",
      },
      {
        title: "Desarrollo profesional",
        description: "Presentación profesional de la experiencia y proyectos de un ingeniero biomédico con enfoque en tecnología y automatización.",
        image: "/images/portfolio-project-thumbnail.png",
        link: "/Portfolio/",
      },
    ],
    certificationsTitle: "Certificaciones",
    certificationsList: [
      {
        name: "Usuario de Codecademy",
        imgSrc: "/images/codecademy-logo.png",
        url: "https://www.codecademy.com/profiles/Zorthon28",
      },
      {
        name: "Certificado de CSS",
        imgSrc: "/images/CSS-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/3a62023b0054dc793edc0adecd715fd7",
      },
      {
        name: "Certificado de Junit",
        imgSrc: "/images/Junit-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/e95ecc4c837848d4a6548967fb8fe349",
      },
      {
        name: "Certificado de React",
        imgSrc: "/images/React-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/af00e5032d0a68cc84879983f5d8333b",
      },
      {
        name: "Design Thinking para la innovación: Prototipos y pruebas",
        imgSrc: "/images/Testing-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/cf46232352e042c6baa6a2d3c53c62f5",
      },
      {
        name: "Fundamentos de implantación y alojamiento de sitios web",
        imgSrc: "/images/DeployWeb-Cert.png",
        url: "https://www.codecademy.com/profiles/Zorthon28/certificates/358e250fca144526a6b2934ff44fbc01",
      },
    ],
    // --- ADDED CASE STUDY SPECIFIC UI STRINGS HERE ---
    backToCases: "Volver a Casos de Estudio",
    overview: "Resumen del Proyecto",
    challenge: "El Desafío",
    solution: "Nuestra Solución",
    technologies: "Tecnologías Utilizadas",
    results: "Resultados Clave",
    testimonial: "Testimonio del Cliente",
    nextCase: "Siguiente Caso de Estudio",
    features: "Características Clave",
    screenshot: "Captura de Pantalla",
    previous: "Anterior",
    next: "Siguiente",
    casestudyavailable: "Análisis detallado disponible",
  },
};

export default translations; // <--- ADDED export default
