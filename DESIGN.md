---
name: Technical Portfolio System
colors:
  surface: '#13121b'
  surface-dim: '#13121b'
  surface-bright: '#393842'
  surface-container-lowest: '#0e0d16'
  surface-container-low: '#1b1b24'
  surface-container: '#201f28'
  surface-container-high: '#2a2933'
  surface-container-highest: '#35343e'
  on-surface: '#e5e0ee'
  on-surface-variant: '#c8c4d8'
  inverse-surface: '#e5e0ee'
  inverse-on-surface: '#312f39'
  outline: '#928ea1'
  outline-variant: '#474555'
  surface-tint: '#c5c0ff'
  primary: '#c5c0ff'
  on-primary: '#2600a1'
  primary-container: '#6d5dfb'
  on-primary-container: '#ffffff'
  inverse-primary: '#5542e2'
  secondary: '#c8c6c9'
  on-secondary: '#303033'
  secondary-container: '#47464a'
  on-secondary-container: '#b6b4b8'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#b95c00'
  on-tertiary-container: '#fffeff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e4dfff'
  primary-fixed-dim: '#c5c0ff'
  on-primary-fixed: '#150067'
  on-primary-fixed-variant: '#3c1fcb'
  secondary-fixed: '#e4e1e5'
  secondary-fixed-dim: '#c8c6c9'
  on-secondary-fixed: '#1b1b1e'
  on-secondary-fixed-variant: '#47464a'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#723600'
  background: '#13121b'
  on-background: '#e5e0ee'
  surface-variant: '#35343e'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-sm: 16px
  margin-md: 32px
  margin-lg: 64px
  container-max: 1200px
---

## Brand & Style

This design system is built for a data engineering portfolio, prioritizing clarity, structural integrity, and a "low-level" technical aesthetic. The personality is disciplined, analytical, and transparent, mirroring the architecture of complex data pipelines.

The style is **Architectural Minimalism**. It draws inspiration from IDEs and engineering schematics, using high-contrast typography and structured layouts to communicate expertise. The UI avoids unnecessary decoration, instead using "data-as-decoration" through mono-spaced metrics, grid-aligned elements, and subtle border-driven containment. The goal is to evoke the feeling of a well-documented system where every pixel serves a functional purpose.

## Colors

The color palette is rooted in a deep, nocturnal spectrum to reduce eye strain and provide a professional "terminal" environment. 

- **Primary (#6D5DFB):** A high-energy violet used sparingly for key actions, focus states, and signifying active data flow.
- **Background & Surface:** The foundation is built on #0F1115 (Background) for deep space and #18181B (Surface) for raised containers like cards and navigation bars.
- **Borders (#27272A):** This is the most critical neutral. It defines the "Technical System" look by creating sharp, subtle boundaries between modules.
- **Functional Accents:** Success and Warning colors are desaturated to maintain the professional tone while providing immediate feedback on pipeline status or metrics.

## Typography

This system uses a dual-font strategy to balance legibility with a technical atmosphere. 

- **Headings (Inter):** Used for primary section titles and project names. Inter’s tall x-height and clean apertures provide a modern, authoritative feel.
- **Technical/Body (JetBrains Mono):** Used for all descriptions, metrics, and data points. The monospaced nature of JetBrains Mono enforces a vertical rhythm that aligns with the "code" theme.
- **Hierarchy:** Use `label-caps` for small meta-information like "SCHEMA," "TIMESTAMP," or "STATUS." Ensure `code-sm` is utilized for technical specifications and JSON snippets.

## Layout & Spacing

The layout philosophy follows a **Fixed-Grid Modular** approach. Elements are aligned to an 8px base unit to ensure a disciplined, mathematical rhythm across the interface.

- **Grid:** A 12-column grid is used for desktop (1200px max width). For tablet, shift to 6 columns. For mobile, a single column with 16px side margins.
- **Whitespace:** Use generous margins (`margin-lg`) between major sections to emphasize clarity. Data density should be high *within* components but low *between* components to avoid cognitive overload.
- **Metric Alignment:** Numerical data and labels should always be top-left aligned within their containers to mimic document structure.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layering and Borders** rather than shadows. 

- **Level 0 (Background):** #0F1115 — The canvas.
- **Level 1 (Surface):** #18181B — The primary container color. Surfaces are defined by a 1px solid border (#27272A).
- **Level 2 (Interaction):** When a card or element is hovered, the border color shifts to the Primary color (#6D5DFB) or a lighter grey (#3F3F46).
- **Shadows:** Avoid soft shadows. If depth is required for a modal or dropdown, use a sharp 4px offset shadow with 100% opacity in a darker black to simulate a "stacked" physical sheet.

## Shapes

The shape language is "Soft-System." While the grid is rigid and sharp, a consistent **8px radius (rounded-lg)** is applied to all cards and buttons to make the interface feel modern and engineered rather than prehistoric.

- **Small elements:** Buttons and input fields use a 4px radius for a tighter look.
- **Large elements:** Cards and containers use the 8px radius.
- **Data Points:** Status indicators (LED style) use a 50% radius (circles) to stand out against the rectangular grid.

## Components

- **Buttons:** Primary buttons use a solid #6D5DFB fill with white mono text. Ghost buttons use a 1px #27272A border and transition to a subtle primary tint on hover.
- **Metric Displays:** High-visibility components featuring a large monospaced value, a `label-caps` title, and a small sparkline or "percentage change" indicator in the corner.
- **Technical Cards:** Background #18181B, 1px border #27272A, 8px radius. Include a "Header" area with a monospaced ID (e.g., `01 / PIPELINE_CONFIG`) and a "Footer" area for tags.
- **Data Tags/Chips:** Rectangular with a 2px radius. Background #27272A. Text in `code-sm`.
- **Code Blocks:** Use a slightly darker background (#09090B) to create an "inset" feel. Always include a syntax-highlighting theme that uses the Primary color for variables.
- **Input Fields:** Minimalist. Only a bottom border or a very subtle 1px frame. Focus states must use the Primary #6D5DFB color.