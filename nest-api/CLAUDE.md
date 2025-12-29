# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the NestJS 11 backend API for a portfolio site monorepo. Uses Volta for Node.js version management (Node 22.14.0, npm 10.9.2).

## Development Commands

```bash
npm run start:dev      # Start in watch mode for development
npm run start          # Start normally
npm run start:prod     # Start production build (requires build first)
npm run build          # Build the application
npm run lint           # Run ESLint with auto-fix
npm run format         # Format code with Prettier
npm test               # Run Jest unit tests
npm run test:watch     # Run tests in watch mode
npm run test:cov       # Run tests with coverage
npm run test:e2e       # Run end-to-end tests
npm test -- path/to/file.spec.ts  # Run single test file
```

## Architecture

### Entry Point & Bootstrap
- **Entry Point**: `src/main.ts` bootstraps the application on port 3000 (or PORT env variable)
- **Module System**: Standard NestJS modular architecture starting with `AppModule` in `src/app.module.ts`
- Application structure follows NestJS conventions: controllers, services, and modules

### TypeScript Configuration
- **Module System**: Node.js Next (`"module": "nodenext"`, `"moduleResolution": "nodenext"`)
- **Target**: ES2023
- **Strict Features**: `strictNullChecks` and `forceConsistentCasingInFileNames` enabled
- **Decorators**: `experimentalDecorators` and `emitDecoratorMetadata` enabled for NestJS
- Lenient settings: `noImplicitAny`, `strictBindCallApply`, and `noFallthroughCasesInSwitch` disabled

### Database
- TypeORM is available as a dependency (`^0.3.27`) but no active database connection is configured in the base setup
- When adding database integration, configure TypeORM in `AppModule`

## Code Style & Quality

### Prettier Configuration
- Single quotes (`'`)
- Trailing commas (`all`)
- Run `npm run format` to format code

### ESLint
- ESLint 9.x with TypeScript ESLint and Prettier integration
- Auto-fix with `npm run lint`
- Format code before committing

## Testing Strategy

### Jest Configuration
- **Unit Tests**: `*.spec.ts` files in `src/` directory
- **E2E Tests**: `test/` directory with `jest-e2e.json` config
- **Test Pattern**: `.*\.spec\.ts$` for unit tests, `.e2e-spec.ts$` for e2e tests
- **Coverage**: Configured to collect from all TypeScript/JavaScript files in `src/`
- **Test Environment**: Node.js

### Running Tests
```bash
npm test                              # Run all unit tests
npm run test:watch                    # Run in watch mode
npm run test:cov                      # Run with coverage report
npm run test:e2e                      # Run e2e tests
npm test -- src/app.service.spec.ts   # Run specific test file
```

## Docker Support

### Multi-Stage Build
The Dockerfile uses a two-stage build process:
1. **Builder stage**: Installs all dependencies and builds the application
2. **Production stage**: Copies built files and installs only production dependencies

```bash
docker build -t nest-api .
docker run -p 3000:3000 nest-api
```

## Code Review Guidelines

The parent repository includes Copilot instructions (`.github/copilot-instructions.md`) requiring:
- Reviews conducted in Japanese (日本語)
- Follow Conventional Commits for PR titles and commit messages
- Security, performance, readability, and maintainability checks
- Proper test coverage for new code
