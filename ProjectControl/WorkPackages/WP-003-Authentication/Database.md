# ============================================================
# KELTA Enterprise Platform
# ============================================================

Document ID        : WP-003-DB
Global Artifact ID : KELTA-WP-003-DB
Title              : Authentication & Identity Database Design
Classification     : Work Package Database Design
Version            : 0.1.0
Status             : Draft

Phase              : Phase-02 – Core Platform
Work Package       : WP-003 – Authentication & Identity

Created            : 2026-07-01
Last Updated       : 2026-07-01

Related Documents

WP-003 Requirements
WP-003 Business Rules
WP-003 Architecture
STD-002 Architecture Standard

# ============================================================
# Executive Summary
# ============================================================

This document defines the logical and physical database design for the
Authentication & Identity module.

The design supports secure authentication, session management, role-based
authorization, audit logging and future platform expansion.

---

# 1. Database Principles

The Authentication database SHALL comply with the following principles:

- UUID primary keys
- Foreign key integrity
- Soft delete where appropriate
- Audit columns on all business tables
- Migration-first schema changes
- Explicit constraints
- Indexed lookup columns
- Normalized design

---

# 2. Core Entities

The Authentication domain SHALL include the following entities.

User

Role

Permission

UserRole

RolePermission

Session

RefreshToken

PasswordResetToken

EmailVerificationToken

AuditLog

---

# 3. User Entity

Purpose

Represents the digital identity used for authentication.

Primary Key

id (UUID)

Business Identifier

None

Important Fields

- email
- mobile
- password_hash
- status
- email_verified
- last_login_at
- failed_login_attempts
- locked_until
- created_at
- updated_at
- deleted_at

Notes

A User SHALL remain independent of Membership.

---

# 4. Role Entity

Purpose

Represents a logical security role.

Examples

- Super Administrator
- Administrator
- State Secretary
- District Secretary
- Member
- Auditor
- Support

Important Fields

- id
- code
- name
- description
- active

---

# 5. Permission Entity

Purpose

Represents a granular system permission.

Examples

member.create

member.update

member.delete

committee.manage

meeting.approve

finance.view

system.admin

Important Fields

- id
- code
- name
- description

---

# 6. UserRole

Purpose

Many-to-many relationship between Users and Roles.

Important Fields

- user_id
- role_id
- assigned_by
- assigned_at
- expires_at (optional)

Users MAY possess multiple Roles.

---

# 7. RolePermission

Purpose

Many-to-many relationship between Roles and Permissions.

Important Fields

- role_id
- permission_id

---

# 8. Session Entity

## Purpose

Represents an authenticated user session.

Each authenticated device SHALL create a separate session.

### Primary Key

id (UUID)

### Important Fields

- id
- user_id
- device_name
- device_type
- browser
- operating_system
- ip_address
- user_agent
- status
- last_activity_at
- expires_at
- created_at

### Allowed Status Values

- Active
- Expired
- Revoked

---

# 9. RefreshToken Entity

## Purpose

Stores refresh tokens associated with user sessions.

### Important Fields

- id
- session_id
- token_hash
- expires_at
- revoked_at
- replaced_by
- created_at

### Rules

- Refresh Tokens SHALL be hashed before storage.
- Only one active refresh token SHALL exist per session.
- Tokens SHALL be rotated after successful refresh.

---

# 10. PasswordResetToken Entity

## Purpose

Supports secure password reset.

### Important Fields

- id
- user_id
- token_hash
- expires_at
- used_at
- created_at

### Rules

- Tokens SHALL be single-use.
- Tokens SHALL expire after a configurable duration.
- Tokens SHALL be stored as hashes.

---

# 11. EmailVerificationToken Entity

## Purpose

Supports email ownership verification.

### Important Fields

- id
- user_id
- token_hash
- expires_at
- verified_at
- created_at

### Rules

- Verification tokens SHALL be single-use.
- Verification tokens SHALL expire automatically.

---

# 12. AuditLog Entity

## Purpose

Maintains an immutable history of authentication and security events.

### Important Fields

- id
- user_id
- event_type
- event_category
- ip_address
- user_agent
- metadata
- created_at

### Example Event Types

- LOGIN_SUCCESS
- LOGIN_FAILED
- LOGOUT
- PASSWORD_CHANGED
- PASSWORD_RESET
- EMAIL_VERIFIED
- SESSION_REVOKED
- ACCOUNT_LOCKED
- ACCOUNT_UNLOCKED
- ROLE_ASSIGNED
- ROLE_REMOVED

Audit records SHALL NOT be modified after creation.

---

# 13. Entity Relationships

User

├── UserRole (1:N)

├── Session (1:N)

├── PasswordResetToken (1:N)

├── EmailVerificationToken (1:N)

└── AuditLog (1:N)

Role

└── RolePermission (1:N)

Permission

└── RolePermission (1:N)

Session

└── RefreshToken (1:N)

---

# 14. Indexing Strategy

The following columns SHALL be indexed.

User

- email (Unique)
- mobile (Unique where configured)
- status
- email_verified

Session

- user_id
- status
- expires_at

RefreshToken

- session_id
- expires_at

PasswordResetToken

- user_id
- expires_at

EmailVerificationToken

- user_id
- expires_at

AuditLog

- user_id
- event_type
- created_at

---

# 15. Constraints

The following constraints SHALL apply.

User

- email SHALL be unique.
- password_hash SHALL NOT be null.
- status SHALL use approved values.

Role

- code SHALL be unique.

Permission

- code SHALL be unique.

Session

- user_id SHALL reference User.

RefreshToken

- session_id SHALL reference Session.

---

# 16. Future Expansion

The schema SHALL support future entities including:

- MultiFactorAuthentication
- WebAuthnCredential
- OAuthAccount
- ApiKey
- LoginHistory
- TrustedDevice
- SecurityNotification

These SHALL integrate without requiring redesign of existing entities.

---

# 17. Prisma Modeling Guidelines

Every Prisma model SHALL:

- Use UUID primary keys.
- Include audit fields.
- Define explicit relations.
- Use descriptive relation names.
- Define indexes explicitly.
- Avoid implicit many-to-many relationships.
- Use enums where appropriate for finite state values.

---

# End of Database Design