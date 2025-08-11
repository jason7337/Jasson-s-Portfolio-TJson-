# Portfolio Website Project

## Overview

This is a full-stack portfolio website built with React, Express, and PostgreSQL. The application uses modern web technologies including TypeScript, TailwindCSS, and shadcn/ui components to create a professional portfolio showcase. The project follows a monorepo structure with clear separation between client-side and server-side code, along with shared schemas and utilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: TailwindCSS with shadcn/ui component library for consistent, accessible UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular portfolio sections (Header, Hero, About, Projects, Skills, Contact, Footer)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Pattern**: RESTful API design with centralized route registration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (easily swappable)
- **Middleware**: Custom logging and error handling middleware
- **Development**: Hot module replacement with Vite integration

### Data Architecture
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for runtime type validation
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple

### Development Environment
- **Monorepo Structure**: Shared code between client and server in `/shared` directory
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/, @assets/)
- **Development Server**: Vite dev server with Express API integration
- **Hot Reloading**: Full-stack hot module replacement for rapid development

### Build and Deployment
- **Client Build**: Vite builds React app to `/dist/public`
- **Server Build**: esbuild bundles Express server to `/dist/index.js`
- **Static Assets**: Vite handles asset optimization and bundling
- **Production**: Single Node.js server serves both API and static files

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **express**: Web framework for Node.js API server
- **react**: Frontend UI library with TypeScript support
- **@tanstack/react-query**: Server state management and caching

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library with React components

### Development and Build Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **drizzle-kit**: Database schema management and migrations
- **esbuild**: Fast JavaScript/TypeScript bundler for server code
- **tsx**: TypeScript execution engine for development

### Form and Data Handling
- **react-hook-form**: Forms with validation
- **@hookform/resolvers**: Validation resolver for Zod schemas
- **zod**: Runtime type validation and schema definition
- **date-fns**: Date manipulation utilities

### Additional Features
- **wouter**: Lightweight routing for React
- **embla-carousel-react**: Carousel component for project showcases
- **cmdk**: Command palette component for enhanced UX