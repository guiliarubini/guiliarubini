# Giulia Rubini - Personal Website

> A modern, responsive personal portfolio website for a Fashion Designer with 6 years of experience.

## Table of Contents

1. [Introduction and Goals](#1-introduction-and-goals)
2. [Architecture Constraints](#2-architecture-constraints)
3. [System Scope and Context](#3-system-scope-and-context)
4. [Solution Strategy](#4-solution-strategy)
5. [Building Block View](#5-building-block-view)
6. [Runtime View](#6-runtime-view)
7. [Deployment View](#7-deployment-view)
8. [Technical Decisions](#8-technical-decisions)
9. [Quality Requirements](#9-quality-requirements)
10. [Glossary](#10-glossary)

---

## 1. Introduction and Goals

### 1.1 Requirements Overview

This is a personal portfolio website for Giulia Rubini (Ruby), a Fashion Designer, featuring:

- **Animated intro screen**: Black background with typewriter effect displaying name and title
- **Responsive sidebar navigation**: Collapsible menu with profile, navigation links, and contact information
- **Portfolio sections**: About, Projects, Skills, Experience, Education, Certifications, and Languages
- **Project carousel**: Interactive 3D carousel showcasing various technical projects
- **Mobile-first design**: Fully responsive layout optimized for all device sizes

### 1.2 Quality Goals

| Priority | Quality Goal | Description |
|----------|-------------|-------------|
| 1 | **Usability** | Intuitive navigation with smooth animations and transitions |
| 2 | **Responsiveness** | Seamless experience across mobile, tablet, and desktop devices |
| 3 | **Performance** | Fast loading times with lazy-loaded components |
| 4 | **Maintainability** | Modular component structure for easy updates |

### 1.3 Stakeholders

| Role | Expectations |
|------|-------------|
| **Portfolio Owner** | Professional presentation of work and skills |
| **Visitors/Recruiters** | Easy access to professional information and projects |
| **Developers** | Clean, maintainable codebase |

---

## 2. Architecture Constraints

### 2.1 Technical Constraints

| Constraint | Description |
|------------|-------------|
| **Frontend Framework** | React 18.3.1 with TypeScript |
| **Build Tool** | Vite 6.0.1 |
| **Styling** | Tailwind CSS 3.4.15 |
| **Deployment** | Static site hosting (GitHub Pages compatible) |

### 2.2 Organizational Constraints

- Single developer project
- Open-source under standard license
- Self-hosted deployment

---

## 3. System Scope and Context

### 3.1 Business Context

```
┌─────────────┐
│   Visitors  │
│  (Browsers) │
└──────┬──────┘
       │
       ↓
┌─────────────────────────┐
│   Portfolio Website     │
│  (Static React App)     │
└─────────────────────────┘
       │
       ↓
┌─────────────────────────┐
│  External Services      │
│  - LinkedIn             │
│  - GitHub               │
│  - Email                │
└─────────────────────────┘
```

### 3.2 Technical Context

- **Browser**: Modern web browsers (Chrome, Firefox, Safari, Edge)
- **Protocol**: HTTPS
- **Assets**: Images, fonts, and PDF resume served statically

---

## 4. Solution Strategy

### 4.1 Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **UI Framework** | React + TypeScript | Type-safe component development, excellent ecosystem |
| **Styling** | Tailwind CSS | Utility-first, rapid development, consistent design |
| **Build Tool** | Vite | Fast HMR, optimized production builds |
| **Icons** | React Icons + Font Awesome | Comprehensive icon library |
| **Routing** | React Router DOM | SPA navigation (future extensibility) |
| **Code Quality** | ESLint + TypeScript | Enforces code standards and type safety |

### 4.2 Key Architectural Decisions

1. **Component-based architecture**: Modular, reusable components
2. **Lazy loading**: Improved initial load performance
3. **CSS-in-JS approach**: Tailwind utility classes for rapid development
4. **Responsive-first design**: Mobile breakpoints with progressive enhancement

---

## 5. Building Block View

### 5.1 Level 1: System Overview

```
┌──────────────────────────────────────┐
│           App Component              │
│  ┌────────────────────────────────┐  │
│  │   Intro Screen (Typewriter)    │  │
│  └────────────────────────────────┘  │
│  ┌────────────┐  ┌────────────────┐  │
│  │  Sidebar   │  │  MainContent   │  │
│  │ Component  │  │   Component    │  │
│  └────────────┘  └────────────────┘  │
└──────────────────────────────────────┘
```

### 5.2 Level 2: Component Structure

```
src/
├── App.tsx                    # Root component with intro logic
├── main.tsx                   # Application entry point
├── index.css                  # Global styles
│
├── components/
│   └── Sidebar.tsx            # Navigation sidebar with profile
│
├── pages/
│   ├── MainContent.tsx        # Main content container
│   └── sections/
│       ├── AnimatedSection.tsx         # About/Hero section
│       ├── ProjectsSection.tsx         # 3D project carousel
│       ├── SkillsSection.tsx           # Skills with icons
│       ├── ExperienceSection.tsx       # Work history
│       ├── EducationSection.tsx        # Education background
│       ├── CertificationsSection.tsx   # Certifications
│       └── LanguagesSection.tsx        # Language proficiency
│
└── assets/                    # Images and static files
```

### 5.3 Component Responsibilities

| Component | Responsibility |
|-----------|---------------|
| **App.tsx** | State management, intro animation, lazy loading |
| **Sidebar.tsx** | Navigation, profile display, social links |
| **MainContent.tsx** | Section orchestration, sidebar-aware layout |
| **AnimatedSection.tsx** | Alternating hero text animation |
| **ProjectsSection.tsx** | Interactive 3D carousel with project cards |
| **SkillsSection.tsx** | Skill categorization with visual grouping |
| **ExperienceSection.tsx** | Timeline-based work experience display |

---

## 6. Runtime View

### 6.1 Application Startup Flow

```
1. User visits website
   ↓
2. App.tsx renders intro screen
   ↓
3. Typewriter animation displays:
   - "Giulia Rubini"
   - "Fashion Designer"
   ↓
4. User clicks anywhere
   ↓
5. Lazy load Sidebar and MainContent
   ↓
6. Render portfolio sections
```

### 6.2 Navigation Flow

```
1. User clicks navigation item in Sidebar
   ↓
2. scrollToSection() triggered
   ↓
3. Smooth scroll to target section
   ↓
4. On mobile: Sidebar auto-closes
```

### 6.3 Project Carousel Interaction

```
Touch/Click Left Arrow → Previous Project
Touch/Click Right Arrow → Next Project
Swipe Left → Next Project
Swipe Right → Previous Project
Click on Card → Center that Project
```

---

## 7. Deployment View

### 7.1 Build Process

```bash
# Install dependencies
npm install

# Development server
npm run dev         # Runs on http://localhost:5173

# Production build
npm run build       # Outputs to dist/

# Preview production build
npm run preview
```

### 7.2 Makefile Commands

```makefile
make              # Alias for 'make run'
make run          # Start development server
make clean        # Remove node_modules and package-lock.json
```

### 7.3 Deployment Architecture

```
┌─────────────────┐
│  Source Code    │
│   (GitHub)      │
└────────┬────────┘
         │
         ↓ (npm run build)
┌─────────────────┐
│   dist/         │
│  (Static Files) │
└────────┬────────┘
         │
         ↓ (deploy)
┌─────────────────┐
│  GitHub Pages   │
│  or CDN Host    │
└─────────────────┘
```

---

## 8. Technical Decisions

### 8.1 Key Technologies

#### Frontend Framework: **React**
- **Reason**: Component reusability, strong ecosystem, TypeScript support
- **Alternatives considered**: Vue.js, Svelte

#### Build Tool: **Vite**
- **Reason**: Lightning-fast HMR, optimized builds, modern ESM support
- **Alternatives considered**: Webpack, Parcel

#### Styling: **Tailwind CSS**
- **Reason**: Rapid prototyping, consistency, responsive utilities
- **Alternatives considered**: Styled-components, CSS Modules

#### State Management: **React Hooks (useState, useEffect)**
- **Reason**: Simple local state requirements, no global state needed
- **Alternatives considered**: Redux, Context API

### 8.2 Design Patterns

1. **Lazy Loading**: Components loaded on-demand for performance
2. **Composition**: Small, focused components composed into larger features
3. **Responsive Design**: Mobile-first with Tailwind breakpoints
4. **Event Delegation**: Efficient touch/scroll event handling

---

## 9. Quality Requirements

### 9.1 Performance

- ✅ Lazy loading of main components
- ✅ Optimized images in `assets/`
- ✅ Vite production build minification
- ⚠️ **Future**: Image optimization (WebP, lazy loading)

### 9.2 Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ⚠️ **Future**: Screen reader testing

### 9.3 Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ with Vite transpilation
- CSS Grid and Flexbox support required

### 9.4 Security

- Static site (no backend vulnerabilities)
- External links use `rel="noopener noreferrer"`
- No sensitive data stored client-side

---

## 10. Glossary

| Term | Definition |
|------|------------|
| **Carousel** | 3D rotating display of project cards |
| **Lazy Loading** | Deferred loading of components until needed |
| **Responsive Design** | Layout adapts to different screen sizes |
| **Sidebar** | Fixed navigation panel on the left side |
| **Tailwind CSS** | Utility-first CSS framework |
| **TypeScript** | Typed superset of JavaScript |
| **Vite** | Next-generation frontend build tool |
| **HMR** | Hot Module Replacement - instant updates during development |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/BondaiKa/ruby_website.git
cd ruby_website

# Install dependencies
npm install

# Start development server
make run
# or
npm run dev

# Access at http://localhost:5173
```

### Building for Production

```bash
npm run build
# Output in dist/ directory
```

### Code Quality

```bash
# Run linter
npm run lint
```

---

## Project Information

- **Repository**: ruby_website
- **Owner**: BondaiKa
- **Branch**: master
- **License**: See LICENSE file
- **Last Updated**: November 2025

---

## Contact

- **Email**: g.rubini.fashiondesigner@gmail.com
- **LinkedIn**: [giulia-rubini-387550177](https://linkedin.com/in/giulia-rubini-387550177)
- **Portfolio**: [GitHub Pages](https://bondaika.github.io/BondaiKa/)

