## 🎛️ EDM Festival Landing Page v2

Landing page **ultra‑moderna** para un festival de música electrónica, con diseño oscuro, animaciones suaves y una sección de tickets optimizada para conversión.  
Construida con **React + Vite + Tailwind CSS v4 + Framer Motion + Three.js**.

---

### 🧭 Índice

- [Vista general](#-vista-general)
- [Demo / Capturas](#-demo--capturas)
- [Características principales](#-características-principales)
- [Tecnologías usadas](#-tecnologías-usadas)
- [Arquitectura y estructura](#-arquitectura-y-estructura)
- [Sección de Tickets (VIP “Most Popular”)](#-sección-de-tickets-vip-most-popular)
- [Instalación y uso](#-instalación-y-uso)
- [Scripts disponibles](#-scripts-disponibles)
- [Personalización](#-personalización)
- [Roadmap / mejoras futuras](#-roadmap--mejoras-futuras)
- [Créditos](#-créditos)

---

## 🎧 Vista general

Este proyecto es una **landing page de alto impacto** pensada para promocionar un festival de música electrónica:

- Enfocada en **experiencia visual** (neón, glassmorphism, animaciones, 3D).
- Orientada a **conversión**, con una sección de tickets muy clara y jerarquizada.
- Totalmente **responsive** y lista para desplegar en cualquier hosting estático.

Ideal como:

- Portafolio de frontend / UI.
- Página real para un evento musical.
- Base para proyectos de marketing digital.

---

## 📸 Demo / Capturas

> Sustituye estas líneas con tus imágenes o GIFs subida/os al repo.

- **Hero + Navbar** – Presentación principal del festival.
- **Lineup / Stages / Schedule** – Información del evento.
- **Tickets** – Cards de precios con VIP resaltado como “Most Popular”.
- **Countdown / Gallery / Newsletter** – Refuerzo de urgencia, prueba social y captura de leads.

---

## ✨ Características principales

- **Diseño oscuro con estética EDM**
  - Fondo negro, tipografía bold y degradados neón.
  - Componentes con efecto **glassmorphism** y sombras suaves.

- **Animaciones y micro‑interacciones**
  - Apariciones y transiciones con **Framer Motion**.
  - Pantalla de carga animada antes de mostrar el contenido.
  - **Cursor reactivo**, partículas en background y efectos de glow.

- **Secciones incluidas**
  - `Hero` – mensaje principal y call to action.
  - `FestivalExperience` – highlight de la experiencia.
  - `Lineup`, `Stages`, `Schedule` – artistas, escenarios y horarios.
  - `Countdown` – cuenta regresiva animada hasta el evento.
  - `Tickets` – tres tiers de entradas (GA, VIP, Platinum).
  - `Gallery`, `Newsletter`, `Footer` – refuerzo visual y captación.

- **Responsive de verdad**
  - Diseño mobile‑first.
  - Grids y secciones que se adaptan limpiamente en móviles, tablets y desktop.

---

## 🛠 Tecnologías usadas

| Categoría        | Tecnologías                                                                            |
|------------------|----------------------------------------------------------------------------------------|
| Framework        | React 19, Vite 7                                                                       |
| Estilos          | Tailwind CSS 4, utilidades personalizadas (`glass`, `glow`, `text-gradient`, etc.)    |
| Animaciones      | Framer Motion, GSAP                                                                    |
| 3D / Visuales    | Three.js, @react-three/fiber, @react-three/drei                                        |
| Calidad de código| ESLint + reglas para React y hooks                                                     |

---

## 🏗 Arquitectura y estructura

**Punto de entrada**

- `src/App.jsx`  
  Orquesta toda la página:
  - Efectos globales: `CursorGlow`, `SoundToggle`, `ParticleBackground`, `LoadingScreen`.
  - Secciones principales: `Navbar`, `Hero`, `FestivalExperience`, `Lineup`, `Stages`, `Schedule`, `Countdown`, `Tickets`, `Gallery`, `Newsletter`, `Footer`.
  - Maneja el estado de carga (`isLoading`) y las transiciones globales.

**Componentes clave (`src/components/`)**

- Navegación y layout:
  - `Navbar.jsx`, `Footer.jsx`, `CursorGlow.jsx`, `SoundToggle.jsx`, `ParticleBackground.jsx`, `LoadingScreen.jsx`.
- Contenido principal:
  - `Hero.jsx`, `FestivalExperience.jsx`, `Lineup.jsx`, `Stages.jsx`, `Schedule.jsx`, `Countdown.jsx`, `Tickets.jsx`, `Gallery.jsx`, `Newsletter.jsx`.
- Extras visuales:
  - `Logo3D.jsx` y otros ligados a Three.js / R3F.

**Estilos globales**

- `src/index.css`
  - `@layer base`:  
    - Fondo negro global, tipografía, suavizado de fuentes, scroll suave.
  - `@layer components`:  
    - Componente `glass` (fondo semitransparente, blur, borde suave).
  - `@layer utilities`:  
    - `text-gradient`, `text-gradient-gold`, `glow`, `glow-gold`, `glow-pink`, `glow-blue`.

**Configuración Tailwind**

- `tailwind.config.js`
  - Paleta extendida:
    - `neon` (purple, blue, pink, cyan).
    - `gold` (light, default, dark).
  - Fuentes `sans` / `display`.
  - Animaciones y keyframes personalizados (`float`, `glow`, `pulse-slow`).

---

## 💳 Sección de Tickets (VIP “Most Popular”)

La sección de tickets (`src/components/Tickets.jsx`) está diseñada específicamente para **enfatizar el paquete VIP** y mejorar la conversión:

- **Tres tiers**:
  - General Admission – acceso básico al festival.
  - VIP – beneficios extra y mejor experiencia.
  - Platinum – acceso premium máximo.

- **Vip destacado como “MOST POPULAR”**
  - Card con:
    - Efecto `glass` + borde sobredimensionado: `!border-2 !border-gold-light`.
    - Sombra dorada (`glow-gold`) y leve scale para que destaque sobre las demás.
  - Badge:
    - Insignia `MOST POPULAR` centrada en la parte superior.
    - Fondo en degradado amarillo brillante y sombra para garantizar legibilidad.
  - Botón **“Buy Now”**:
    - Degradado amarillo intenso en el fondo.
    - Texto en negro de alto contraste.
    - Hover con glow dorado y sombra extra para que se sienta clicable.

- **UX y composición**
  - Layout `flex flex-col` en cada tarjeta para mantener el CTA siempre alineado al final, incluso cuando la lista de beneficios es más larga.
  - Checks y textos ajustados al tema del tier (dorados en VIP, neón en el resto).

---

## ⚙️ Instalación y uso

### 1. Clonar el repositorio

git clone <URL_DE_TU_REPO>
cd page-de-edm-v2
