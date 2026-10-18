export interface Project {
  slug: string;
  titleES: string;
  titleEN: string;
  descriptionES: string;
  descriptionEN: string;
  longDescriptionES: string;
  longDescriptionEN: string;
  problemSolvedES?: string;
  problemSolvedEN?: string;
  category: ('Web' | 'Mobile' | 'Backend' | 'IoT' | 'IA')[];
  status: 'finished' | 'in_development' | 'upcoming';
  technologies: string[];
  featured: boolean;
  hidden?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  featuresES: string[];
  featuresEN: string[];
}

export const projectsData: Project[] = [
  {
    slug: 'restock',
    titleES: 'Restock — Control de Stock Automatizado por IoT',
    titleEN: 'Restock — IoT Automated Stock Control',
    descriptionES: 'Sistema integral de gestión de inventarios diseñado para restaurantes. Combina sensores físicos de peso/temperatura, procesamiento edge, API cloud y soporte offline.',
    descriptionEN: 'An IoT-based inventory management system for restaurants. Combines physical weight/temperature sensors, edge processing, a cloud API, and an offline-supported mobile app.',
    longDescriptionES: 'Restock es una solución empresarial completa diseñada para automatizar la cadena de suministro en restaurantes. Monitorea contenedores en tiempo real usando celdas de carga y sensores de temperatura/humedad conectados a ESP32, procesa datos en la capa edge para filtrar el ruido y transmitirlos vía MQTT, y utiliza un backend robusto basado en DDD y CQRS. Ofrece visualización en tiempo real mediante un dashboard web y una aplicación móvil con sincronización local.',
    longDescriptionEN: 'Restock is a comprehensive enterprise solution designed to automate inventory control in restaurants. It monitors containers in real-time using load cells and temperature/humidity sensors connected to ESP32 microcontrollers, processes telemetry at the edge to filter noise, routes messages via MQTT, and leverages a robust backend with DDD and CQRS. It offers real-time visualization through a web dashboard and an offline-first mobile app.',
    problemSolvedES: 'Automatizar el control manual de inventario de ingredientes en restaurantes, evitando pérdidas por desperdicio y quiebres de stock mediante celdas de carga y sensores IoT en tiempo real.',
    problemSolvedEN: 'Automating manual ingredient inventory control in restaurants, preventing waste and stockouts using real-time load cells and IoT sensors.',
    category: ['IoT', 'Backend', 'Web', 'Mobile'],
    status: 'finished',
    technologies: ['Spring Boot', 'Java', 'MongoDB', 'Angular', 'Flutter', 'Python', 'Flask', 'MQTT', 'ESP32', 'C++'],
    featured: true,
    githubUrl: 'https://github.com/desarrollo-de-soluciones-iot-17757',
    featuresES: [
      'Monitoreo en tiempo real de peso, temperatura y humedad en contenedores de ingredientes.',
      'Arquitectura de Edge Computing que filtra ruido y detecta cambios significativos localmente.',
      'Backend cloud robusto desarrollado en Spring Boot siguiendo Domain-Driven Design (DDD) y CQRS.',
      'App móvil multiplataforma (Flutter) con soporte offline completo mediante base de datos SQLite local.',
      'Dashboard administrativo en Angular con analíticas detalladas y control de costos por recetas.',
      'Alertas automáticas configurables en base a umbrales de existencias críticamente bajas.'
    ],
    featuresEN: [
      'Real-time weight, temperature, and humidity monitoring of ingredient containers.',
      'Edge computing architecture filtering telemetry noise and identifying changes locally.',
      'Robust cloud backend developed in Spring Boot implementing Domain-Driven Design (DDD) and CQRS.',
      'Cross-platform mobile app (Flutter) with offline-first support via local SQLite synchronization.',
      'Administrative web dashboard in Angular with detailed analytics and recipe-based cost control.',
      'Configurable automated alerts triggered by critical stock thresholds.'
    ]
  },
  {
    slug: 'gestion-citas-medicas',
    titleES: 'Optimización de Agendamiento Clínico',
    titleEN: 'Clinical Booking Optimization Platform',
    descriptionES: 'Sistema full-stack para agendar y gestionar citas clínicas con control de roles (Administrador, Doctor, Paciente), autenticación segura JWT y validación de disponibilidad en tiempo real.',
    descriptionEN: 'A full-stack medical appointment scheduling system featuring role-based access control (Admin, Doctor, Patient), secure JWT authentication, and real-time availability validation.',
    longDescriptionES: 'Plataforma web que automatiza la reservación de citas en clínicas médicas. Incluye un backend en Spring Boot con autenticación JWT que maneja la persistencia y reglas de negocio, y un frontend dinámico en Vue.js 3 que gestiona el estado global de forma reactiva con Pinia, garantizando que no se crucen los horarios disponibles de los médicos.',
    longDescriptionEN: 'A web platform that automates clinic booking. It features a Spring Boot backend secured with JWT that manages data persistence and business logic, and a dynamic Vue.js 3 frontend utilizing Pinia for state management, preventing overlapping appointments for medical staff.',
    problemSolvedES: 'Optimizar la reserva de citas en clínicas médicas para eliminar los cruces de horarios y la duplicidad de registros mediante validación activa en tiempo real.',
    problemSolvedEN: 'Optimizing clinic booking flows to eliminate scheduling conflicts and double bookings through real-time validation checks.',
    category: ['Web', 'Backend'],
    status: 'in_development',
    technologies: ['Spring Boot', 'Java', 'Vue.js 3', 'Pinia', 'PostgreSQL', 'JWT'],
    featured: false,
    featuresES: [
      'Control de acceso basado en roles para Pacientes, Doctores y Administradores.',
      'Autenticación robusta basada en JSON Web Tokens (JWT) con expiración y renovación.',
      'Validación lógica en backend que impide la duplicación de citas y colisiones de horarios.',
      'Interfaz de usuario reactiva y fluida construida en Vue.js 3 (Composition API).',
      'Gestión de estado escalable y desacoplada mediante Pinia.'
    ],
    featuresEN: [
      'Role-based access control (RBAC) customized for Patients, Doctors, and Admins.',
      'Robust authentication powered by JSON Web Tokens (JWT) with expiration handling.',
      'Backend validation logic preventing scheduling conflicts and double bookings.',
      'Reactive and responsive interface built with Vue.js 3 (Composition API).',
      'State management handled efficiently using Pinia.'
    ]
  },
  {
    slug: 'event-access-control',
    hidden: true,
    titleES: 'Gobernanza de Acceso QR para Eventos',
    titleEN: 'QR Event Admission Governance',
    descriptionES: 'Sistema full-stack para check-in de eventos en tiempo real mediante escaneo de códigos QR encriptados. Backend modular y app móvil complementaria en Flutter.',
    descriptionEN: 'A full-stack event check-in system utilizing real-time QR code scanning. Built with Spring Boot Clean Architecture and a Flutter companion app.',
    longDescriptionES: 'Este sistema resuelve el control de accesos en eventos masivos de manera rápida y segura. Consta de una API RESTful desarrollada con Arquitectura Limpia en Spring Boot que valida la autenticidad de entradas encriptadas en QR, y una app móvil en Flutter que utiliza la cámara para un escaneo continuo de alta velocidad con soporte de retroalimentación táctil y visual.',
    longDescriptionEN: 'This system addresses high-throughput access validation for major events. It consists of a Spring Boot REST API built with Clean Architecture to validate encrypted QR passes, and a Flutter mobile app utilizing the device camera for fast scanning with haptic and visual feedback.',
    problemSolvedES: 'Prevenir el fraude de boletos y agilizar las filas de acceso a eventos masivos mediante entradas QR encriptadas y escaneo móvil de alta velocidad.',
    problemSolvedEN: 'Preventing ticket fraud and speeding up entrance lines at massive events using encrypted QR passes and high-speed mobile scans.',
    category: ['Mobile', 'Backend'],
    status: 'finished',
    technologies: ['Spring Boot', 'Java', 'Flutter', 'Provider', 'PostgreSQL', 'Clean Architecture'],
    featured: false,
    featuresES: [
      'Generación y validación de códigos QR únicos y encriptados para evitar fraudes.',
      'Backend estructurado en capas desacopladas siguiendo Clean Architecture.',
      'App móvil en Flutter optimizada para escaneo rápido mediante cámara del dispositivo.',
      'Soporte multi-evento gestionable desde el backend.',
      'Monitoreo en tiempo real de la tasa de asistencia en un panel administrativo.'
    ],
    featuresEN: [
      'Generation and validation of unique, encrypted QR codes to prevent counterfeits.',
      'Backend decoupling using strict Clean Architecture layers.',
      'Flutter mobile client optimized for rapid scanning through integrated camera modules.',
      'Multi-event support manageable directly from the backend API.',
      'Real-time attendance rate tracking visible in administrative reports.'
    ]
  },
  {
    slug: 'inventory-management-system',
    hidden: true,
    titleES: 'Consola de Inventarios con Laravel & Livewire',
    titleEN: 'Inventory Console (Laravel & Livewire)',
    descriptionES: 'Plataforma administrativa de control de stock con alertas automáticas de nivel bajo, historial de movimientos detallado y exportación de reportes operativos en PDF.',
    descriptionEN: 'An administrative inventory tracking platform featuring automated low-stock notifications, transaction logs, and PDF report exporting.',
    longDescriptionES: 'Un sistema ágil desarrollado para pequeñas y medianas empresas comerciales. Aprovecha Laravel 10 para la lógica de servidor y Livewire 3 para lograr una experiencia SPA sin escribir JavaScript complejo. Cuenta con un buscador de productos en tiempo real, control estricto de roles (Admin, Almacenero, Empleado) y alertas instantáneas de stock.',
    longDescriptionEN: 'An agile system engineered for small and medium-sized commerce businesses. Uses Laravel 10 for server-side logic and Livewire 3 to achieve SPA-like fluidity without complex JS code. Features live search, role configuration (Admin, Stockkeeper, Employee), and stock notifications.',
    problemSolvedES: 'Simplificar el control diario de stock en almacenes mediante reportes automáticos, auditorías y alertas dinámicas visuales sin recargas de página.',
    problemSolvedEN: 'Simplifying daily stock management in warehouses via automated reports, audits, and dynamic visual alerts without page reloads.',
    category: ['Web', 'Backend'],
    status: 'finished',
    technologies: ['Laravel 10', 'Livewire 3', 'MySQL', 'TailwindCSS', 'PHP'],
    featured: false,
    featuresES: [
      'Buscador dinámico e instantáneo de productos y transacciones (Livewire).',
      'Reportes de inventario exportables en PDF generados automáticamente.',
      'Historial auditable de entradas y salidas de almacén detallando el operador.',
      'Alertas visuales de stock por debajo de niveles mínimos definidos por producto.',
      'Diseño responsivo y amigable estructurado con TailwindCSS.'
    ],
    featuresEN: [
      'Real-time dynamic filtering and searching of products and actions (Livewire).',
      'Automated, downloadable inventory reports exported to PDF.',
      'Auditable transactions log tracking stock check-ins and check-outs by user.',
      'Visual low-stock alerts for products dropping below target quantities.',
      'Responsive, modern workspace styled using TailwindCSS.'
    ]
  },
  {
    slug: 'task-manager-springboot',
    hidden: true,
    titleES: 'Consola de Productividad Organizacional',
    titleEN: 'Organizational Productivity Console',
    descriptionES: 'Ecosistema de gestión de tareas corporativas implementando Clean Architecture, seguridad JWT, roles y filtrado avanzado por prioridades y estados.',
    descriptionEN: 'An organizational task management service implementing Clean Architecture, JWT authentication, user roles, and advanced filtering.',
    longDescriptionES: 'Diseñada con foco en el rendimiento backend y la mantenibilidad. Esta API de Spring Boot utiliza Arquitectura Limpia para desacoplar las reglas de negocio de la base de datos PostgreSQL, implementando seguridad JWT a nivel de ruta y consultas optimizadas para el filtrado de tareas por estado, prioridad y rango de fechas.',
    longDescriptionEN: 'Designed with a heavy focus on backend performance and maintainability. This Spring Boot API leverages Clean Architecture to isolate business rules from the PostgreSQL database, implementing route-level JWT security and optimized queries for filtering tasks.',
    problemSolvedES: 'Organizar y segregar tareas corporativas bajo una estricta gobernanza de datos y permisos de seguridad basados en roles.',
    problemSolvedEN: 'Organizing and segregating corporate tasks under strict data governance and role-based security permissions.',
    category: ['Backend'],
    status: 'finished',
    technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'Clean Architecture'],
    featured: false,
    featuresES: [
      'Arquitectura Limpia con desacoplamiento total de entidades y persistencia.',
      'Autenticación y autorización granular mediante JWT.',
      'Filtros avanzados combinables por prioridad, estado de tarea y rango de fechas.',
      'Pruebas unitarias de controladores y lógica de negocio principales.',
      'Documentación completa de endpoints e integración con OpenAPI / Swagger.'
    ],
    featuresEN: [
      'Clean Architecture ensuring decoupling of business logic from infrastructure.',
      'Granular authentication and authorization handled through JWT.',
      'Advanced filters combining priority levels, statuses, and date ranges.',
      'Unit testing covering key controller routes and business use cases.',
      'Comprehensive endpoint documentation using OpenAPI / Swagger.'
    ]
  }
];
