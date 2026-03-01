# DevPortfolio - Guida Completa

Portfolio web moderno e responsivo di **Sergio Civitarese** - Software Developer. Sviluppato con HTML5, CSS puro (variabili HSL), e JavaScript minimalista.

## 📋 Indice

1. [Descrizione Progetto](#descrizione-progetto)
2. [Struttura Cartelle](#struttura-cartelle)
3. [Tecnologie Utilizzate](#tecnologie-utilizzate)
4. [Guida Personalizzazione](#guida-personalizzazione)
5. [Guida Implementazioni Comuni](#guida-implementazioni-comuni)
6. [Guida Deploy](#guida-deploy)
7. [Variabili CSS Disponibili](#variabili-css-disponibili)

---

## Descrizione Progetto

**DevPortfolio** è un sito portfolio completo e responsivo (mobile-first) che presenta:

- ✅ **3 Pagine HTML**: Home (skills), Curriculum (CV con timeline), About (sport e hobby)
- ✅ **Design Moderno**: Colori vivaci (blu + arancio), animazioni fluide, glassmorphism
- ✅ **Mobile Menu**: Drawer full-screen che scorre da destra, hamburger sempre visibile
- ✅ **Responsive**: Mobile (320px), Tablet (768px), Desktop (1200px+)
- ✅ **Nessun Framework**: HTML/CSS/JS puro, facile da modificare e host
- ✅ **Icon CDN**: Skill icons da Devicons CDN (Java, SQL, Python, CSS, HTML, ecc.)
- ✅ **CSS Modulare**: Architettura CSS split in più file per migliore manutenibilità

### Caratteristiche Design
- **Font**: Space Grotesk (testo) + JetBrains Mono (codice)
- **Colori HSL**: Variabili CSS centralizzate per facile personalizzazione tema
- **Shadow System**: Ombre morbide e profondità moderna
- **Animazioni**: Hover effects, blob animation nel hero, transizioni smooth
- **Accessibility**: Semantic HTML, alt text, contrasto colori

---

## Struttura Cartelle

```
portfolio/
├── index.html                    # Home page con hero e skills
├── curriculum.html               # CV/Curriculum completo
├── presentazione.html             # About page con sport e hobby
├── css/
│   ├── reset.css                 # CSS reset base
│   ├── variables.css             # Variabili CSS centralizzate (colori, font, spacing)
│   ├── layout.css                # Layout primario e struttura
│   ├── components.css            # Stili componenti singoli
│   ├── responsive.css            # Media queries e adattamenti responsive
│   └── style.css                 # Stili specifici e personalizzati
├── js/
│   ├── main.js                   # Menu hamburger + carousel photos
│   └── menu.js                   # Gestione menu responsive
└── README.md                      # Questa guida
```

---

## Tecnologie Utilizzate

- **HTML5 Semantico** - nav, header, main, footer, section
- **CSS3** - Variabili HSL, Flexbox, Grid, Media Queries
- **JavaScript Vanilla** - Event listeners, classList
- **Google Fonts** - Space Grotesk + JetBrains Mono
- **Devicons CDN** - Skill icons

---

## Guida Personalizzazione

### 1. Cambiare Colori (Tema Globale)

**File**: `css/variables.css` (linee 10-27) e `css/style.css` (linee 29-72)

Le variabili CSS principali sono:

```css
/* In variables.css */
--color-primary-blue: #2563eb;      /* Blu moderno */
--color-accent-yellow: #f59e0b;     /* Arancio soft */
--color-dark: #1f2937;              /* Nero soft */

/* In style.css */
--primary: hsl(205, 85%, 50%);      /* Blu principale */
--accent: hsl(35, 95%, 55%);        /* Arancio accento */
```

**Modifica il tema cambiando i valori nei :root di variables.css e style.css**

**Esempi tema alternativo:**
- Viola + Rosa: `--primary: hsl(280, 85%, 50%)` + `--accent: hsl(350, 95%, 55%)`
- Verde + Giallo: `--primary: hsl(120, 85%, 40%)` + `--accent: hsl(55, 100%, 45%)`

### 2. Modificare Spaziature

**File**: `css/variables.css` (linee 46-60)

Modifica le variabili di spacing standard:

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
```

### 3. Cambiare Font

**File**: In ogni HTML, modifica il link Google Fonts (linea 9-11):

```html
<link href="https://fonts.googleapis.com/css2?family=FONT_NAME:wght@400;500;600;700&display=swap" rel="stylesheet">
```

E aggiorna le famiglie font in `css/variables.css` (linee 30-31):

```css
--font-family-base: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-family-heading: 'Arial', sans-serif;
```

### 4. Personalizzare Header/Footer

**File**: `css/layout.css`

- Logo size: `.logo { font-size: 1.5rem; }`
- Link size: `.nav-link { font-size: 0.875rem; }`
- Padding: `.header-inner { padding: 3.5rem 0; }`

### 5. Cambiare Border Radius

```css
:root {
  --radius: 0.75rem;  /* Aumenta a 1.25rem per angoli più soft */
}
```

---

## Guida Implementazioni Comuni

### Aggiungere una Nuova Skill

In `index.html` (skills grid), aggiungi:

```html
<div class="skill-card">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/LINGUAGGIO/LINGUAGGIO-original.svg" alt="Nome" width="48" height="48">
  <span>Nome Linguaggio</span>
</div>
```

Sostituisci `LINGUAGGIO` con nome vero (es: `javascript`, `rust`, `golang`).

Icone disponibili su: https://devicons.dev

### Aggiungere una Nuova Pagina

1. Crea `nomepagina.html` copiando struttura da `index.html`
2. Aggiungi link in header (sia desktop che mobile):
```html
<a href="nomepagina.html" class="nav-link">Nome Pagina</a>
```

### Modificare Menu Navigazione

Edita ENTRAMBI i menu (desktop + mobile):

**Desktop** (linea 16-29):
```html
<nav class="nav-desktop">
  <a href="index.html" class="nav-link active">Home</a>
  <a href="curriculum.html" class="nav-link">Curriculum</a>
  <a href="presentazione.html" class="nav-link">Chi Sono</a>
</nav>
```

**Mobile** (linea 40-45):
```html
<div class="container">
  <a href="index.html" class="nav-link">Home</a>
  <a href="curriculum.html" class="nav-link">Curriculum</a>
  <a href="presentazione.html" class="nav-link">Chi Sono</a>
</div>
```

### Aggiungere Activity Card

```html
<div class="activity-card">
  <div class="activity-card__image" style="background: linear-gradient(135deg, hsl(50, 95%, 50%) 0%, hsl(40, 95%, 55%) 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 60px;">🎨</div>
  <div class="activity-card__content">
    <h3 class="activity-card__title">Titolo</h3>
    <p class="activity-card__description">Descrizione...</p>
  </div>
</div>
```

---

## Guida Deploy

### Opzione 1: GitHub Pages (Consigliato)

1. Vai a **Settings → Pages**
2. Source: "Deploy from a branch"
3. Branch: `main` | Folder: `/portfolio`
4. Aspetta 5-10 minuti
5. URL: `https://username.github.io/corso-fe-start2Impact/portfolio/`

### Opzione 2: Netlify

1. Vai a https://netlify.com
2. **New site from Git** → Seleziona repo
3. Publish directory: `portfolio`
4. URL: `https://xxxxx.netlify.app`

### Opzione 3: Vercel

1. Vai a https://vercel.com
2. **Import Project** → Seleziona repo
3. Root Directory: `portfolio`
4. URL: `https://portfolio-xxxxx.vercel.app`

---

## Variabili CSS Disponibili

### Colori Moderni (ESA + HSL)

> **Nota**: Le variabili sono definite in due file:
> - `variables.css` con esadecimali (#2563eb) per colori base
> - `style.css` con HSL per colori tema principale

**Colori Primari** (in style.css)

| Variabile | Valore | Uso |
|-----------|--------|-----|
| `--primary` | `hsl(205, 85%, 50%)` | Blu principale |
| `--accent` | `hsl(35, 95%, 55%)` | Arancio accento |
| `--background` | `hsl(210, 20%, 98%)` | Sfondo pagina |
| `--foreground` | `hsl(220, 25%, 10%)` | Testo principale |
| `--header` | `hsl(220, 20%, 6%)` | Sfondo header/footer |
| `--border` | `hsl(210, 15%, 88%)` | Colore bordi |
| `--radius` | `0.75rem` | Border radius |

**Colori Base** (in variables.css)

| Variabile | Valore | Uso |
|-----------|--------|-----|
| `--color-primary-blue` | `#2563eb` | Blu base |
| `--color-accent-yellow` | `#f59e0b` | Arancio soft |
| `--color-dark` | `#1f2937` | Nero soft |
| `--color-text` | `#1f2937` | Testo principale |
| `--color-text-light` | `#6b7280` | Testo secondario |

### Spacing Standard (variables.css)

- `--spacing-xs: 0.25rem` = 4px
- `--spacing-sm: 0.5rem` = 8px
- `--spacing-md: 1rem` = 16px
- `--spacing-lg: 1.5rem` = 24px
- `--spacing-xl: 2rem` = 32px

### Font Sizes (variables.css)

- `--font-size-xs: 0.75rem` = 12px
- `--font-size-sm: 0.875rem` = 14px
- `--font-size-base: 1rem` = 16px
- `--font-size-lg: 1.125rem` = 18px
- `--font-size-xl: 1.5rem` = 24px
- `--font-size-2xl: 2rem` = 32px
- `--font-size-3xl: 2.5rem` = 40px

---

## Tips & Best Practices

✅ **Mantieni consistenza**: Usa le variabili, non colori hardcoded
✅ **Mobile first**: Scrivi CSS mobile prima, poi @media per desktop
✅ **Cache**: Hard refresh (Ctrl+Shift+R) dopo CSS changes
✅ **Icon CDN**: Must exist su Devicons per caricare
✅ **Menu sync**: Cambia link su ENTRAMBI i menu (desktop + mobile)

---

## Troubleshooting

| Problema | Soluzione |
|----------|-----------|
| Colori non cambiano | Hard refresh (Ctrl+Shift+R) |
| Icons non caricano | Verifica URL CDN e nome linguaggio |
| Header scompare | Check `.hamburger { z-index: 41; }` |
| Menu scrollabile | Rimuovi `overflow-y: auto` da `.nav-mobile` |

---

**Versione**: 2.0 - Refactored
**Ultima modifica**: 1 Marzo 2026
**Cambiamenti**: CSS modulare (5 file), JS separato, variabili CSS migliorate
