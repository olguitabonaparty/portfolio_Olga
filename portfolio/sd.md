# Sistema de diseño

## Colores y Accesibilidad (WCAG 2.1)

### Tema Oscuro (Por defecto)
- **Fondo (bg):** `#0a0a0a`
- **Texto Principal (text-primary):** `#ffffff` (Contraste 21:1 - AAA)
- **Texto Secundario (text-secondary):** `#a1a1aa` (Contraste 7.4:1 - AAA)
- **Color de Acento (accent-color):** `#818cf8` (Indigo 400 - Contraste 5.8:1 - AA). *Optimizado para legibilidad y accesibilidad en pantallas oscuras.*
- **Color de Acento Hover (accent-hover):** `#6366f1` (Indigo 500)

### Tema Claro
- **Fondo (bg):** `#f8fafc`
- **Texto Principal (text-primary):** `#0f172a` (Contraste 19.3:1 - AAA)
- **Texto Secundario (text-secondary):** `#475569` (Contraste 7.24:1 - AAA)
- **Color de Acento (accent-color):** `#4f46e5` (Indigo 600 - Contraste 6.01:1 - AA)
- **Color de Acento Hover (accent-hover):** `#4338ca` (Indigo 700)

### Gradientes
- **Gradiante 1 (Tema Oscuro):** `linear-gradient(135deg, #818cf8 0%, #a855f7 100%)`
- **Gradiante 1 (Tema Claro):** `linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)`

### Tokens de Sombras y Transparencias
- **Sombras de Acento:** `--accent-shadow-30` (30% opacidad) y `--accent-shadow-50` (50% opacidad) adaptados a cada tema.
- **Transparencias:** `--accent-alpha-10` (10% opacidad) y `--accent-alpha-5` (5% opacidad) para interacciones de cursor y enfoques de formulario.

## Tipografía

- Font heading: 'Outfit', sans-serif
- Font body: 'Inter', sans-serif