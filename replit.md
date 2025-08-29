# TJson Portfolio - A Modern Full Stack Developer Portfolio

## Overview

TJson Portfolio is a modern, responsive portfolio website built for Jasson Gómez, a Computer Systems Engineering student and Full Stack Developer with 7+ years of experience. The project showcases professional work, skills, and experience through an elegant, multilingual (Spanish/English) interface with smooth animations and modern design patterns.

The portfolio highlights expertise in Python, JavaScript, React, Node.js, and mobile development with Flutter, featuring projects like SpeedyGoApp and demonstrating technical leadership capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS utility-first approach with custom design tokens and gradients
- **UI Components**: Radix UI component library for accessible, unstyled primitives
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **Internationalization**: i18next for Spanish/English language support
- **Layout**: Single-page application with smooth scroll navigation between sections

### Component Structure
- **Modular Design**: Each section (Hero, About, Skills, Experience, Projects, Contact) is a separate component
- **Reusable UI**: Shadcn/ui component system with consistent theming
- **Responsive Layout**: Mobile-first approach with Tailwind responsive utilities
- **Dark/Light Mode**: Theme support with CSS custom properties

### State Management
- **Local State**: React hooks (useState, useEffect) for component-level state
- **Context**: React context for theme and language preferences
- **Custom Hooks**: useScrollSpy for navigation highlighting, useIsMobile for responsive behavior

### Development Tools
- **Type Safety**: TypeScript configuration with strict mode enabled
- **Code Quality**: ESLint for code linting and consistency
- **Path Aliases**: Configured for clean imports (@/ for src, @shared/ for shared)

## External Dependencies

### Core Technologies
- **React 18**: Modern React with functional components and hooks
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Next-generation frontend build tool
- **Tailwind CSS**: Utility-first CSS framework

### UI and Design
- **Radix UI**: Comprehensive set of accessible React components
- **Framer Motion**: Production-ready motion library for animations
- **Lucide React**: Beautiful, customizable icon library
- **Inter Font**: Modern typography via Google Fonts

### Internationalization
- **i18next**: Internationalization framework for multilingual support
- **react-i18next**: React bindings for i18next

### Database and Backend (Optional)
- **Drizzle ORM**: Type-safe SQL ORM for database operations
- **Neon Database**: Serverless PostgreSQL database provider
- **EmailJS**: Client-side email service for contact forms

### Development Dependencies
- **PostCSS**: CSS processing with Tailwind
- **ESLint**: Code linting and style enforcement
- **Class Variance Authority**: Utility for creating component variants

### Deployment
- **Replit Optimized**: Special configuration for Replit deployment with host settings
- **Static Site**: Builds to static files for easy deployment on Vercel, Netlify, or GitHub Pages