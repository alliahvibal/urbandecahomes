# Urban Deca Homes - Assets Organization

This directory contains static assets for the Urban Deca Homes React website, organized by category for better maintainability.

## 📁 Directory Structure

```
public/assets/
├── logos/              # Company logos and branding
├── carousel/           # Homepage carousel/slider images
├── projects/           # Project-specific images
│   ├── ortigas/        # Ortigas project images
│   ├── cubao/          # Cubao project images
│   ├── litex/          # Litex project images
│   └── manila/         # Manila project images
└── gallery/            # Model units and gallery images
```

## 🖼️ Image Categories & Usage

### Logos (`/assets/logos/`)

- `logo.png` - Main company logo (used in navbar)
- `logo-white.png` - White version for dark backgrounds
- `logo-colored.png` - Colored version
- `deca-titles.png` - Developer title/branding image

**Usage in components:**

```jsx
<img src="/assets/logos/logo.png" alt="Urban Deca Homes" />
```

### Carousel Images (`/assets/carousel/`)

- `slide-1.jpg` - First carousel slide
- `slide-2.jpg` - Second carousel slide
- `slide-3.jpg` - Third carousel slide
- `hero-bg.jpg` - Additional hero background

**Usage in components:**

```jsx
<img src="/assets/carousel/slide-1.jpg" alt="Urban Deca Homes" />
```

### Project Images (`/assets/projects/`)

#### General Project Images

- `ortigas-site-wide.png` - Ortigas project overview
- `cubao-site.jpg` - Cubao project overview
- `litex-site.png` - Litex project overview
- `manila-site.webp` - Manila project overview

#### Project-Specific Folders

Each project has its own subfolder:

- `ortigas/` - Ortigas-specific images (maps, floor plans, etc.)
- `cubao/` - Cubao-specific images
- `litex/` - Litex-specific images
- `manila/` - Manila-specific images

**Usage in components:**

```jsx
<img src="/assets/projects/ortigas-site-wide.png" alt="Ortigas Project" />
<img src="/assets/projects/ortigas/floor-plan.jpg" alt="Ortigas Floor Plan" />
```

### Gallery Images (`/assets/gallery/`)

- `model-unit1.jpg` through `model-unit6.jpg` - Model unit photos
- `kitchen-1.jpg`, `kitchen-2.jpg`, etc. - Kitchen photos
- `living-area-1.jpg`, etc. - Living area photos
- `perspective1.jpg` through `perspective11.jpg` - Architectural perspectives

**Usage in components:**

```jsx
<img src="/assets/gallery/model-unit-1.jpg" alt="Model Unit" />
```

## 🔧 Migration from Old Structure

If you have images in the old `/assets/` directory, move them to the appropriate new locations:

- `/assets/logo.png` → `/assets/logos/logo.png`
- `/assets/slide-img1.jpg` → `/assets/carousel/slide-1.jpg`
- `/assets/ortigas-site-wide.png` → `/assets/projects/ortigas-site-wide.png`
- etc.

## 📝 Component Updates Needed

After moving images, update the image paths in these components:

- `src/components/Navbar.jsx` - Update logo path
- `src/pages/Home.jsx` - Update carousel image paths
- `src/pages/Projects.jsx` - Update project image paths
- `src/pages/About.jsx` - Update company/developer images
- `src/pages/DecaOrtigas.jsx` - Update Ortigas-specific images
- Other project pages as needed

## 🎯 Best Practices

1. **Consistent Naming**: Use lowercase with hyphens (e.g., `model-unit-1.jpg`)
2. **Optimized Images**: Compress images for web use
3. **Alt Text**: Always provide descriptive alt text
4. **Responsive**: Consider providing multiple sizes for responsive design
5. **File Formats**:
   - `.jpg` for photos
   - `.png` for logos/graphics with transparency
   - `.webp` for better compression (with fallbacks)

## 📊 Recommended Image Sizes

- **Logos**: 200x60px (2x for retina: 400x120px)
- **Carousel**: 1920x800px
- **Project Cards**: 600x400px
- **Gallery Thumbnails**: 300x200px
- **Full Gallery**: 1200x800px
