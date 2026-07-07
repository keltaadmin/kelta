# KELTA Git Workflow

Version: 1.0

---

# Purpose

This document defines the official Git workflow for the KELTA Enterprise Platform.

The objectives are:

- maintain a clean history
- support parallel development
- simplify releases
- reduce merge conflicts
- ensure production stability

---

# Branch Strategy

The project follows a simplified Git Flow model.

```
main
│
├── release/*
│
├── feature/*
│
├── hotfix/*
│
└── experiment/*
```

---

# Branch Definitions

## main

The production-ready branch.

Rules:

- Always builds successfully.
- Always passes lint.
- Protected branch.
- Direct commits are discouraged.

---

## release/*

Release preparation branches.

Examples:

```
release/keep-002
release/v1.0
release/member-module
```

Used for:

- documentation
- stabilization
- final testing
- release review

---

## feature/*

Feature development.

Examples:

```
feature/member-renewal

feature/payment-gateway

feature/cms

feature/member-directory
```

Should be short-lived.

---

## hotfix/*

Emergency production fixes.

Examples:

```
hotfix/login

hotfix/payment-timeout
```

Merged back into main immediately after validation.

---

## experiment/*

Research branches.

Examples:

```
experiment/ocr

experiment/ai-search

experiment/mapbox
```

No guarantee of merging.

---

# Commit Messages

Format:

```
TYPE: description
```

Examples:

```
KEEP-003: Documentation standards completed

FEATURE: Member renewal workflow

FIX: QR rendering alignment

SECURITY: Validate JWT audience

REFACTOR: Split lifecycle service
```

---

# Tags

Milestone tags:

```
keep-001

keep-002

keep-003
```

Release tags:

```
v0.9.0-alpha1

v1.0.0

v1.1.0
```

Architecture snapshots:

```
arch-v1.0

architecture-v1.1
```

---

# Pull Requests

Every PR should include:

- summary
- motivation
- testing performed
- screenshots (if UI changes)
- linked issue (when applicable)

---

# Before Merging

Verify:

- Build passes
- Lint passes
- Tests pass
- Documentation updated
- No debug code remains

---

# Protected Files

Changes to these areas require additional review:

- authentication
- permissions
- database schema
- RBAC
- migrations
- deployment
- CI/CD

---

# Releases

Each release should include:

- version tag
- release notes
- changelog
- migration notes (if required)

---

# Production Rule

The Git history should clearly tell the story of how the platform evolved.
