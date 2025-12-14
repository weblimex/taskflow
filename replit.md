# TaskFlow - Task Resistance Helper

## Overview

TaskFlow is a web application designed to help users overcome task resistance through guided self-discovery. Users describe a task they're struggling to start, answer a series of questionnaire questions to identify their resistance type (overwhelm, perfectionism, lack of meaning, clarity issues, fear, or inertia), and receive personalized strategies to move forward.

The application follows a progressive 3-step flow: Landing → Task Input → Questionnaire → Results. The design philosophy emphasizes emotional safety, calm aesthetics, and non-judgmental guidance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: React Context (FlowContext) for multi-step flow state, TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming, shadcn/ui component library (New York style)
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under /api prefix
- **Static Serving**: Express serves built client assets in production

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Validation**: Zod with drizzle-zod for type-safe schema validation
- **Storage Abstraction**: IStorage interface with MemStorage implementation (in-memory, easily swappable to database)

### Application Flow Design
The app uses a React Context (FlowProvider) to maintain state across the multi-step wizard:
1. Task description input
2. Questionnaire answers (multiple questions with resistance type mapping)
3. Calculated resistance type and personalized results

### Design System
- **Typography**: Inter font family via Google Fonts
- **Colors**: HSL-based CSS variables with light/dark mode support
- **Components**: Radix UI primitives wrapped with shadcn/ui styling
- **Layout**: Responsive with max-width containers (2xl for forms, 4xl for results, 6xl for landing)

## External Dependencies

### UI Components (Radix UI ecosystem)
- Full shadcn/ui component library including dialogs, forms, tooltips, accordions, etc.
- Embla Carousel for carousel functionality
- Recharts for potential chart displays
- Vaul for drawer components

### Database
- PostgreSQL (configured via DATABASE_URL environment variable)
- Drizzle Kit for migrations (output to ./migrations)
- connect-pg-simple for session storage capability

### Development Tools
- Vite dev server with HMR
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)
- esbuild for production server bundling

### Key NPM Packages
- express, express-session, express-rate-limit for server
- react-hook-form with @hookform/resolvers for form handling
- class-variance-authority and clsx for conditional styling
- date-fns for date utilities
- nanoid/uuid for ID generation