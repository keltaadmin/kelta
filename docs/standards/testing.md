# KELTA Testing Standards

Version: 1.0

---

# Purpose

Testing ensures that every change to the KELTA platform is reliable, repeatable, and safe to deploy.

The goal is to detect regressions early while maintaining confidence in future development.

---

# Testing Pyramid

KELTA follows the standard testing pyramid:

```
            End-to-End (E2E)
         ----------------------
          Integration Tests
      --------------------------
            Unit Tests
```

- Unit tests are the most common.
- Integration tests verify module interactions.
- End-to-End tests validate complete user workflows.

---

# Unit Tests

Unit tests should:

- Test one class at a time.
- Mock all external dependencies.
- Be deterministic.
- Execute quickly.

Examples:

- Services
- Utilities
- Validators
- Factories
- Domain logic

---

# Integration Tests

Integration tests verify collaboration between multiple components.

Examples:

- Service + Prisma
- Service + Repository
- Authentication flow
- Card rendering pipeline
- Permission evaluation

---

# End-to-End Tests

E2E tests validate complete business workflows.

Examples:

- Member registration
- Membership approval
- Login
- Certificate generation
- Card preview
- Payment workflow

---

# Coverage Targets

Minimum coverage goals:

| Type | Target |
|------|---------|
| Statements | 80% |
| Branches | 75% |
| Functions | 85% |
| Lines | 80% |

Business-critical modules should exceed 90%.

---

# Mocking Rules

Mock:

- Database
- Email
- SMS
- WhatsApp
- External APIs
- Payment gateways

Do not mock:

- Pure business logic
- Validation
- DTO transformation

---

# Test Naming

Good:

```
should activate a pending member
```

Better:

```
should activate a pending member and record audit event
```

Avoid:

```
test1
```

```
works
```

```
member test
```

---

# Test Structure

Follow the Arrange–Act–Assert pattern.

```text
Arrange
Create test data

Act
Call the method

Assert
Verify expected outcome
```

---

# Isolation

Tests must never depend on:

- Execution order
- Previous tests
- Shared mutable state
- Production databases

Each test must be independently executable.

---

# Performance

Unit tests should typically complete in milliseconds.

Long-running tests should be categorized as integration or E2E.

---

# Continuous Integration

Every pull request must pass:

- Build
- Lint
- Unit tests

Main branch merges should additionally run:

- Integration tests
- End-to-End tests (where configured)

---

# Regression Policy

Every bug fix must include a corresponding test whenever practical.

This prevents the same issue from reappearing in future releases.

---

# Production Rule

No feature is considered complete until it has appropriate automated test coverage.
