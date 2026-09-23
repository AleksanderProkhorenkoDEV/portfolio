# Aleksander Portfolio

> Personal portfolio and showcase of my work as a web developer.

🌐 **Live:** [aprokhorenko.dev](https://aprokhorenko.dev)

## About

**Aleksander Portfolio** is my personal developer portfolio, built to showcase my projects, technical interests, and experience in web and multiplatform application development.

I recently completed my degree in **Multiplatform Application Development**, with a main focus on web development. Throughout my studies and personal projects, I have worked on several full-stack applications, including a banking application built with **Web Components** and **Java Spring Boot**.

The portfolio was created as an opportunity to give my online presence a fresh and more natural visual identity while also experimenting with technologies that I enjoy working with.

## Features

* Minimal and responsive portfolio design
* Interactive 3D `< />` scene on the homepage
* Mouse-controlled 3D interaction
* Zoom and rotation controls
* Dedicated projects page
* Project data managed through Astro Content Collections
* Responsive layout for desktop, tablet, and mobile
* Dark visual identity with a green accent
* Clean typography combining Montserrat and JetBrains Mono

## 3D Interactive Scene

The homepage features an interactive 3D representation of the `</>` symbol.

The object continuously rotates across its axes and can be interacted with using the mouse:

* 🖱️ **Drag** to rotate the object
* 🔍 **Scroll** to zoom
* 🔄 Automatic rotation when left alone

The scene is rendered using **Three.js through React**, integrated into the Astro application.

## Design & Visual Identity

The portfolio uses a dark interface built around three main colors:

| Color      | Hex       | Usage                          |
| ---------- | --------- | ------------------------------ |
| Background | `#060709` | Main background                |
| Green      | `#2DC08E` | Accent and primary UI elements |
| Foreground | `#E6E8EB` | Main text                      |

The visual identity was designed to give my profile a **fresher and more natural look**, moving away from a more conventional developer portfolio while keeping elements that reflect my background as a programmer.

The `</>` symbol and terminal-inspired details connect the design with software development, while the dark background and green accent give the interface a more contemporary and distinctive appearance.

Typography also plays an important role:

* **Montserrat** is used for the main interface and readable content.
* **JetBrains Mono** is used for technical and terminal-inspired elements.

## Tech Stack

### Core

* [Astro](https://astro.build/)
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://react.dev/)
* [Three.js](https://threejs.org/)
* [Tailwind CSS](https://tailwindcss.com/)

### Development

* [pnpm](https://pnpm.io/)
* Astro Content Collections
* Git

### Deployment

* [Vercel](https://vercel.com/)

Astro Content Collections are used to structure and retrieve the projects displayed on the projects page, allowing project entries to be managed separately from the page layout.

## Pages

### Home

The homepage introduces me and my professional profile alongside the interactive 3D `</>` scene.

It contains:

* Personal introduction
* Current professional focus
* Background in multiplatform application development
* Full-stack experience
* Personal interests

### Projects

The projects page displays my work in a responsive grid of project cards.

Projects are retrieved from an Astro content collection and sorted according to their configured order, keeping the presentation independent from the page component itself.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* pnpm

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-folder>
pnpm install
```

### Development

Start the local development server:

```bash
pnpm dev
```

The portfolio will be available at the local address shown by Astro.

### Build

To create a production build:

```bash
pnpm build
```

You can preview the production build locally with:

```bash
pnpm preview
```

## Project Structure

A simplified overview of the main structure:

```text
.
├── src/
│   ├── components/
│   │   ├── ProjectCard/
│   │   ├── ThreeScene/
│   │   └── ...
│   ├── content/
│   │   └── projectsCollection/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       └── projects.astro
├── public/
├── astro.config.*
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

> The exact structure may vary depending on the current state of the project.

## Deployment

The portfolio is deployed with **Vercel** and is available at:

**https://aprokhorenko.dev**

Every update to the repository can be deployed through the Vercel integration.

## What I Learned

This project gave me the opportunity to experiment with several areas beyond building a conventional portfolio:

* Building interactive 3D experiences for the web
* Integrating React components into an Astro application
* Working with Three.js
* Structuring project data with Astro Content Collections
* Building responsive interfaces with Tailwind CSS
* Designing a visual identity around a personal brand
* Deploying an Astro application with Vercel

## Future Improvements

Some ideas that could be explored in future iterations:

* Add more projects and case studies
* Expand the 3D experience
* Add project filtering or categorisation
* Improve accessibility and interaction feedback
* Add subtle animations and transitions
* Continue evolving the visual identity as my career develops

## Author

**Aleksander Trujillo Prokhorenko**

Web Developer focused on web and multiplatform application development.

* 🌐 Portfolio: [aprokhorenko.dev](https://aprokhorenko.dev)
* 📧 Email: [aprokhorenkodev@gmail.com](mailto:aprokhorenkodev@gmail.com)

---

Built with **Astro**, **TypeScript**, **React**, **Three.js**, and **Tailwind CSS**.
