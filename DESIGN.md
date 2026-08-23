# Design System Document

## 1. Overview & Creative North Star: "The Neon Architect"
The design system is built to transcend the standard "developer portfolio" template. Our Creative North Star is **"The Neon Architect"**—a vision where high-precision engineering meets fluid, futuristic aesthetics. We are moving away from rigid, boxed layouts in favor of an editorial, "SaaS-Plus" experience. 

The goal is to visualize code not as text, but as a living, architectural force. By utilizing intentional asymmetry, overlapping structural elements, and a deep tonal hierarchy, we create an environment that feels both professional and boundary-pushing. This system avoids heavy-handed borders and instead uses light, depth, and motion to guide the eye.

---

## 2. Colors: Tonal Depth & Kinetic Energy
This system uses a sophisticated dark-mode palette where color is treated as a light source rather than a fill.

### The Palette (Material Design Convention)
- **Primary (`#3b82f6`):** Used for core interactive elements and brand accents.
- **Secondary (`#8b5cf6`):** Violet reserved for secondary emphasis, hover states, and "Live" project deployment chips.
- **Tertiary (`#22d3ee`):** Cyan used for tertiary highlights and contact links.
- **Surface (`#05070f`):** The foundational void upon which all elements sit.

### The Accent Layer
Raw accent variables power glows, gradients, and success feedback. They are not general-purpose fills:
- **Accent Violet (`#ddb7ff`):** Success-state text (e.g., form confirmation) and `glow-primary` shadows.
- **Accent Blue (`#adc6ff`):** Gradient overlays and grid textures.
- **Accent Green (`#4ae176`):** Reserved success green, available as `text-accent-green`.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Section boundaries must be defined through:
1.  **Tonal Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Negative Space:** Large, intentional gaps (using the spacing scale) to create mental groupings.
3.  **Glow Thresholds:** Using a subtle `primary_container` glow to suggest a boundary without a hard line.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of "Synthetic Obsidian."
*   **Deepest:** `surface_container_lowest` (Backgrounds/Underlays).
*   **Standard:** `surface` (The base workspace).
*   **Elevated:** `surface_container_high` (Feature cards, code snippets).
*   **Highest:** `surface_bright` (Active modals or floating tooltips).

### The "Glass & Gradient" Rule
To achieve a high-end SaaS feel, all floating elements (Modals, Navigation Bars) should utilize **Glassmorphism**:
- **Background:** `surface_container` at 70% opacity.
- **Effect:** `backdrop-blur` (20px - 40px).
- **Signature Texture:** Use a linear gradient from `primary` to `tertiary` at 10% opacity as a subtle overlay on large surfaces to give them "soul."

---

## 3. Typography: Editorial Technicality
We pair the technical precision of **Space Grotesk** with the humanistic readability of **Manrope**.

*   **Space Grotesk (Display & Headlines):** Used for big, bold statements. Its geometric quirks reflect the "Modern Fullstack" identity.
    *   *Display-LG (3.5rem):* Use for hero headlines with tight letter-spacing (-0.02em).
    *   *Headline-MD (1.75rem):* Use for project titles.
*   **Manrope (Body & Titles):** Used for long-form content and UI labels. Its balance ensures high legibility against dark backgrounds.
    *   *Body-LG (1rem):* Standard reading text. Set to `on_surface_variant` for optimal contrast.
    *   *Label-MD (0.75rem):* Used for metadata (e.g., Tech Stack tags), always in uppercase with 0.05em tracking.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, shadows are not black; they are "Ambient Light Occlusions."

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface_container_highest` card on top of a `surface_container_low` section. The contrast in tone creates a natural lift.
*   **Ambient Shadows:** For floating components, use an extra-diffused shadow: `0 20px 50px -12px rgba(0, 0, 0, 0.5)`. The shadow color should be a darker version of the surface color, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` at **15% opacity**. This provides a hint of structure without breaking the fluid aesthetic.
*   **Visual Metaphor (Blobs):** Use `primary_container` and `tertiary_container` as large, soft-blurred blobs (150px blur) behind key UI elements to simulate depth and kinetic energy.

---

## 5. Components: The Building Blocks

### Buttons
*   **Primary:** `primary` background with `on_primary` text. Use `xl` (0.75rem) roundedness. Add a subtle `primary` outer glow on hover.
*   **Secondary:** Ghost style. `outline` border (at 20% opacity) with `primary` text.
*   **Tertiary:** No background. `primary` text with a subtle underline that expands on hover.

### Cards & Lists
*   **Constraint:** No dividers. Use `surface_container_low` for the card body and `surface_container_high` for the header area.
*   **Interaction:** On hover, a card should shift from `surface_container_low` to `surface_container_highest` and scale by 1.02x.

### Chips (Tech Stack Tags)
*   **Visual:** Use `surface_container_highest` background with `label-md` typography.
*   **Accent:** A 4px circle of `primary` or `secondary` to the left of the text to indicate "Active" or "Skill Level."

### Code Snippets / Visual Metaphors
*   Instead of standard screenshots, use "Code Blocks" styled as high-fidelity UI. Use `surface_container_lowest` for the background and syntax highlighting based on the `primary`, `secondary`, and `tertiary` tokens.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place a floating terminal window partially overlapping a headline to create depth.
*   **Focus on Micro-interactions:** Every button press should have a subtle 200ms spring animation.
*   **Leverage Color for Logic:** Use `tertiary` (Cyan) for technical/logic accents and `secondary` (Violet) for expressive emphasis moments.

### Don't:
*   **Don't use 100% white text:** Always use `on_surface` (`#dbe2ff`) to prevent eye strain.
*   **Don't use hard corners:** Stick to the `xl` (0.75rem) or `full` roundedness scale to maintain the "SaaS-Modern" feel.
*   **Don't use stock photos:** Use abstract SVG shapes or CSS-generated blobs to represent complex backend concepts.
*   **Don't use high-contrast dividers:** If you must separate items, use a 48px vertical gap instead of a line.