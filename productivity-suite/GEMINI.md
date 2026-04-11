# Productivity Suite - Gemini CLI Guidelines

These are the foundational guidelines and conventions for the `productivity-suite` workspace. 

## Angular Conventions (v21+)

### 1. Architecture & Reactivity
- **Standalone Components:** Always generate and use Standalone Components, Directives, and Pipes. Do not use NgModules unless absolutely necessary for legacy integration.
- **Signals First:** Prefer Angular Signals (`signal`, `computed`, `effect`) for state management over RxJS `BehaviorSubject` where applicable.
- **Signal Inputs/Outputs:** Use the modern signal-based input and output APIs (`input()`, `output()`, `model()`) instead of the traditional `@Input()` and `@Output()` decorators.
- **Dependency Injection:** Use the `inject()` function for dependency injection instead of constructor injection. This promotes cleaner classes and easier reuse/inheritance.

### 2. Templates & Control Flow
- **Built-in Control Flow:** Always use the new built-in control flow syntax (`@if`, `@for`, `@switch`) instead of legacy structural directives (`*ngIf`, `*ngFor`, `*ngSwitch`).
- **Deferred Loading:** Use `@defer` blocks for lazy loading components, heavy charts, or content below the fold in templates when appropriate to improve initial load time.
- **Self-Closing Tags:** Use self-closing tags for components that do not have content projection (e.g., `<app-dashboard />`).

### 3. General TypeScript
- **Strict Typing:** Ensure strict typing is maintained. Avoid using `any`. Use `unknown` if the type is truly not known yet.
- **Immutability:** Treat state objects and arrays as immutable. Use spread operators or immutability utilities when updating state.
- **File Naming:** Follow standard Angular file naming conventions (`feature.component.ts`, `feature.service.ts`).

## SCSS Style Guide

### 1. Architecture & Syntax
- **Color Tokens:** Whenever any colors are needed in the `productivity-suite` workspace, you MUST refer to the semantic tokens defined in `light-theme.scss`. If a required color token is missing, add it to `light-theme.scss` (or `colors.scss` for base scales) rather than hardcoding colors.
- **Modern Sass:** Always use `@use` instead of the deprecated `@import`. Keep module scope clean and explicit.
- **Utility First:** Leverage the utility classes (like gaps, toRem) before writing custom component styles.
- **BEM Methodology:** Follow BEM (Block Element Modifier) naming conventions for custom classes to ensure scoping, readability, and modularity (e.g., `.card`, `.card__header`, `.card--active`).
- **Rem Units:** Use `rem` for typography, padding, margins, and gaps. Utilize the `toRem` function defined in `utility.scss` for precise pixel-to-rem conversions.

### 2. Structure & Organization
- **Nesting:** Avoid nesting deeper than 3 levels to maintain low specificity, readability, and avoid rendering performance issues.
- **Variables:** Use CSS variables (Custom Properties) for dynamic values like themes and layout settings. Use SCSS variables for static configuration.
- **Mobile-First:** Write media queries with a mobile-first approach (using `min-width`).

## HTML Style Guide

### 1. Semantic Markup
- **Semantics:** Use semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<article>`, `<section>`, `<nav>`) instead of generic `<div>` elements wherever possible to improve SEO and structure.
- **Hierarchy:** Maintain a logical and sequential heading hierarchy (`<h1>` followed by `<h2>`, etc.) without skipping levels.

### 2. Accessibility (a11y)
- **ARIA Attributes:** Add appropriate `aria-*` attributes and roles when standard semantic elements fall short of describing functionality.
- **Forms:** Always associate labels with form inputs (using `for` / `id` attributes or wrapping the input in the `<label>`).
- **Images:** Provide meaningful `alt` text for informative images. Use `alt=""` for purely decorative images.

### 3. Formatting
- **Attribute Order:** Order attributes consistently: structural directives/control flow first, then Angular bindings (`[input]`), then standard HTML attributes (`class`, `id`), then event bindings (`(click)`).
- **Line Length:** Break long HTML tags with multiple attributes into multiple lines for better readability, aligning attributes vertically.