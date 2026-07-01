# ============================================================
# KELTA Enterprise Platform
# ============================================================

Document ID        : WP-003-API
Global Artifact ID : KELTA-WP-003-API
Title              : Authentication & Identity API Specification
Classification     : API Specification
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
WP-003 Database
STD-002 Architecture Standard

# ============================================================
# Executive Summary
# ============================================================

This document defines the REST API contract for the Authentication &
Identity module.

The API SHALL provide secure authentication, identity management,
session management and token lifecycle operations.

All endpoints SHALL comply with the platform API standards.

---

# 1. API Principles

The Authentication API SHALL:

- Follow REST principles.
- Use HTTPS.
- Return JSON responses.
- Use JWT authentication.
- Validate all request payloads.
- Return standardized error responses.
- Be versioned.

---

# 2. Base URL

/api/v1/auth

---

# 3. Standard Response Format

Success

{
  "success": true,
  "data": {}
}

Failure

{
  "success": false,
  "error": {
    "code": "AUTH_INVALID_CREDENTIALS",
    "message": "Invalid email or password.",
    "traceId": "..."
  }
}

---

# 4. Authentication Endpoints

POST /login

Purpose

Authenticate a user.

Authentication Required

No

Request

{
  "email": "user@example.com",
  "password": "********"
}

Success Response

{
  "success": true,
  "data": {
    "accessToken": "...",
    "refreshToken": "...",
    "expiresIn": 900
  }
}

---

POST /logout

Purpose

Terminate the current session.

Authentication Required

Yes

Behavior

- Revoke refresh token
- Close session
- Generate audit record

---

POST /refresh

Purpose

Issue a new Access Token using a valid Refresh Token.

Authentication Required

Refresh Token

Behavior

- Validate token
- Rotate token
- Return new token pair

---

GET /profile

Purpose

Return the authenticated user's profile.

Authentication Required

Yes

Response

- User identity
- Roles
- Permissions
- Account status

---

# 5. Registration Endpoints

## POST /register

Purpose

Create a new Applicant account.

Authentication Required

No

Business Rules

- Email SHALL be unique.
- Password SHALL satisfy password policy.
- Account status SHALL be Pending Verification.
- Verification email SHALL be generated.

Success Response

201 Created

---

# 6. Password Management Endpoints

## POST /forgot-password

Purpose

Generate a password reset token.

Authentication Required

No

Behavior

- Generate reset token.
- Send password reset email.
- Record audit event.

The response SHALL NOT reveal whether the email exists.

---

## POST /reset-password

Purpose

Reset user password.

Authentication Required

Password Reset Token

Behavior

- Validate token.
- Update password hash.
- Revoke active refresh tokens.
- Invalidate active sessions.
- Record audit event.

---

## POST /change-password

Purpose

Allow authenticated users to change their password.

Authentication Required

Yes

Behavior

- Verify current password.
- Validate new password.
- Update password hash.
- Revoke existing refresh tokens.
- Record audit event.

---

# 7. Email Verification Endpoints

## POST /verify-email

Purpose

Verify email ownership.

Authentication Required

Verification Token

Behavior

- Validate token.
- Activate account.
- Record audit event.

---

## POST /resend-verification

Purpose

Generate a new verification email.

Authentication Required

No

Business Rules

- Allowed only for unverified accounts.
- Rate limited.
- Previous unused verification tokens SHALL become invalid.

---

# 8. Session Management Endpoints

## GET /sessions

Purpose

List active sessions for the authenticated user.

Authentication Required

Yes

---

## DELETE /sessions/{sessionId}

Purpose

Terminate a specific session.

Authentication Required

Yes

---

## DELETE /sessions

Purpose

Terminate all sessions except the current one.

Authentication Required

Yes

---

# 9. Administrative Endpoints

## GET /users/{id}

Retrieve user identity information.

Authentication Required

Administrator

---

## PATCH /users/{id}/status

Update account status.

Allowed Values

- Active
- Suspended
- Locked
- Archived

Administrative actions SHALL generate audit records.

---

## PATCH /users/{id}/roles

Assign or remove roles.

Authentication Required

Administrator

Role assignments SHALL be audited.

---

# 10. HTTP Status Codes

The Authentication API SHALL use the following status codes.

200 OK

201 Created

204 No Content

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Unprocessable Entity

429 Too Many Requests

500 Internal Server Error

---

# 11. Error Code Catalog

Standard Authentication Error Codes

AUTH_INVALID_CREDENTIALS

AUTH_ACCOUNT_LOCKED

AUTH_ACCOUNT_SUSPENDED

AUTH_ACCOUNT_INACTIVE

AUTH_EMAIL_NOT_VERIFIED

AUTH_INVALID_REFRESH_TOKEN

AUTH_REFRESH_TOKEN_EXPIRED

AUTH_PASSWORD_RESET_TOKEN_INVALID

AUTH_PASSWORD_RESET_TOKEN_EXPIRED

AUTH_ACCESS_DENIED

AUTH_PERMISSION_DENIED

AUTH_RATE_LIMIT_EXCEEDED

---

# 12. API Security Requirements

All authentication endpoints SHALL:

- Use HTTPS.
- Validate request payloads.
- Enforce rate limiting.
- Produce audit records where applicable.
- Return standardized response envelopes.
- Include a trace identifier.
- Prevent information leakage through error messages.

---

# End of API Specification