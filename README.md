# Giulia Rubini - Personal Website

> Personal portfolio website for Guilia Rubini (Ruby) - Fashion Designer 

### Technology Stack

- React, TypeScript, Tailwind CSS, Vite, React Icons + Font Awesome + ESLint

### Component Structure

```
src/
├── App.tsx                    # Empty entrypoint calling App.tsx
├── main.tsx                   # Main file
├── index.css                  # Global styles
│
├── components/
    |--  ProjectsSection       # IntroScreen as Ruby asked
│   └── Sidebar.tsx            # Navigation sidebar with profile
│
├── pages/
│   ├── MainContent.tsx        # Main page with calling components and sidebar
│   └── sections/
│       ├── ProjectsSection.tsx         # University, NewYorker, Exhibitions
└── assets/                    # Images and static files
```

## Deployment View

### 7.1 Build Process

#TODO: add deployment instructions

### 7.2 Makefile Commands

```makefile
make              # build and run
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Running

```bash
git clone https://github.com/BondaiKa/ruby_website.git && \
cd ruby_website && \
make
```
## Project Information

- **Owner & Developer**: BondaiKa
