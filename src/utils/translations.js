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
        description:
          "A modern online store with cart, checkout, and admin panel.",
        image: "/images/ecommerce-project.jpg",
        link: "/store",
      },
      {
        title: "Medical Equipment Management",
        description:
          "Inventory and maintenance system for medical center with QR tracking",
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
    addToCart: "Add to Cart",
    store: {
      welcomeTitle: "Welcome to NullRaccon Store",
      welcomeSubtitle:
        "Discover top-quality medical equipment and accessories tailored for clinics, hospitals, and professionals.",
      shopNow: "Shop Now",
      whyChooseUsTitle: "Why Choose Us?",
      features: {
        fastShipping: {
          title: "Fast Shipping",
          description: "Reliable and prompt delivery for all your orders.",
        },
        trustedQuality: {
          title: "Trusted Quality",
          description: "Certified and tested medical-grade products.",
        },
        customerSatisfaction: {
          title: "Customer Satisfaction",
          description: "Rated 5 stars by hundreds of happy professionals.",
        },
      },
      featuredProductsTitle: "Featured Products",
      viewAllProducts: "View All Products →",
      footerText: `© ${new Date().getFullYear()} Gustavo Tello. All rights reserved.`,
    },
    // --- New: Product Translations ---
    products: {
      product1Name: "705 T-Shirt",
      product1Description: "Comfortable cotton T-shirt with the Zorthon logo.",
      product2Name: "#1 Sticker Pack",
      product2Description: "A pack of premium stickers.",
      product3Name: "Premium PDF Bundle",
      product3Description:
        "Downloadable PDFs of key project certifications and guides.",
      product4Name: "Wireless Earbuds",
      product4Description: "High-quality earbuds with noise cancellation.",
      product5Name: "Fitness Tracker",
      product5Description: "Keep track of your daily activities and health.",
      product6Name: "Smart Water Bottle",
      product6Description: "Tracks your hydration and syncs with your phone.",
      product7Name: "Bluetooth Speaker",
      product7Description: "Portable speaker with rich bass and stereo sound.",
      product8Name: "Laptop Sleeve",
      product8Description: "Protect your laptop with this stylish sleeve.",
      product9Name: "Wireless Charger",
      product9Description:
        "Fast wireless charger compatible with most devices.",
      product10Name: "LED Desk Lamp",
      product10Description:
        "Energy-saving desk lamp with adjustable brightness.",
      product11Name: "Portable Hard Drive",
      product11Description: "Store your files securely on the go.",
      product12Name: "Noise Cancelling Headphones",
      product12Description: "Experience immersive sound without distractions.",
    },
    header: {
      brand: "NullRaccon",
      home: "Home",
      store: "Store",
      cart: "Cart",
      about: "About",
    },
    productNotFound: "Product not found.",
    backToStore: "← Back to Store",
    home: "Home",
    relatedProducts: "Related Products",
    noImageAvailable: "No image available",
    view: "View",
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
      "Resolución de Problemas Eficaz",
      "Gestión y Entrega de Proyectos",
    ],
    portfolioTitle: "Portafolio",
    portfolioSubtitle: "Algunos de nuestros trabajos recientes",
    portfolioProjects: [
      {
        title: "Plataforma de Comercio Electrónico",
        description:
          "Una tienda en línea moderna con carrito, pago y panel de administración.",
        image: "/images/ecommerce-project.jpg",
        link: "/store",
      },
      {
        title: "Gestión de Equipos Médicos",
        description:
          "Sistema de inventario y mantenimiento para un centro médico con seguimiento por QR.",
        image: "/images/medtech-premier-thumbnail.png",
        type: "CaseStudy",
        link: "/case-study/medtech-premier",
      },
      {
        title: "Desarrollo profesional",
        description:
          "Presentación profesional de la experiencia y proyectos de un ingeniero biomédico con enfoque en tecnología y automatización.",
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
    addToCart: "Añadir al carrito",
    casestudyavailable: "Análisis detallado disponible",
    store: {
      welcomeTitle: "Bienvenido a NullRaccon Store",
      welcomeSubtitle:
        "Descubre equipos médicos y accesorios de alta calidad para clínicas, hospitales y profesionales.",
      shopNow: "Comprar Ahora",
      whyChooseUsTitle: "¿Por qué elegirnos?",
      features: {
        fastShipping: {
          title: "Envío Rápido",
          description: "Entrega confiable y rápida para todos tus pedidos.",
        },
        trustedQuality: {
          title: "Calidad Confiable",
          description: "Productos certificados y probados de grado médico.",
        },
        customerSatisfaction: {
          title: "Satisfacción del Cliente",
          description:
            "Calificado con 5 estrellas por cientos de profesionales satisfechos.",
        },
      },
      featuredProductsTitle: "Productos Destacados",
      viewAllProducts: "Ver Todos los Productos →",
      footerText: `© ${new Date().getFullYear()} Gustavo Tello. Todos los derechos reservados.`,
    },
    products: {
      product1Name: "Camiseta 705",
      product1Description: "Cómoda camiseta de algodón con el logo de Zorthon.",
      product2Name: "Paquete de Stickers #1",
      product2Description: "Un paquete de pegatinas premium.",
      product3Name: "Paquete PDF Premium",
      product3Description:
        "PDFs descargables de certificaciones y guías clave del proyecto.",
      product4Name: "Auriculares Inalámbricos",
      product4Description:
        "Auriculares de alta calidad con cancelación de ruido.",
      product5Name: "Monitor de Actividad",
      product5Description: "Registra tus actividades diarias y tu salud.",
      product6Name: "Botella de Agua Inteligente",
      product6Description:
        "Registra tu hidratación y se sincroniza con tu teléfono.",
      product7Name: "Altavoz Bluetooth",
      product7Description:
        "Altavoz portátil con bajos potentes y sonido estéreo.",
      product8Name: "Funda para Portátil",
      product8Description: "Protege tu portátil con esta elegante funda.",
      product9Name: "Cargador Inalámbrico",
      product9Description:
        "Cargador inalámbrico rápido compatible con la mayoría de los dispositivos.",
      product10Name: "Lámpara de Escritorio LED",
      product10Description:
        "Lámpara de escritorio de bajo consumo con brillo ajustable.",
      product11Name: "Disco Duro Portátil",
      product11Description:
        "Guarda tus archivos de forma segura dondequiera que vayas.",
      product12Name: "Auriculares con Cancelación de Ruido",
      product12Description:
        "Disfruta de un sonido inmersivo sin distracciones.",
    },
    header: {
      brand: "NullRaccon",
      home: "Inicio",
      store: "Tienda",
      cart: "Carrito",
      about: "Acerca de",
    },
    productNotFound: "Producto no encontrado.",
    backToStore: "← Volver a la tienda",
    home: "Inicio",
    relatedProducts: "Productos relacionados",
    noImageAvailable: "No hay imagen disponible",
    view: "Ver",
  },
};

export default translations;
