const translations = {
  en: {
    bilingualBadge: "Bilingual Support",
    availability: "Accepting new clients",
    headline: "Professional Websites",
    subheadline: "We build websites that convert visitors into customers",
    ctaStart: "Get Started",
    ctaPortfolio: "Portfolio",
    footerText: `© ${new Date().getFullYear()} NullRaccoon. All rights reserved.`,
    indicators: [
      "2+ Years Experience",
      "Bilingual Support",
      "Quality & Testing Focus",
      "Robust & Scalable Development",
      "Effective Problem-Solving",
      "Project Management & Delivery",
    ],
    portfolioTitle: "Portfolio",
    images: "Images",
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
        title: "NullDental",
        description:
          "Dental Practice Management: Patient Registry, Appointments, Basic Messaging & Dashboard",
        image: "/images/nullDental-main.png",
        link: "https://nulldental.com/",
      },
      {
        title: "Personal Portfolio",
        description:
          "Professional presentation of the experience and projects of a biomedical engineer with a focus on technology and automation.",
        image: "/images/portfolio-project-thumbnail.png",
        link: "/Portfolio/",
      },
      {
        title: "Restaurant Website",
        description:
          "A modern, responsive website that highlights a restaurant’s menu and services.",
        image: "/images/restaurant.png",
        link: "https://restaurant.nullraccoon.com/",
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
      footerText: `© ${new Date().getFullYear()} NullRaccoon. All rights reserved.`,
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
    cartTitle: "🛒 Your Cart",
    cartEmptyTitle: "Oops! Your cart is empty",
    cartEmptySubtitle: "Looks like you haven’t added anything yet.",
    cartBrowseButton: "Browse Products",
    remove: "Remove",
    cartTotal: "Total",
    cartClear: "Clear Cart",
    cartCheckout: "Proceed to Checkout",
    cartRemoved: "{name} removed from cart",
    cartQtyUpdated: "Quantity updated to {qty} for {name}",
    common: {
      addToCart: "Add to Cart",
      addedToCart: "Added!!",
    },
    sortByPopularity: "Sort by popularity",
    sortByPriceAsc: "Price: Low to High",
    sortByPriceDesc: "Price: High to Low",
    sortByNameAsc: "Name: A to Z",
    sortByNameDesc: "Name: Z to A",
    caseStudies: {
      ecommercePlatform: {
        title: "E-commerce Platform",
        subtitle: "Modern online store with seamless checkout experience",
        overview:
          "A complete e-commerce solution built to handle high traffic volumes while maintaining fast load times and excellent user experience.",
        challenge:
          "The client needed a scalable platform that could handle seasonal traffic spikes while providing a smooth mobile shopping experience.",
        solution:
          "We developed a custom React frontend with a Node.js backend, implementing lazy loading, optimized images, and a progressive web app approach for mobile users.",
        results: [
          "40% increase in mobile conversion rate",
          "2.5 second average page load time at peak traffic",
          "30% reduction in cart abandonment",
        ],
        testimonial:
          '"The new platform has transformed our online business. The mobile experience is now on par with desktop, and our sales have increased dramatically."',
      },
      medtechPremier: {
        title: "Medical Equipment Management Platform",
        subtitle:
          "Comprehensive maintenance and inventory system for Premier Medical Center",
        overview:
          "A web-based platform for managing medical equipment maintenance, inventory, and service orders at Premier Medical Center in Tijuana, implementing QR code tracking and a modified Fennigkoh-Smith prioritization method.",
        challenge:
          "The medical center faced challenges managing equipment due to manual processes, dispersed records, and inefficient maintenance scheduling, leading to delays and unnecessary costs.",
        solution:
          "Developed a PHP/MySQL web application with: QR code inventory tracking, dynamic maintenance calendar, service order management, role-based access control, and equipment prioritization system.",
        features: [
          "QR Code Equipment Tracking",
          "Dynamic Maintenance Calendar",
          "Fennigkoh-Smith Prioritization",
          "Role-based Access Control",
          "Service Order Management",
        ],
        results: [
          "40% reduction in equipment downtime",
          "Centralized equipment database",
          "Automated maintenance scheduling",
        ],
        testimonial:
          '"The platform has revolutionized our biomedical department\'s operations, providing instant access to equipment history and streamlined maintenance processes."',
        screenshots: {
          calendar: {
            alt: "Calendar page for scheduling maintenance",
            altMobile: "Calendar Scheduling",
            description:
              "This page allows hospital staff to schedule and view maintenance appointments for medical equipment.",
          },
          label: {
            alt: "Medical equipment tracking label",
            altMobile: "Equipment Tracking Label",
            description:
              "A unique QR code label for each piece of medical equipment, linking directly to its detailed information page.",
          },
          machineInfo: {
            alt: "Desktop view of Machine Information page",
            altMobile: "Machine Info (Desktop)",
            description:
              "Detailed information about a specific medical equipment, including model, brand, serial number, location, status, and maintenance history.",
          },
          nurseEstation: {
            alt: "Nurse Station quick access to report issues",
            altMobile: "Nurse Station Report",
            description:
              "A streamlined interface for nurses to quickly report equipment issues, improving response times.",
          },
          main: {
            alt: "Main dashboard showing recent tickets and upcoming maintenance",
            altMobile: "Main Dashboard",
            description:
              "The main dashboard provides a quick overview of recent service tickets and upcoming maintenance schedules.",
          },
          manuals: {
            alt: "Manuals page to select PDF files",
            altMobile: "Manuals Page",
            description:
              "A dedicated section for accessing PDF manuals for various medical equipment.",
          },
          multipleLabels: {
            alt: "Page showing multiple medical equipment labels",
            altMobile: "Multiple Labels",
            description:
              "An overview of multiple generated QR code labels for different equipment.",
          },
          reports: {
            alt: "Reports page with graphs and maintenance list",
            altMobile: "Reports & Maintenance",
            description:
              "Comprehensive reports displaying maintenance metrics like open/closed orders, total orders, average resolution time, and a detailed list of all maintenance activities.",
          },
          tickets: {
            alt: "Tickets page to create maintenance tickets",
            altMobile: "Maintenance Tickets",
            description:
              "The ticketing system allows users to create, modify, prioritize, and view PDF versions of maintenance orders.",
          },
        },
      },
    },
    // General Case Study Component Keys
    caseStudyNotFound: "Case Study Not Found",
    caseStudyNotFoundMessage:
      "The requested case study doesn't exist or may have been removed.",
    returnHome: "Return Home",
    backToPortfolio: "Back to Portfolio",
    viewDemo: "View Demo",
    viewFullReport: "View Full Report",
    downloadPDF: "Download PDF",
    exploreMoreCaseStudies: "Explore More Case Studies",
    welcomeModalTitle: "NullRaccoon",
    welcomeModalSubtitle:
      "Innovative Healthcare Solutions for Modern Practices",
    stayOnPortfolio: "View Our Portfolio",
    stayOnPortfolioLabel: "Looking for our work?",
    goToNullDental: "Explore NullDental",
    goToNullDentalLabel: "Explore our dental solution",
    nullDentalSubtitle:
      "Dental practice management software that saves time, improves care, and meets NOM standards.",
    nullDentalCTA: "Visit NullDental",
    nullDentalBenefits: [
      "Complete Patient Management",
      "Smart Appointment Scheduling",
      "Secure Digital Records",
      "+ More Tools",
    ],
    nullDentalTestimonial:
      '"NullDental revolutionized our practice workflow and patient satisfaction." - Dr. Maria Rodriguez, DDS',
    pricing: {
      title: "Pricing Plans",
      subtitle: "Choose the plan that fits your dental clinic",
      toggle: {
        oneTime: "Monthly",
        annualSupport: "Yearly (2 months free)",
      },
      plans: {
        basic: {
          name: "Basic",
          monthly: "$2,800 MXN",
          yearly: "$28,000 MXN",
          breakEven: "$1,290 MXN",
          margin: "54%",
          includes: [
            "Patient registry",
            "Appointments",
            "Email reminders",
            "Simple dashboard",
            "1 admin + 2 users",
          ],
          addons: [
            "Odontogram: $1,500 MXN/month",
            "Advanced Odontogram: $2,500 MXN/month",
            "Extra messaging/email: $500 MXN/month",
            "Additional messaging/email: $1,000 MXN/month",
            "Imaging/X-ray storage upgrade: $1,000 MXN/month",
            "Additional storage: $2,000 MXN/month",
          ],
        },
        standard: {
          name: "Standard",
          monthly: "$4,500 MXN",
          yearly: "$45,000 MXN",
          breakEven: "$2,700 MXN",
          margin: "40%",
          includes: [
            "Everything Basic +",
            "Treatment plans",
            "Basic reports",
            "1–2 extra users",
          ],
          addons: [
            "Multi-location support: $2,000 MXN/month",
            "Insurance & Billing Module: $1,500 MXN/month",
            "Advanced Reporting & Analytics: $1,000 MXN/month",
            "Extra messaging/email: $500 MXN/month",
            "Imaging/X-ray storage upgrade: $1,000 MXN/month",
          ],
        },
        premium: {
          name: "Premium",
          monthly: "$7,000 MXN",
          yearly: "$70,000 MXN",
          breakEven: "$6,230 MXN",
          margin: "11%",
          includes: [
            "Everything Standard +",
            "Advanced reports",
            "Analytics",
            "User roles",
            "Automated follow-ups",
          ],
          addons: [
            "Advanced Odontogram: $2,500 MXN/month",
            "Custom workflows/automation: $2,500 MXN/month",
            "Additional messaging/email: $1,000 MXN/month",
            "Extra storage: $2,000 MXN/month",
            "API / Integrations: $2,000 MXN/month",
            "Advanced User Roles & Permissions: $1,000 MXN/month",
          ],
        },
        enterprise: {
          name: "Enterprise",
          monthly: "$7,500 MXN",
          yearly: "$75,000 MXN",
          breakEven: "$4,800 MXN",
          margin: "36%",
          includes: [
            "Everything Premium +",
            "Unlimited users",
            "Multi-location",
            "API integrations",
          ],
          addons: [
            "Dedicated Support SLA: $3,000 MXN/month",
            "White-labeling / Branding: $2,500 MXN/month",
            "Custom workflows/automation: $2,500 MXN/month",
            "Multi-location support: $2,000 MXN/month",
            "Advanced Reporting & Analytics: $1,000 MXN/month",
            "API / Integrations: $2,000 MXN/month",
          ],
        },
      },
      buttons: {
        payOneTime: "Subscribe Monthly",
        subscribeAnnual: "Subscribe Yearly",
        requestAddons: "Request Add-ons",
      },
      comingSoon: "Coming Soon",
      breakEvenTooltip: "Break-even cost per clinic",
      marginTooltip: "Profit margin percentage",
    },
  },
  es: {
    // Existing Hero translations (from your previous Hero.jsx)
    bilingualBadge: "Soporte Bilingüe",
    availability: "Aceptando nuevos clientes",
    headline: "Sitios web profesionales",
    subheadline: "Creamos sitios web que convierten visitantes en clientes",
    ctaStart: "Comenzar",
    ctaPortfolio: "Portafolio",
    footerText: `© ${new Date().getFullYear()} NullRaccoon. Todos los derechos reservados.`,
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
        title: "NullDental",
        description:
          "Solución completa de gestión de prácticas dentales con registros de salud electrónicos, programación inteligente de citas, odontogramas interactivos, planificación de tratamientos, seguimiento de inventario, soporte multi-ubicación, procesamiento de seguros e informes integrales para clínicas dentales de todos los tamaños.",
        image: "/images/medtech-premier-thumbnail.png", // placeholder
        link: "https://nulldental.com/",
      },
      {
        title: "Desarrollo profesional",
        description:
          "Presentación profesional de la experiencia y proyectos de un ingeniero biomédico con enfoque en tecnología y automatización.",
        image: "/images/portfolio-project-thumbnail.png",
        link: "/Portfolio/",
      },
      {
        title: "Sitio Web de Restaurante",
        description:
          "Un sitio web moderno y responsivo que destaca el menú y los servicios del restaurante.",
        image: "/images/restaurant.png",
        link: "https://restaurant.nullraccoon.com/",
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
    images: "Imagenes",
    relatedProducts: "Productos relacionados",
    noImageAvailable: "No hay imagen disponible",
    view: "Ver",
    cartTitle: "🛒 Tu carrito",
    remove: "Eliminar",
    cartEmptyTitle: "¡Ups! Tu carrito está vacío",
    cartEmptySubtitle: "Parece que aún no has agregado nada.",
    cartBrowseButton: "Ver productos",
    cartTotal: "Total",
    cartClear: "Vaciar carrito",
    cartCheckout: "Proceder al pago",
    cartRemoved: "{name} eliminado del carrito",
    cartQtyUpdated: "Cantidad actualizada a {qty} para {name}",
    common: {
      addToCart: "Añadir al carrito",
      addedToCart: "Añadido!",
    },
    sortByPopularity: "Ordenar por popularidad",
    sortByPriceAsc: "Precio: Menor a Mayor",
    sortByPriceDesc: "Precio: Mayor a Menor",
    sortByNameAsc: "Nombre: A a Z",
    sortByNameDesc: "Nombre: Z a A",
    caseStudies: {
      ecommercePlatform: {
        title: "Plataforma de Comercio Electrónico",
        subtitle: "Tienda en línea moderna con experiencia de pago fluida",
        overview:
          "Una solución completa de comercio electrónico construida para manejar grandes volúmenes de tráfico manteniendo tiempos de carga rápidos y una excelente experiencia de usuario.",
        challenge:
          "El cliente necesitaba una plataforma escalable que pudiera manejar picos de tráfico estacionales mientras proporcionaba una experiencia de compra móvil fluida.",
        solution:
          "Desarrollamos un frontend personalizado en React con un backend en Node.js, implementando lazy loading, imágenes optimizadas y un enfoque de aplicación web progresiva para usuarios móviles.",
        results: [
          "40% de aumento en la tasa de conversión móvil",
          "Tiempo de carga promedio de 2.5 segundos en horas pico",
          "30% de reducción en el abandono de carritos",
        ],
        testimonial:
          '"La nueva plataforma ha transformado nuestro negocio en línea. La experiencia móvil ahora está a la par con el escritorio, y nuestras ventas han aumentado dramáticamente."',
      },
      medtechPremier: {
        title: "Plataforma de Gestión de Equipos Médicos",
        subtitle:
          "Sistema integral de mantenimiento e inventario para el Centro Médico Premier",
        overview:
          "Plataforma web para la gestión de mantenimiento, inventario y órdenes de servicio de equipos médicos en el Centro Médico Premier de Tijuana, implementando seguimiento por códigos QR y método modificado Fennigkoh-Smith para priorización.",
        challenge:
          "El centro médico enfrentaba desafíos en la gestión de equipos debido a procesos manuales, registros dispersos y programación ineficiente de mantenimientos, generando retrasos y costos innecesarios.",
        solution:
          "Desarrollamos una aplicación web PHP/MySQL con: seguimiento de inventario por QR, calendario dinámico de mantenimientos, gestión de órdenes de servicio, control de acceso por roles y sistema de priorización de equipos.",
        features: [
          "Seguimiento de equipos con QR",
          "Calendario dinámico de mantenimientos",
          "Priorización Fennigkoh-Smith",
          "Control de acceso por roles",
          "Gestión de órdenes de servicio",
        ],
        results: [
          "40% reducción en tiempo de inactividad",
          "Base de datos centralizada de equipos",
          "Programación automática de mantenimientos",
        ],
        testimonial:
          '"La plataforma ha revolucionado las operaciones de nuestro departamento biomédico, proporcionando acceso instantáneo al historial de equipos y procesos de mantenimiento optimizados."',
        screenshots: {
          calendar: {
            alt: "Página de calendario para programar mantenimientos",
            altMobile: "Calendario de Mantenimiento",
            description:
              "Esta página permite al personal del hospital programar y visualizar citas de mantenimiento para equipos médicos.",
          },
          label: {
            alt: "Etiqueta de seguimiento de equipos médicos",
            altMobile: "Etiqueta de Equipo Médico",
            description:
              "Una etiqueta con código QR único para cada equipo médico, que enlaza directamente a su página de información detallada.",
          },
          machineInfo: {
            alt: "Vista de escritorio de la página de información de la máquina",
            altMobile: "Info Máquina (Escritorio)",
            description:
              "Información detallada sobre un equipo médico específico, incluyendo modelo, marca, número de serie, ubicación, estado e historial de mantenimiento.",
          },
          machineInfoMobile: {
            alt: "Vista móvil de la página de información de la máquina",
            altMobile: "Info Máquina (Móvil)",
            description:
              "La versión móvil de la página de detalles del equipo, optimizada para el acceso en movimiento.",
          },
          main: {
            alt: "Panel principal mostrando tickets recientes y próximos mantenimientos programados",
            altMobile: "Panel Principal",
            description:
              "El panel principal ofrece una visión rápida de los tickets de servicio recientes y los próximos programas de mantenimiento.",
          },
          mainMobile: {
            alt: "Vista móvil del panel principal",
            altMobile: "Panel Principal (Móvil)",
            description:
              "La versión móvil del panel principal, diseñada para una fácil navegación en pantallas más pequeñas.",
          },
          manuals: {
            alt: "Página de manuales para seleccionar archivos PDF",
            altMobile: "Página de Manuales",
            description:
              "Una sección dedicada para acceder a los manuales en formato PDF de varios equipos médicos.",
          },
          multipleLabels: {
            alt: "Página mostrando múltiples etiquetas de equipos médicos",
            altMobile: "Múltiples Etiquetas",
            description:
              "Una visión general de múltiples etiquetas de códigos QR generadas para diferentes equipos.",
          },
          nurseEstation: {
            alt: "Estación de enfermería: acceso rápido para reportar problemas",
            altMobile: "Reporte Enfermería",
            description:
              "Una interfaz optimizada para que las enfermeras reporten rápidamente problemas con el equipo, mejorando los tiempos de respuesta.",
          },
          reports: {
            alt: "Página de informes con gráficos y lista de mantenimientos",
            altMobile: "Informes y Mantenimiento",
            description:
              "Informes completos que muestran métricas de mantenimiento como órdenes abiertas/cerradas, órdenes totales, tiempo promedio de resolución y una lista detallada de todas las actividades de mantenimiento.",
          },
          tickets: {
            alt: "Página de tickets para crear órdenes de mantenimiento",
            altMobile: "Órdenes de Mantenimiento",
            description:
              "El sistema de tickets permite a los usuarios crear, modificar, priorizar y ver versiones PDF de las órdenes de mantenimiento.",
          },
        },
      },
    },
    // General Case Study Component Keys
    caseStudyNotFound: "Caso de Estudio No Encontrado",
    caseStudyNotFoundMessage:
      "El caso de estudio solicitado no existe o puede haber sido eliminado.",
    returnHome: "Volver al Inicio",
    backToPortfolio: "Volver al Portafolio",
    viewDemo: "Ver Demo",
    viewFullReport: "Ver Informe Completo",
    downloadPDF: "Descargar PDF",
    exploreMoreCaseStudies: "Explorar Más Casos de Estudio",
    welcomeModalTitle: "Bienvenido a NullRaccoon",
    welcomeModalSubtitle:
      "Soluciones Innovadoras de Salud para Prácticas Modernas",
    stayOnPortfolio: "Ver Nuestro Portafolio",
    stayOnPortfolioLabel: "¿Buscas nuestro trabajo?",
    goToNullDental: "Explorar NullDental",
    goToNullDentalLabel: "Explora nuestra solución dental",
    nullDentalSubtitle:
      "Software de gestión de prácticas dentales que ahorra tiempo, mejora la atención y cumple con estándares NOM.",
    nullDentalCTA: "Visita NullDental",
    nullDentalBenefits: [
      "Gestión Completa de Pacientes",
      "Programación Inteligente de Citas",
      "Registros Digitales Seguros",
      "+ Más Herramientas",
    ],
    nullDentalTestimonial:
      '"NullDental revolucionó nuestro flujo de trabajo y la satisfacción del paciente." - Dra. Maria Rodriguez, DDS',
    pricing: {
      title: "Planes de Precios",
      subtitle: "Elige el plan que se ajuste a tu clínica dental",
      toggle: {
        oneTime: "Mensual",
        annualSupport: "Anual (2 meses gratis)",
      },
      plans: {
        basic: {
          name: "Basic",
          monthly: "$2,800 MXN",
          yearly: "$28,000 MXN",
          breakEven: "$1,290 MXN",
          margin: "54%",
          includes: [
            "Registro de pacientes",
            "Citas",
            "Recordatorios por email",
            "Dashboard simple",
            "1 admin + 2 usuarios",
          ],
          addons: [
            "Odontograma: $1,500 MXN/mes",
            "Odontograma avanzado: $2,500 MXN/mes",
            "Mensajería/email extra: $500 MXN/mes",
            "Mensajería/email adicional: $1,000 MXN/mes",
            "Actualización de almacenamiento de imágenes/rayos X: $1,000 MXN/mes",
            "Almacenamiento adicional: $2,000 MXN/mes",
          ],
        },
        standard: {
          name: "Standard",
          monthly: "$4,500 MXN",
          yearly: "$45,000 MXN",
          breakEven: "$2,700 MXN",
          margin: "40%",
          includes: [
            "Todo lo de Basic +",
            "Planes de tratamiento",
            "Reportes básicos",
            "1–2 usuarios extra",
          ],
          addons: [
            "Soporte multi-ubicación: $2,000 MXN/mes",
            "Módulo de seguros y facturación: $1,500 MXN/mes",
            "Reportes y analíticas avanzadas: $1,000 MXN/mes",
            "Mensajería/email extra: $500 MXN/mes",
            "Actualización de almacenamiento de imágenes/rayos X: $1,000 MXN/mes",
          ],
        },
        premium: {
          name: "Premium",
          monthly: "$7,000 MXN",
          yearly: "$70,000 MXN",
          breakEven: "$6,230 MXN",
          margin: "11%",
          includes: [
            "Todo lo de Standard +",
            "Reportes avanzados",
            "Analíticas",
            "Roles de usuario",
            "Seguimientos automatizados",
          ],
          addons: [
            "Odontograma avanzado: $2,500 MXN/mes",
            "Flujos de trabajo/automación personalizados: $2,500 MXN/mes",
            "Mensajería/email adicional: $1,000 MXN/mes",
            "Almacenamiento extra: $2,000 MXN/mes",
            "API / Integraciones: $2,000 MXN/mes",
            "Roles y permisos de usuario avanzados: $1,000 MXN/mes",
          ],
        },
        enterprise: {
          name: "Enterprise",
          monthly: "$7,500 MXN",
          yearly: "$75,000 MXN",
          breakEven: "$4,800 MXN",
          margin: "36%",
          includes: [
            "Todo lo de Premium +",
            "Usuarios ilimitados",
            "Multi-ubicación",
            "Integraciones API",
          ],
          addons: [
            "SLA de soporte dedicado: $3,000 MXN/mes",
            "Etiquetado blanco / Branding: $2,500 MXN/mes",
            "Flujos de trabajo/automación personalizados: $2,500 MXN/mes",
            "Soporte multi-ubicación: $2,000 MXN/mes",
            "Reportes y analíticas avanzadas: $1,000 MXN/mes",
            "API / Integraciones: $2,000 MXN/mes",
          ],
        },
      },
      buttons: {
        payOneTime: "Suscribirse Mensual",
        subscribeAnnual: "Suscribirse Anual",
        requestAddons: "Solicitar Add-ons",
      },
      comingSoon: "Próximamente",
      breakEvenTooltip: "Costo de punto de equilibrio por clínica",
      marginTooltip: "Porcentaje de margen de ganancia",
    },
  },
};

export default translations;
