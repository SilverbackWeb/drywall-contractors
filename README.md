# Contractor Template

A beautiful, animated contractor landing page template with configuration-driven content and scroll animations. Perfect for quickly creating professional websites for any type of contractor business.

## Features

- ✨ **Smooth Scroll Animations** - Cards slide in, fade effects, and hover animations
- 🎨 **Theme System** - Easily customize colors via configuration
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Fast & Light** - Vanilla JavaScript, no build process required
- 🔧 **Config-Driven** - Change everything via `site-config.json`
- 🖼️ **Image Ready** - Pre-configured Unsplash images
- 📝 **SEO Optimized** - Dynamic meta tags and structured data ready
- 🎯 **Conversion Focused** - Hero, services, gallery, testimonials, and contact sections

## What You Get

```
contractor-template/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # Complete responsive styling with animations
├── js/
│   └── main.js         # Config loader and animation system
├── site-config.json    # Single configuration file for all content
└── README.md
```

## Quick Start

### 1. Edit Configuration

All content is controlled by `site-config.json`. Simply update the business information:

```json
{
  "business": {
    "name": "Your Contractor Name",
    "phone": "(555) 123-4567",
    "email": "info@yourcompany.com",
    "address": "123 Main Street",
    "city": "Your City",
    "state": "ST",
    "zip": "12345"
  },
  "theme": {
    "primaryColor": "#059669",
    "secondaryColor": "#064e3b",
    "accentColor": "#f59e0b"
  }
}
```

### 2. Customize Services

Add your services in the `services` array:

```json
"services": [
  {
    "title": "Service Name",
    "description": "Service description here",
    "icon": "hammer"
  }
]
```

Available icons: `hammer`, `wrench`, `drill`, `cog`, `paint`, `shovel`, `truck`, `bolt`

### 3. Add Gallery Images

Replace image URLs in the `gallery` section:

```json
"gallery": {
  "images": [
    { "src": "https://...", "alt": "Project description" }
  ]
}
```

## Animations Included

- **Fade In Up** - Elements slide up and fade in as user scrolls
- **Fade In Left/Right** - Content slides from sides
- **Hover Effects** - Cards lift and glow on hover
- **Icon Rotation** - Service icons rotate 360° on hover
- **Scale Animations** - Images zoom on hover
- **Staggered Animations** - Multiple cards animate one after another
- **Shine Effect** - Light sweep across cards on hover

## Image System

All images are loaded via URLs in `site-config.json`. The template comes pre-configured with Unsplash stock photos.

### Image Structure in Config

```json
"hero": {
    "backgroundImage": "https://images.unsplash.com/photo-xxxxx?w=1920&h=1080&fit=crop&q=80"
},
"about": {
    "image": "https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop&q=80"
},
"gallery": {
    "images": [
        { "src": "https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop&q=80", "alt": "..." }
    ]
}
```

### Best Practices for Image URLs

