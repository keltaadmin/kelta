# KELTA Platform

**Kerala Local Self Government Technical Assistants Association**

Enterprise association management platform serving 1,247+ Technical Assistants across 14 districts of Kerala.

## Features

- 🔐 **Unified Authentication** — Member ID, Email, Mobile OTP
- 👥 **RBAC System** — 11 roles, 47 permissions, district-scoped access
- 📋 **Workflow Engine** — Generic approval system for all modules
- 💳 **Membership** — Applications, digital IDs, QR verification
- 💰 **Finance** — Immutable ledger, expense approvals, budgets
- 📰 **CMS** — State + 14 district portals
- 🗳️ **Elections** — Nominations, anonymized voting, results
- 📜 **Certificates** — Encrypted QR tokens, workflow-routed issuance
- 📊 **Analytics** — Executive dashboard, materialized views
- 🎫 **Help Desk** — Tickets, SLA tracking, escalation workflows
- 🔔 **Notifications** — In-app, email, SMS, WhatsApp

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS, ShadCN
- **Backend**: NestJS, TypeScript
- **Database**: PostgreSQL (Supabase) with RLS
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage

## Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment
cp .env.example .env
# Edit .env with your Supabase credentials

# Run database migrations
pnpm db:migrate

# Start development
pnpm dev
