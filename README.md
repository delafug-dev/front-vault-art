my-next-app/
├── app/
│   ├── layout.jsx          // Layout principal que engloba toda la aplicación
│   ├── page.jsx            // Página principal (por ejemplo, Home)
│   ├── artworks/           // Carpeta para la sección de obras de arte
│   │   ├── page.jsx        // Página de listado de obras
│   │   ├── [id]/           // Carpeta dinámica para detalles de cada obra
│   │   │   └── page.jsx
│   │   └── components/     // Componentes específicos para la vista de obras (por ejemplo, tarjetas)
│   └── auth/               // Sección para autenticación y perfil, si aplica
│       ├── login/page.jsx
│       └── signup/page.jsx
├── components/             // Componentes compartidos en toda la aplicación (Header, Footer, botones, etc.)
├── config/                 // Archivos de configuración (constantes, rutas de API, feature flags)
├── lib/                    // Utilidades y lógica de negocio, como funciones de consumo de APIs, helpers y servicios
├── public/                 // Archivos estáticos (imágenes, íconos, fuentes)
├── styles/                 // Estilos globales y módulos CSS, Sass, etc.
└── .env.local              // Variables de entorno
