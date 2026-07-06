# KELTA Platform QR Infrastructure

## Purpose

Shared QR engine used across the KELTA platform.

Supported modules include:

- Members
- Certificates
- Meetings
- Events
- Finance
- Visitor Passes
- Assets
- Applications

---

## Responsibilities

- Build QR payloads
- Generate SVG
- Generate PNG
- Generate Base64
- Generate Data URL

---

## Notes

This module contains **no business logic**.

Business modules construct payloads and invoke the QR service.

The QR payload is versioned to support future schema evolution.
