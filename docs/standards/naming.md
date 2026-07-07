# KELTA Naming Standards

Version: 1.0

---

# Purpose

Consistent naming improves readability, discoverability, and long-term maintainability.

Every module, file, class, API, and database object should follow these conventions.

---

# General Principles

Names should be:

- Descriptive
- Consistent
- Predictable
- Singular unless representing collections
- Free from abbreviations unless universally understood

Good

```
MemberApplicationService
```

Bad

```
MASvc
```

---

# Folder Names

Use:

```
kebab-case
```

Examples

```
member-card

payment-gateway

certificate-verification

audit-log
```

---

# File Names

Use:

```
kebab-case.ts
```

Examples

```
member.service.ts

member.controller.ts

member.repository.ts

create-member.dto.ts

update-member.dto.ts

member.mapper.ts
```

---

# NestJS Classes

Controllers

```
MembersController
```

Services

```
MembersService
```

Modules

```
MembersModule
```

Guards

```
JwtAuthGuard
```

Interceptors

```
LoggingInterceptor
```

Filters

```
GlobalExceptionFilter
```

Decorators

```
CurrentUser
```

---

# DTOs

Create

```
CreateMemberDto
```

Update

```
UpdateMemberDto
```

Query

```
MemberQueryDto
```

Response

```
MemberResponseDto
```

---

# Interfaces

Suffix with:

```
Interface
```

only when necessary.

Prefer descriptive names.

Examples

```
AuthenticatedRequest

MemberEvent

PaymentGateway
```

---

# Types

Examples

```
MemberCardData

Permission

TimelineEntry
```

---

# Enums

Use singular PascalCase.

Examples

```
MemberStatus

PaymentStatus

RoleType
```

Enum values should be UPPER_SNAKE_CASE when appropriate.

---

# Constants

Use

```
UPPER_SNAKE_CASE
```

Examples

```
MAX_UPLOAD_SIZE

DEFAULT_PAGE_SIZE

TOKEN_EXPIRATION_MINUTES
```

---

# React Components

Use PascalCase.

Examples

```
MemberCard

DashboardLayout

RegistrationWizard

AuthProvider
```

---

# React Hooks

Always begin with:

```
use
```

Examples

```
useAuth

usePermissions

useMemberSearch

usePagination
```

---

# Contexts

Examples

```
AuthContext

ThemeContext

MemberContext
```

---

# Prisma Models

Use singular PascalCase.

Examples

```
Member

District

Certificate

Payment
```

---

# Database Tables

Use singular PascalCase in Prisma schema.

Database naming strategy is managed by Prisma migrations.

---

# API Routes

Use lowercase plural resources.

Examples

```
/members

/members/{id}

/districts

/payments

/certificates
```

Avoid verbs in route names.

Prefer

```
POST /members
```

instead of

```
POST /createMember
```

---

# Environment Variables

Use

```
UPPER_SNAKE_CASE
```

Examples

```
DATABASE_URL

SUPABASE_URL

JWT_SECRET

SMTP_HOST
```

---

# Configuration Keys

Use dot notation.

Examples

```
member.number.prefix

receipt.number.prefix

application.autoApproval

security.jwt.expiry
```

---

# Document Number Templates

KELTA uses configuration-driven numbering.

Examples

```
KELTA-MEMBER-{YYYY}-{SEQ:4}

KELTA-RCP-{SEQ}

KELTA-MA-{DISTRICT}-{SEQ}
```

Templates should never be hardcoded in business logic.

---

# Git Branches

Examples

```
feature/member-transfer

feature/document-center

release/keep-003

hotfix/login

experiment/ocr
```

---

# Git Tags

Examples

```
keep-003

v1.0.0

arch-v2.0
```

---

# Production Rule

If a new developer cannot accurately guess a file's purpose from its name alone, the name should be improved.
