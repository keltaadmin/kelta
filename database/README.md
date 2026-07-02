# KELTA Database Engineering Workspace

## Purpose

This directory contains all database engineering artifacts for the KELTA Enterprise Platform.

It is the authoritative location for:

- Database architecture
- Entity catalogue
- Data dictionary
- ER diagrams
- Naming standards
- Migration strategy
- Database engineering documentation

## Runtime Implementation

The production Prisma schema used by the application remains in:

apps/api/prisma/

The documents in this directory define and govern that schema.

## Engineering Workflow

Requirements
→ Domain Model
→ Entity Catalogue
→ Data Dictionary
→ Relationship Matrix
→ ER Diagram
→ Prisma Schema
→ Migration
→ Implementation

No production schema changes should be introduced without updating the engineering documentation first.
