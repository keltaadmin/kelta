# EAP-001 — Repository Architecture

## Purpose

This document defines the official repository architecture for the KELTA Enterprise Platform.

The repository structure SHALL remain stable after Version 1.0.

New top-level folders SHALL NOT be introduced unless approved through an Architecture Decision Record (ADR).

---

# Repository Structure

KELTA

Architecture/
Enterprise system design.

ProjectControl/
Governance, standards, work packages and reviews.

apps/
Production applications.

packages/
Shared libraries.

infrastructure/
Deployment, Docker, CI/CD and operational assets.

Assets/
Images, ER diagrams, mockups, sample data and presentations.

docs/
User manuals, administrator guides and installation documentation.

---

# Ownership

Architecture

Responsible for:

* Enterprise Architecture

* Business Architecture

* Application Architecture

* Database Architecture

* Security Architecture

* Integration Architecture

ProjectControl

Responsible for:

* Governance

* Standards

* ADR

* Reviews

* Milestones

* Quality

* Work Packages

apps

Responsible for production source code only.

packages

Responsible for reusable shared libraries.

Assets

Responsible for non-source project assets.

docs

Responsible for end-user documentation.

---

# Repository Principles

Single Responsibility Principle applies to folders.

Architecture SHALL define systems.

ProjectControl SHALL manage delivery.

apps SHALL contain production code.

Assets SHALL contain binary resources.

docs SHALL contain operational documentation.

---

# Repository Freeze

Repository Version

1.0

Status

Frozen

Changes to repository structure SHALL require an ADR.

---

# Approval

Chief Architect

Approved

Engineering Lead

Approved

Repository Status

Frozen