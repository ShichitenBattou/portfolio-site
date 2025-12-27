# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo portfolio site with two main applications:
- **angular-front**: Angular 20 frontend with SSR (Server-Side Rendering)
- **nest-api**: NestJS 11 backend API

Both projects use Volta for Node.js version management (Node 22.14.0, npm 10.9.2).

## Development Commands

### Angular Frontend (angular-front/)
```bash
cd angular-front
npm run start          # Start dev server (default port 4200)
npm run build          # Production build
npm run build --configuration development  # Development build
npm test               # Run Karma/Jasmine tests
npm run serve:ssr:angular-front  # Serve SSR build (requires build first)
```

### NestJS Backend (nest-api/)
```bash
cd nest-api
npm run start:dev      # Start in watch mode for development
npm run start          # Start normally
npm run start:prod     # Start production build
npm run build          # Build the application
npm run lint           # Run ESLint with auto-fix
npm run test           # Run Jest unit tests
npm run test:watch     # Run tests in watch mode
npm run test:cov       # Run tests with coverage
npm run test:e2e       # Run end-to-end tests
npm run format         # Format code with Prettier
```

## Architecture

### Angular Frontend Structure
- **SSR Enabled**: The Angular app uses Server-Side Rendering with hydration and event replay
- **Entry Points**:
  - `src/main.ts`: Browser entry point
  - `src/main.server.ts`: Server entry point
  - `src/server.ts`: Express server for SSR
- **Configuration**: Uses standalone components architecture (no `app.component.ts`, only `app.ts`)
- **Routes**: Defined in `src/app/app.routes.ts` (currently empty)
- **TypeScript**: Strict mode enabled with Angular compiler strict options

### NestJS Backend Structure
- **Entry Point**: `src/main.ts` bootstraps the application on port 3000 (or PORT env variable)
- **Module System**: Standard NestJS modular architecture starting with `AppModule`
- **TypeScript**: Uses Node.js Next module resolution with ES2023 target
- **Database**: TypeORM configured (no active database connection in base setup)

### DevContainer Setup
- Includes DevContainer configuration for containerized development
- VSCode extensions recommended:
  - British English spell checker
  - Conventional commits helper
  - Angular language service (frontend only)

## Code Style

### Angular Frontend
- Prettier configured with:
  - Print width: 100
  - Single quotes
  - Angular parser for HTML templates

### NestJS Backend
- ESLint with Prettier integration
- Format before committing using `npm run format`
- Auto-fix linting issues with `npm run lint`

## Testing Strategy

### Angular
- **Framework**: Karma + Jasmine
- **Config**: `tsconfig.spec.json`
- Test files: `*.spec.ts` alongside source files

### NestJS
- **Framework**: Jest with ts-jest
- **Unit Tests**: `*.spec.ts` files in `src/`
- **E2E Tests**: `test/` directory with `jest-e2e.json` config
- **Coverage**: Configured to collect from all TypeScript/JavaScript files
- Run single test file: `npm test -- path/to/file.spec.ts`
