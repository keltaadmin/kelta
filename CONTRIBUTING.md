# Contributing to KELTA

Version: 1.0

---

# Welcome

Thank you for contributing to the KELTA Enterprise Association Management Platform.

This document describes the standards and workflow expected for all contributors.

Our goals are:

- High-quality code
- Consistent architecture
- Predictable releases
- Long-term maintainability

---

# Development Principles

Before writing code:

- Read the relevant documentation.
- Follow the established architecture.
- Avoid introducing unnecessary complexity.
- Reuse existing infrastructure whenever possible.

New functionality should integrate with existing modules instead of duplicating logic.

---

# Repository Structure

The repository is organized into the following major areas:

```
apps/
    api/
    web/

docs/

packages/

scripts/
```

Each area has a clearly defined responsibility.

---

# Development Workflow

1. Update your local repository.

```
git pull
```

2. Create a feature or release branch.

Example:

```
git checkout -b feature/member-renewal
```

3. Implement your changes.

4. Verify quality locally.

```
pnpm lint

pnpm build
```

When available:

```
pnpm test
```

5. Commit using the approved commit message format.

Example:

```
FEATURE: Member renewal workflow

FIX: QR rendering alignment

KEEP-004: Repository governance
```

6. Push your branch.

7. Open a Pull Request.

---

# Coding Standards

All code must follow:

- TypeScript strict mode
- ESLint
- Prettier
- KELTA Coding Standards

See:

```
docs/standards/coding.md
```

---

# Testing Requirements

Before opening a Pull Request:

- Build must succeed.
- Lint must pass.
- Tests must pass (where available).

Future CI pipelines will enforce these requirements automatically.

---

# Documentation

Any architectural or behavioral change should include updates to the relevant documentation.

Examples:

- API changes
- Database changes
- Authentication
- Configuration
- Deployment
- User workflows

---

# Pull Requests

Each Pull Request should include:

- Summary
- Motivation
- Testing performed
- Screenshots (if UI changes)
- Related issue (if applicable)

Keep Pull Requests focused on a single objective whenever possible.

---

# Commit Messages

Preferred prefixes include:

```
KEEP
FEATURE
FIX
REFACTOR
DOCS
TEST
SECURITY
CI
BUILD
CHORE
```

Examples:

```
KEEP-004: Repository governance

FEATURE: Certificate verification

FIX: Member search pagination
```

---

# Code Review

Reviewers should verify:

- Correctness
- Readability
- Maintainability
- Security implications
- Performance implications
- Documentation updates

Constructive feedback is encouraged.

---

# Security

Never commit:

- Secrets
- API keys
- Passwords
- Access tokens
- Production credentials

Sensitive information must be supplied through environment variables or secure secret management.

---

# Questions

If you are unsure about an implementation, discuss the approach before introducing significant architectural changes.

Consistency is preferred over personal coding style.

---

# Thank You

Every contribution helps improve the KELTA platform.

By contributing, you agree to follow the project's coding standards, documentation standards, and governance policies.
