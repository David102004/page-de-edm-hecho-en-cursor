## EDM Festival Landing Page v2

Landing page moderna e inmersiva para un festival de música electrónica, construida con **React**, **Vite** y **Tailwind CSS v4**, con animaciones avanzadas, efectos 3D y una sección de tickets optimizada para conversión.

---

## Características principales

- **Diseño oscuro estilo festival**  
  Interfaz full-screen con degradados neón, efecto glassmorphism y tipografía bold para una estética EDM moderna.

- **Animaciones fluidas**
  - Transiciones y apariciones con **Framer Motion**.
  - Efectos de partículas y resplandor reactivos al cursor.
  - Pantalla de carga animada antes de mostrar el contenido principal.

- **Secciones clave**
  - `Hero` con mensaje principal del festival.
  - `FestivalExperience` para destacar la experiencia general.
  - `Lineup`, `Stages` y `Schedule` para artistas, escenarios y horarios.
  - `Countdown` con cuenta regresiva al evento.
  - `Tickets` con tres tiers (General Admission, VIP, Platinum).
  - `Gallery`, `Newsletter` y `Footer` para refuerzo visual y captación.

- **Sección de Tickets optimizada**
  - Tres tarjetas de precios con diseño responsive.
  - Card VIP resaltada con:
    - Borde dorado y **glow** que la destacan del resto.
    - Insignia **“MOST POPULAR”** con degradado amarillo brillante y sombra para máxima legibilidad.
    - Botón **“Buy Now”** con degradado amarillo intenso y texto en negro de alto contraste.
  - Alineación vertical cuidada para que el botón siempre quede visible al final de cada tarjeta.

- **Responsive design**
  - Diseño mobile‑first.
  - Grid de secciones y tarjetas adaptables a diferentes tamaños de pantalla.

---

## Stack tecnológico

- **Framework**: React 19 + Vite 7
- **Estilos**: Tailwind CSS 4 + utilidades personalizadas (`glass`, `glow`, `text-gradient`, `text-gradient-gold`, etc.)
- **Animaciones**:
  - Framer Motion (animaciones de entrada, hover y layout)
  - GSAP (animaciones avanzadas puntuales)
- **3D / Visuales**:
  - Three.js
  - @react-three/fiber
  - @react-three/drei

---

## Estructura del proyecto (resumen)

- `src/App.jsx`  
  Ensambla todas las secciones: `Navbar`, `Hero`, `FestivalExperience`, `Lineup`, `Stages`, `Schedule`, `Countdown`, `Tickets`, `Gallery`, `Newsletter`, `Footer` y componentes globales (`CursorGlow`, `SoundToggle`, `ParticleBackground`, `LoadingScreen`).

- `src/components/`  
  - `Navbar.jsx` – navegación fija con links a secciones.
  - `Hero.jsx` – sección principal de bienvenida.
  - `FestivalExperience.jsx` – características de la experiencia.
  - `Lineup.jsx`, `Stages.jsx`, `Schedule.jsx` – información del evento.
  - `Countdown.jsx` – cuenta regresiva animada.
  - `Tickets.jsx` – sección de venta de tickets con tiers y card VIP destacada.
  - `Gallery.jsx`, `Newsletter.jsx`, `Footer.jsx` – contenido visual y formulario.
  - `LoadingScreen.jsx`, `ParticleBackground.jsx`, `CursorGlow.jsx`, `SoundToggle.jsx`, `Logo3D.jsx` – efectos visuales y utilidades.

- `src/index.css`  
  - Importa Tailwind.
  - Define capas personalizadas:
    - `@layer base` – estilos globales (fondo negro, tipografía, smooth scroll).
    - `@layer components` – componente `glass` con blur y borde suave.
    - `@layer utilities` – utilidades como `text-gradient`, `text-gradient-gold`, `glow`, `glow-gold`, etc.

- `tailwind.config.js`  
  - Extiende la paleta con colores `neon` y `gold`.
  - Configura fuentes, animaciones y keyframes personalizados.

---

## Requisitos

- Node.js 18+ (recomendado)
- npm (o pnpm / yarn adaptando los comandos)

---

## Instalación

# Clonar el repositorio
git clone <URL_DE_TU_REPO>
cd page-de-edm-v2

# Instalar dependencias
npm install
