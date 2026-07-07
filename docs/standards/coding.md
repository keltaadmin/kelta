# KELTA Coding Standards

Version: 1.0

---

# Purpose

These standards define how all KELTA source code must be written.

The objectives are:

- readability
- maintainability
- consistency
- production readiness
- enterprise scalability

---

# General Principles

Every file should be:

- small
- focused
- predictable

One class should have one responsibility.

Avoid large "God classes."

---

# TypeScript

Always use:

- strict mode
- explicit return types
- readonly whenever possible

Avoid:

- any
- unknown without validation
- non-null assertions

Good

```ts
findById(id: string): Promise<Member>
```

Bad

```ts
findById(id): any
```

---

# Naming

Classes

```
MemberService
```

Interfaces

```
MemberRepository
```

DTOs

```
CreateMemberDto
```

Enums

```
MemberStatus
```

Types

```
MemberCardData
```

Constants

```
MAX_UPLOAD_SIZE
```

---

# File Size

Preferred maximum

300–500 lines

Hard limit

1000 lines

If approaching the limit:

Split into:

- services
- helpers
- templates
- factories
- strategies

---

# Methods

Methods should ideally remain under:

50 lines

Extract reusable logic immediately.

---

# Dependency Injection

Always prefer constructor injection.

Never instantiate services manually.

Correct

```ts
constructor(
    private readonly prisma: PrismaService,
) {}
```

---

# Comments

Explain:

WHY

not

WHAT

Bad

```ts
// increment i
i++;
```

Good

```ts
// Prevent duplicate membership numbers during concurrent registration.
```

---

# Error Handling

Always throw meaningful exceptions.

Prefer:

- NotFoundException
- BadRequestException
- UnauthorizedException
- ForbiddenException

Avoid generic Error.

---

# Logging

Never use:

```ts
console.log()
```

Use Nest Logger.

```ts
Logger
```

---

# Async

Await every Promise.

Never ignore rejected promises.

---

# Imports

Group imports:

1. framework

2. external

3. internal

4. types

---

# Formatting

Use:

- Prettier
- ESLint

Formatting must never be disabled.

---

# Testing

Every business service should eventually include:

- unit tests

Critical workflows should include:

- integration tests

---

# Production Rule

If code would surprise another senior developer,

rewrite it.
