# Walie Matthieu Portfolio

Hi welcome to my Personal portfolio built with Next.js to showcase my profile, experience, and Web3 and Full-Stack projects!

## Preview

This site contains:
- An introductory section with an overview
- An experience section
- GitHub and LinkedIn links
- An email contact button
- [Acces to the Snake Game](https://snake-game-two-ochre.vercel.app/)

## Stack technique

- Node.js 18+
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Démarrage local

Prerequisites:
- Node.js 18+ (20+ recommandé)
- npm

Installation:
```bash
npm install
```

Initiate development:
```bash
npm run dev
```

Access to [http://localhost:3000](http://localhost:3000)

Build production:
```bash
npm run build
```

Initiate the build:
```bash
npm run start
```

## Available scripts

- `npm run dev`: starts the local server
- `npm run build`: compiles the application for production
- `npm run start`: launches the production version
- `npm run lint`: checks the code quality

## Structure du projet

- `src/app/page.tsx`: home page
- `src/app/layout.tsx`: layout global and metadata SEO
- `src/app/components/EmailButton.tsx`: email button
- `src/app/components/ExperienceSection.tsx`: exeperience section
- `src/app/components/ScrollWidget.tsx`: scroll widget
- `src/app/globals.css`: global styles 
- `public/`: assets statics (logos, icons, manifest)

## Deployment

Deployed on Vercel.

Visit the online version : [waliematthieu.com](https://waliematthieu.com)

## SEO

The main metadata is defined in `src/app/layout.tsx`, including:
- Title and description
- Open Graph
- Twitter Card
- Manifest et icons

## Contact

- GitHub: [https://github.com/Walie-Matthieu](https://github.com/Walie-Matthieu)
- LinkedIn: [https://www.linkedin.com/in/walie-matthieu/](https://www.linkedin.com/in/walie-matthieu/)
- Portfolio: [waliematthieu.com](https://waliematthieu.com)
