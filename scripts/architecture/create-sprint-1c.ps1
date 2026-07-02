# ============================================================
# KELTA Enterprise Platform
# Sprint 1C - Domain Architecture
# ============================================================

$base = "D:\KELTA\Architecture\02-Domain"

New-Item -ItemType Directory -Force -Path $base | Out-Null

# ------------------------------------------------------------
# DomainArchitecture.md
# ------------------------------------------------------------
@'
# Domain Architecture

## Document Information

| Field | Value |
|--------|-------|
| Document ID | DOM-001 |
| Version | 1.0.0 |
| Status | Draft |

---

# Purpose

This document defines the business domains, ownership boundaries, and interaction principles of the KELTA Enterprise Platform.

---

# Core Domains

1. Identity & Access
2. Membership
3. Organization
4. Workflow
5. Finance
6. Documents
7. Communication
8. Meetings
9. Elections
10. Website CMS
11. Reporting
12. Administration

---

# Domain Principles

- Each domain owns its data.
- Cross-domain access occurs through application services.
- Domains remain loosely coupled.
- Shared logic should be minimized.

---

# Related Documents

- EAP-000
- BusinessCapabilities.md
- BusinessProcesses.md
'@ | Set-Content "$base\DomainArchitecture.md" -Encoding UTF8

# ------------------------------------------------------------
# DomainModel.md
# ------------------------------------------------------------
@'
# Domain Model

## Major Aggregates

- User
- Member
- Membership
- District
- Committee
- Meeting
- Election
- Document
- Payment
- Notification
- Audit Log

---

Future entity relationships will be defined during Database Architecture.
'@ | Set-Content "$base\DomainModel.md" -Encoding UTF8

# ------------------------------------------------------------
# ModuleOwnership.md
# ------------------------------------------------------------
@'
# Module Ownership

| Domain | Owns |
|---------|------|
| Identity | Users, Sessions, Roles |
| Membership | Members, Applications, Renewals |
| Organization | Districts, Committees |
| Workflow | Tasks, Approvals |
| Finance | Payments, Receipts |
| Documents | Files, Metadata |
| Meetings | Meetings, Minutes |
| Elections | Elections, Candidates |
| CMS | Pages, News |
| Reporting | Dashboards, Reports |
| Administration | Configuration, Audit |
'@ | Set-Content "$base\ModuleOwnership.md" -Encoding UTF8

# ------------------------------------------------------------
# BoundedContexts.md
# ------------------------------------------------------------
@'
# Bounded Contexts

The KELTA platform is divided into bounded contexts to ensure clear ownership and scalability.

## Contexts

- Identity
- Membership
- Organization
- Workflow
- Finance
- Documents
- Meetings
- Elections
- CMS
- Reporting
- Administration

Each bounded context encapsulates its own business rules and data ownership.
'@ | Set-Content "$base\BoundedContexts.md" -Encoding UTF8

Write-Host ""
Write-Host "==========================================="
Write-Host " Sprint 1C Completed Successfully"
Write-Host "==========================================="
Write-Host ""
Write-Host "Created:"
Write-Host " - DomainArchitecture.md"
Write-Host " - DomainModel.md"
Write-Host " - ModuleOwnership.md"
Write-Host " - BoundedContexts.md"