1. **Use Unsplash for quick setup:**
   - Visit [unsplash.com](https://unsplash.com)
   - Search for relevant terms (e.g., "construction", "home renovation", "contractors")
   - Copy the photo ID from the URL
   - Format: `https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop&q=80`

2. **Image Dimensions:**
   - **Hero:** 1920×1080 (wide banner)
   - **About:** 800×600 (landscape)
   - **Gallery:** 800×600 (consistent aspect ratio)

3. **To use client's real photos:**
   - Create `assets/images/` folder
   - Upload photos there
   - Replace URLs with local paths: `assets/images/hero.jpg`

## Configuration Guide

### Business Info
```json
"business": {
    "name": "Your Company",
    "tagline": "Your tagline",
    "phone": "(555) 123-4567",
    "email": "info@company.com",
    "address": "123 Main St",
    "city": "City Name",
    "state": "ST",
    "zip": "12345"
}
```

### Theme Colors
```json
"theme": {
    "mode": "light",
    "primaryColor": "#059669",
    "secondaryColor": "#064e3b",
    "accentColor": "#f59e0b"
}
```

### Hero Section
```json
"hero": {
    "label": "Professional Services",
    "headline": "Your main headline",
    "subheadline": "Your subheadline",
    "ctaText": "Button text",
    "ctaPhone": true,
    "backgroundImage": "url..."
}
```

### Services Array
```json
"services": [
    {
        "title": "Service Name",
        "description": "Service description",
        "icon": "hammer"
    }
]
```

### About Section
```json
"about": {
    "headline": "Why Choose Us",
    "description": "Company description",
    "image": "url...",
    "features": ["Feature 1", "Feature 2", ...]
}
```

### Reviews
```json
"reviews": [
    {
        "quote": "Customer testimonial",
        "name": "Customer Name",
        "location": "City, State",
        "rating": 5
    }
]
```

### Process Steps
```json
"process": [
    {
        "title": "Step Name",
        "description": "Step description"
    }
]
```

### Contact Section
```json
"contact": {
    "headline": "Get Your Quote",
    "subheadline": "Contact us today"
}
```

## SEO Configuration

```json
"seo": {
    "title": "Page Title | Keywords",
    "description": "Meta description (155-160 chars)",
    "keywords": "keyword1, keyword2, keyword3"
}
```

## Local Testing

1. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```

2. Visit `http://localhost:8000` in your browser

3. Changes to `site-config.json` will reflect immediately on refresh

## Customization

### Changing Colors

Edit the `theme` section in `site-config.json`:

```json
"theme": {
    "primaryColor": "#2563eb",      // Change primary color
    "secondaryColor": "#1e3a5f",    // Change secondary color
    "accentColor": "#f59e0b"        // Change accent color
}
```

### Changing Fonts

Edit the Google Fonts link in `index.html` and update `--font-body` and `--font-heading` in `styles.css`.

### Layout Changes

For structural changes, edit `index.html` and `styles.css`.

## Complete Workflow: Creating a New Client Site

### Step 1: Copy Template

```bash
cp -r contractor-template [client-name]-contractors
cd [client-name]-contractors
```

### Step 2: Update Configuration

Edit `site-config.json` with:
- Business name, phone, email, address
- Brand colors (primary, secondary, accent)
- Services offered
- Company description
- Photos and gallery images
- Testimonials
- Process steps

### Step 3: Create Logo

Update the `logo.path` with an SVG or image URL:

```json
"logo": {
    "path": "data:image/svg+xml,%3Csvg...",
    "alt": "Company Logo"
}
```

### Step 4: Find Unsplash Images

1. Visit unsplash.com
2. Search for relevant terms ("construction", "contractors", "home renovation", etc.)
3. Copy photo IDs and format URLs
4. Update image URLs in config

### Step 5: Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: [Client Name] Contractors"
git remote add origin git@github.com:yourname/[client-name]-contractors.git
git push -u origin master
```

### Step 6: Deploy to Vercel

1. Connect GitHub repo to Vercel
2. Deploy automatically
3. Get live URL

## Complete Site Example

A fully configured template will have:
- ✅ Business name, phone, email, address
- ✅ Brand colors (primary, secondary, accent)
- ✅ Logo
- ✅ Hero image (full-width background)
- ✅ About section image
- ✅ 6 gallery images (recent work examples)
- ✅ Service list (customized)
- ✅ Testimonials (3+ reviews)
- ✅ Process steps (4 steps)
- ✅ Contact form (ready for JotForm)
- ✅ SEO optimized

## Troubleshooting

### Images Not Loading

- Ensure you're using a local web server (not `file://`)
- Check that image URLs are valid (test in browser)
- Verify CORS headers if using external CDN

### Animations Not Playing

- Check browser console for JavaScript errors
- Ensure `main.js` is loading correctly
- Verify CSS file is loaded

### Colors Not Updating

- Check `site-config.json` for valid hex color values
- Clear browser cache and refresh
- Verify CSS variables are set correctly

## License

Free to use for client projects.
