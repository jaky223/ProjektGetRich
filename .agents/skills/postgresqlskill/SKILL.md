---
name: database-postgresql-admin
description:
  Use this skill to manage, design, and optimize PostgreSQL databases. Focus is on schema design, data integrity, efficient querying, index optimization, and database migrations.
---

# PostgreSQL Database Administrator / Developer

This skill guides the agent in developing robust, efficient, and scalable PostgreSQL database schemas, queries, and migrations.

## Core Principles

1. **Data Integrity First:** Always enforce data integrity at the database layer using Constraints (Primary Keys, Foreign Keys, `UNIQUE`, `NOT NULL`, and `CHECK` constraints). Do not rely solely on the backend application layer for data validation.
2. **Normalization:** Follow the 3rd Normal Form (3NF) by default to prevent data anomalies. Denormalize only when strictly necessary for read-heavy performance bottlenecks and document the reasoning.
3. **Performance & Indexing:** Understand when and how to use indexes (B-Tree, GIN, GiST). Avoid over-indexing as it heavily impacts write performance. Always analyze slow queries using `EXPLAIN ANALYZE`.
4. **Security:** Never store plain-text passwords. Follow the principle of least privilege for database roles and access.

## Workflow

Follow this structured workflow for any database-related tasks:

### 1. Schema Design & Migrations
- **Migrations First:** Always use a database migration tool (e.g., Flyway, which is configured in this project). **Never** rely on Hibernate `ddl-auto=update` for schema generation in production, and never make manual schema changes.
- **Naming Conventions:** Strictly use lowercase `snake_case` for all tables, columns, constraints, and indexes. 
  - E.g., `user_account`, `created_at`.
  - Naming conventions for constraints: `[table]_[column]_pk` for Primary Keys, `[table]_[column]_fk` for Foreign Keys, `[table]_[column]_idx` for Indexes.
- **Data Types:** Choose the most appropriate and restrictive data type.
  - Use `TIMESTAMPTZ` for dates/times to handle timezones correctly.
  - Use `UUID` or `BIGSERIAL` (for `BIGINT`) for primary keys.
  - Use `VARCHAR(n)` or `TEXT` correctly, and `JSONB` for flexible/unstructured document data.

### 2. Query Writing & Optimization
- **Avoid `SELECT *`:** Always explicitly select only the required columns to reduce memory, CPU, and network overhead.
- **Joins & Subqueries:** Prefer explicit `JOIN` syntax over implicit joins in the `WHERE` clause. Use `CTE`s (Common Table Expressions / `WITH` clauses) to drastically improve the readability of complex queries.
- **Application Integration (e.g., Spring Data JPA):** Be aware of how the application queries the database. Actively prevent the **N+1 Selects Problem** by writing custom `@Query` with `JOIN FETCH` or utilizing entity graphs.

### 3. Review & Refactor Phase
- **Check Missing Constraints:** Does every new table have a Primary Key? Are foreign keys properly cascaded (`ON DELETE CASCADE`) or restricted?
- **Index Check:** Are foreign keys indexed? (PostgreSQL does *not* index foreign keys by default). Are frequently filtered (`WHERE`) or sorted (`ORDER BY`) columns indexed?
- **Migration Reversibility & Safety:** If writing a Flyway migration script (`VX__Description.sql`), is it safe to run? Does it lock tables and require downtime? (Look into `CONCURRENTLY` for index creation on large tables).

## Final Output Checklist
- [ ] Are all tables, columns, and constraints using `snake_case`?
- [ ] Is data integrity enforced strictly via DB constraints (`NOT NULL`, FK, `UNIQUE`)?
- [ ] Are database changes written as proper SQL migration scripts for Flyway?
- [ ] Are foreign keys and frequently searched columns properly indexed?
- [ ] Is `TIMESTAMPTZ` used for timestamps instead of `TIMESTAMP`?
