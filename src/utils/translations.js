const translations = {
  en: {
    bilingualBadge: "Bilingual Support",
    availability: "Accepting new clients",
    headline: "Web Development & Digital Systems Studio",
    subheadline: "We engineer high-performance web platforms, booking systems, and digital solutions designed to acquire customers and scale businesses.",
    ctaStart: "Get Started",
    ctaPortfolio: "Portfolio",
    services: "Services",
    privacyPolicy: "Privacy Policy",
    termsAndConditions: "Terms & Conditions",
    footerText: `© ${new Date().getFullYear()} NullRaccoon. All rights reserved.`,
    indicators: [
      "Delivery Scheduled by Service & Scope",
      "Proprietary & Custom-Built Systems",
      "SEO & Conversion Optimization",
      "Bilingual Support & Formal Invoicing"
    ],
    portfolioTitle: "Our Solutions & Platforms",
    images: "Images",
    portfolioSubtitle: "Proprietary platforms and custom systems developed by NullRaccoon to streamline operations and grow businesses.",
    portfolioProjects: [
      {
        title: "NullCommunity Club",
        description:
          "Administrative portal for condominiums and residential communities: amenity bookings, finances, and access control.",
        image: "/images/nullCommunity.png",
        link: "https://community.nullraccoon.com/",
      },
      {
        title: "NullDental",
        description:
          "Clinical management and automated medical booking platform with patient records and an administrative dashboard.",
        image: "/images/nullDental-main.png",
        link: "https://dental.nullraccoon.com/",
      },
      {
        title: "E-commerce Platform",
        description:
          "A modern online store with cart, checkout, and admin panel.",
        image: "/images/ecommerce-project.jpg",
        link: "/store",
      },
      {
        title: "MedTech Premier",
        description:
          "Inventory and technical traceability system with QR codes for medical equipment centers.",
        image: "/images/medtech-premier-thumbnail.png",
        type: "CaseStudy",
        link: "/case-study/medtech-premier",
      },
      {
        title: "Professional Presence Platform",
        description:
          "Custom digital presence for professional services, presenting expertise and solutions to attract business opportunities.",
        image: "/images/portfolio-project-thumbnail.png",
        link: "/Portfolio/",
      },
      {
        title: "Restaurant Platform",
        description:
          "Digital restaurant system with a dynamic interactive menu, ordering, and local conversion optimization.",
        image: "/images/restaurant.png",
        link: "https://restaurant.nullraccoon.com/",
      },
    ],
    portfolioNav: "Solutions",
    guaranteesNav: "Guarantees",
    guaranteesTitle: "NullRaccoon Guarantees",
    guarantees: [
      {
        "title": "Delivery SLA",
        "description": "Turnkey delivery and deployment on the schedule agreed for your service and scope."
      },
      {
        "title": "Security & Clean Code",
        "description": "Modern architectures with React and Tailwind, without bloated templates. Fast, secure systems."
      },
      {
        "title": "Ongoing Maintenance & Backups",
        "description": "Monthly technical support plans, backups, and ongoing updates."
      },
      {
        "title": "Formal Business Terms",
        "description": "Service agreements and invoicing available."
      }
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
      welcomeTitle: "Explore the demo catalog",
      welcomeSubtitle:
        "Explore a sample catalog and interactive cart. This is a software demonstration.",
      shopNow: "Shop Now",
      whyChooseUsTitle: "Why Choose Us?",
      features: {
        fastShipping: {
          title: "Fast Shipping",
          description: "Reliable and prompt delivery for all your orders.",
        },
        trustedQuality: {
          title: "Trusted Quality",
          description: "Sample products for exploring the demo.",
        },
        customerSatisfaction: {
          title: "Customer Satisfaction",
          description: "Explore sample shopping and cart interactions.",
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
        "title": "E-commerce demonstration",
        "subtitle": "Catalog, products, and cart with sample data",
        "overview": "An interactive demo to explore store navigation, product details, and cart management. It does not accept orders or process payments.",
        "challenge": "Show how a catalog, product details, and cart connect in a shopping experience.",
        "solution": "React interface with product routes, a Context API cart, quantity controls, and Spanish and English translations. No order backend or payment integration is included.",
        "results": [
          "Responsive catalog and product pages",
          "Interactive cart and quantity controls",
          "Sample data and payments disabled"
        ]
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
          "QR access to equipment records",
          "Centralized equipment database",
          "Automated maintenance scheduling",
        ],
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
    headline: "Estudio de Desarrollo Web y Sistemas Digitales",
    subheadline: "Desarrollamos plataformas web de alto rendimiento, sistemas de citas y soluciones digitales diseñadas para conseguir clientes y escalar negocios.",
    ctaStart: "Comenzar",
    ctaPortfolio: "Portafolio",
    services: "Servicios",
    privacyPolicy: "Política de Privacidad",
    termsAndConditions: "Términos y Condiciones",
    footerText: `© ${new Date().getFullYear()} NullRaccoon. Todos los derechos reservados.`,
    indicators: [
      "Entregas según Servicio y Alcance",
      "Sistemas Propietarios y a la Medida",
      "Optimización SEO y Alta Conversión",
      "Soporte Bilingüe y Facturación Formal"
    ],
    portfolioTitle: "Nuestras Soluciones y Plataformas",
    portfolioSubtitle: "Plataformas propietarias y sistemas a la medida desarrollados por NullRaccoon para optimizar operaciones y escalar negocios.",
    portfolioProjects: [
      {
        title: "NullCommunity Club",
        description:
          "Portal administrativo para condominios y comunidades residenciales: reservas de amenidades, finanzas y control de acceso.",
        image: "/images/nullCommunity.png",
        link: "https://community.nullraccoon.com/",
      },
      {
        title: "NullDental",
        description:
          "Plataforma de gestión clínica y reservas médicas automatizadas con expediente de pacientes y panel de control.",
        image: "/images/nullDental-main.png",
        link: "https://dental.nullraccoon.com/",
      },
      {
        title: "Plataforma de Comercio Electrónico",
        description:
          "Una tienda en línea moderna con carrito, pago y panel de administración.",
        image: "/images/ecommerce-project.jpg",
        link: "/store",
      },
      {
        title: "MedTech Premier",
        description:
          "Sistema de inventario y trazabilidad técnica con códigos QR para centros de equipo médico.",
        image: "/images/medtech-premier-thumbnail.png",
        type: "CaseStudy",
        link: "/case-study/medtech-premier",
      },
      {
        title: "Plataforma de Presencia Profesional",
        description:
          "Presencia digital a la medida para servicios profesionales, con experiencia y soluciones orientadas a atraer oportunidades comerciales.",
        image: "/images/portfolio-project-thumbnail.png",
        link: "/Portfolio/",
      },
      {
        title: "Restaurant Platform",
        description:
          "Sistema digital para restaurantes con menú interactivo dinámico, pedidos y optimización de conversión local.",
        image: "/images/restaurant.png",
        link: "https://restaurant.nullraccoon.com/",
      },
    ],
    portfolioNav: "Soluciones",
    guaranteesNav: "Garantías",
    guaranteesTitle: "Garantías NullRaccoon",
    guarantees: [
      {
        "title": "SLA de Entrega",
        "description": "Entrega y despliegue llave en mano con el calendario acordado para tu servicio y alcance."
      },
      {
        "title": "Seguridad y Código Limpio",
        "description": "Arquitecturas modernas (React/Tailwind), sin plantillas infladas, rápidas y seguras."
      },
      {
        "title": "Mantenimiento y Respaldo Continuo",
        "description": "Planes de soporte técnico mensual, copias de seguridad y actualización constante."
      },
      {
        "title": "Trato Formal",
        "description": "Contrato de prestación de servicios y facturación disponible."
      }
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
      welcomeTitle: "Explora el catálogo demo",
      welcomeSubtitle:
        "Explora un catálogo de muestra y un carrito interactivo. Esta es una demostración de software.",
      shopNow: "Comprar Ahora",
      whyChooseUsTitle: "¿Por qué elegirnos?",
      features: {
        fastShipping: {
          title: "Envío Rápido",
          description: "Entrega confiable y rápida para todos tus pedidos.",
        },
        trustedQuality: {
          title: "Calidad Confiable",
          description: "Productos de muestra para explorar la demo.",
        },
        customerSatisfaction: {
          title: "Satisfacción del Cliente",
          description:
            "Explora interacciones de compra y carrito con datos de muestra.",
        },
      },
      featuredProductsTitle: "Productos Destacados",
      viewAllProducts: "Ver Todos los Productos →",
      footerText: `© ${new Date().getFullYear()} NullRaccoon. Todos los derechos reservados.`,
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
        "title": "Demostración de comercio electrónico",
        "subtitle": "Catálogo, productos y carrito con datos de muestra",
        "overview": "Una demo interactiva para explorar la navegación de una tienda, las fichas de producto y la gestión del carrito. No recibe pedidos ni procesa pagos.",
        "challenge": "Mostrar cómo se conectan el catálogo, las fichas de producto y el carrito en una experiencia de compra.",
        "solution": "Interfaz en React con rutas de productos, carrito mediante Context API, control de cantidades y traducciones en español e inglés. No incluye backend de pedidos ni integración de pagos.",
        "results": [
          "Catálogo y fichas de producto responsivos",
          "Carrito interactivo y control de cantidades",
          "Datos de muestra y pagos desactivados"
        ]
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
          "Acceso a expedientes de equipos mediante QR",
          "Base de datos centralizada de equipos",
          "Programación automática de mantenimientos",
        ],
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
