---
name: frontend-nextjs-developer
description:
  Use this skill to develop frontend code in Next.js framework. Focus is on clean code, SOLID principles, component reusability, modularity, and an optimized frontend workflow.
---

# Frontend Next.js Developer

This skill guides the agent in developing high-quality frontend code in the Next.js framework. All work should adhere to **Clean Code** standards and **SOLID** principles.

## Core Principles

1. **Single Responsibility Principle (SRP):** Components should do one thing. If a component is managing complex state and rendering UI, split it into smaller presentation components and custom hooks.
2. **Separation of Concerns:** Keep business logic, data fetching, and presentation layers strictly separated.
3. **Modularity & Reusability:** Build generic, reusable UI components (e.g., buttons, modals, inputs) that do not hold business logic.
4. **Clean Code:** Use descriptive variable names, avoid magic numbers/strings, and write code that documents itself. Avoid deep nesting and complex conditionals. Keep files small and focused.

## Workflow

Follow this structured workflow for any Next.js development task:

### 1. Requirements & Architecture Plan
- **Understand the Goal:** Identify the exact user requirements.
- **Component Hierarchy:** Plan the component tree before writing code. Determine which components are Client Components (`"use client"`) and which are Server Components (default). Minimize the use of Client Components to the leaves of the component tree.
- **State Definition:** Decide where state should live (local, context, URL search params, or global store) and avoid redundant state.

### 2. Implementation Steps

**A. Server vs. Client Components**
- Start with Server Components for data fetching and initial rendering to improve SEO and performance.
- Extract interactive elements (buttons, forms, animations) into small, focused Client Components.
- Pass required data via props from Server Components to Client Components.

**B. Data Fetching & Server Actions**
- Prefer server-side data fetching directly in Server Components via the extended `fetch` API.
- Use Server Actions for data mutations (forms, API calls) instead of traditional API routes where possible.
- If using client-side fetching, encapsulate it in custom hooks.

**C. Styling & UI**
- Maintain consistent styling using Tailwind CSS, CSS Modules, or your chosen styling solution.
- Separate styling concerns from complex logic.
- Ensure interfaces are mobile-responsive and accessible (ARIA attributes, semantic HTML).

**D. Encapsulating Business Logic**
- Extract complex `useState`, `useEffect`, and data manipulation combinations into Custom Hooks (e.g., `useAuth`, `useTableSort`).
- Keep UI components "dumb" (purely presentational) whenever possible.

### 3. Review & Refactor Phase
- **Check SOLID & SRP Violations:** Are your files too large (e.g., > 150 lines)? Break them down into smaller functional pieces.
- **Prop Drilling:** Are props being passed blindly through multiple layers? Consider Component Composition (using `children`) instead.
- **Performance Optimization:** Ensure images use `next/image`, links use `next/link`, and avoid unnecessary client-side re-renders.

## Recommended Next.js File Structure

Adhere to the following directory responsibilities when implementing features:

- **`app/`**: Contains only routing mechanisms (`page.tsx`, `layout.tsx`, `loading.tsx`) and route-specific Server Components.
- **`components/`**: 
  - `ui/`: Generic, reusable, pure presentation components (e.g., `Button`, `Modal`, `Input`).
  - `features/`: Complex, domain-specific components organized by feature logic.
- **`hooks/`**: Custom React hooks for shared presentation and business logic.
- **`lib/`**: Pure utility functions, formatting tools, constants, and type definitions.
- **`services/`**: API calls, external database queries, and data access layers.

## Final Output Checklist
- [ ] Does this Next.js app utilize Server Components efficiently?
- [ ] Are Client Components kept to an absolute minimum?
- [ ] Is the business logic decoupled from the UI (Presentation Logic)?
- [ ] Does the new code adhere to Clean Code conventions (naming, brevity)?
