# Design

<!-- impeccable:design-schema 1 -->

## Visual World

Editorial engineering dossier: a precise, restrained profile built from ruled lines, index-like sections, and an unmistakable cobalt working accent.

## Palette

- Dark ground: `#0a0a0a`
- Dark surface: `#111217`
- Light ground: `#fafafa`
- Light surface: `#f2f2ec`
- Primary text: theme foreground
- Muted text: theme muted role
- Accent: `#3157ff` in light mode and `#8da2ff` in dark mode

## Typography

- Display: Bricolage Grotesque
- Interface and body: Manrope
- Code: platform monospace stack

## Grid and Layout

- Maximum content width: `1180px`
- Page gutters: `32px` desktop, `24px` mobile
- Major sections use a 220px label rail and a flexible content column on wide screens.
- Project entries use ruled, two-column cells instead of nested cards.
- Mobile collapses to a single column and retains generous section separation.

## Components

- Links use understated underline or border states.
- Primary actions use a solid accent fill with a restrained rectangular radius.
- Panels use full borders, left rules, or horizontal rules rather than isolated shadows.
- Project entries use one-line technical metadata and a quiet arrow.
- Theme and navigation controls use bordered 40px targets.

## States

- Hover preserves structure and shifts accent or surface treatment.
- Keyboard focus uses a two-pixel accent outline with clear offset.
- Theme choice is persisted locally.
- Mobile navigation is a real disclosed menu with Escape support.
- Copy controls report copied state in text and through live status.

## Motion

- Motion is limited to one optional first-load entrance and short control feedback.
- Reduced-motion mode removes transitions and animated entrances.
