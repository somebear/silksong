# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
pnpm dev                    # Start development server with turbopack
pnpm build                  # Build for production
pnpm start                  # Start production server
pnpm lint                   # Run Next.js linter

# Database Operations
pnpm db:generate            # Generate Drizzle migrations
pnpm db:migrate             # Run database migrations
pnpm db:studio              # Open Drizzle Studio
pnpm db:push                # Push schema to database

# Build Analysis
pnpm analyze                # Analyze bundle size (ANALYZE=true pnpm build)

# Docker
pnpm docker:build           # Build Docker image
```

## Architecture Overview

This is a full-stack Next.js AI SaaS boilerplate with the following key architecture:

### Core Stack
- **Framework**: Next.js 15 with App Router and TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: NextAuth.js with Google/GitHub providers
- **Styling**: Tailwind CSS + Shadcn UI
- **Internationalization**: next-intl (English/Chinese)
- **Payment**: Dual provider support (Stripe + Creem)

### Directory Structure
- `src/app/[locale]/`: Internationalized pages with App Router
- `src/components/blocks/`: Landing page components (hero, pricing, etc.)
- `src/components/ui/`: Shadcn UI components
- `src/aisdk/`: Custom AI SDK with video generation (Kling provider)
- `src/db/`: Database schema and migrations (Drizzle)
- `src/services/`: Business logic layer
- `src/models/`: Data access layer
- `src/i18n/`: Internationalization configs and translations

### Key Features
- **Multi-tenant Architecture**: User management with UUID-based identification
- **AI Video Generation**: Custom SDK for Kling AI integration
- **Dual Payment Systems**: Stripe and Creem payment processing
- **Admin Dashboard**: User, order, and content management
- **API Key Management**: User-generated API keys for service access
- **Affiliate System**: User referral and commission tracking

### Database Schema
Primary tables: users, orders, credits, posts, categories, feedbacks, api_keys, affiliates

### Environment Configuration
- Copy `.env.example` to `.env.development` for development
- Required: DATABASE_URL, AUTH_SECRET, payment provider keys
- Optional: Analytics (Google, OpenPanel, Plausible), storage (S3), Google Ads

### Authentication Flow
- NextAuth.js with Google One Tap, GitHub, Google OAuth
- Session management with JWT
- User creation with UUID generation and invite code system

### Payment Integration
- Configurable payment provider via PAY_PROVIDER env var
- Webhook handlers for both Stripe and Creem
- Credit-based system for AI service usage

### Internationalization
- Locale detection configurable
- Page-specific translations in `src/i18n/pages/`
- Global messages in `src/i18n/messages/`

### Custom AI SDK
- Video generation abstraction layer
- Kling AI provider implementation with image and video models
- Extensible provider pattern for adding new AI services