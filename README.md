# Anfa Clinic - Medical Website Clone

A pixel-perfect React + Tailwind CSS clone of mds.uz redesigned for "Anfa Clinic" - a modern, responsive medical clinic website.

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v3** - Utility-first CSS framework
- **React Router v6** - Multi-page routing
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── TopBar.jsx          # Top bar with email and social icons
│   ├── Header.jsx          # Sticky header with navigation & mobile menu
│   ├── Hero.jsx            # Hero section with CTA and image grid
│   ├── Services.jsx        # 8 service cards grid
│   ├── Checkup.jsx         # 4 health checkup packages
│   ├── Reviews.jsx         # Patient reviews section
│   ├── CTABanner.jsx       # Call-to-action banner
│   ├── About.jsx           # About clinic section
│   ├── InstagramFeed.jsx   # Instagram feed grid
│   └── Footer.jsx          # Footer with columns and scroll-to-top
├── pages/
│   └── Home.jsx            # Homepage that assembles all components
├── App.jsx                 # Router and main app wrapper
├── main.jsx                # Vite entry point
└── index.css               # Global styles and Tailwind imports

```

## 🎨 Design System

### Colors
- **Primary**: `#1a3c6e` (Dark Navy Blue)
- **Accent**: `#2563eb` (Blue - buttons)
- **Light Background**: `#f8fafc` (Light Gray)
- **Dark Text**: `#1e293b`
- **Muted Text**: `#64748b`

### Typography
- **Font**: Inter (Google Fonts)
- **Font Sizes**: Responsive scaling on mobile/desktop

### Components
- **Card Border Radius**: 12px
- **Button Border Radius**: 8px
- **Shadows**: Shadow-sm on cards, shadow-md on header

## 🖥️ Features

### 1. **Top Bar**
- Contact email and social media links
- Dark navy background with white text

### 2. **Sticky Header**
- Logo with medical cross icon
- Navigation menu with Services dropdown
- Contact info and "Записаться" (Book) button
- Mobile hamburger menu with slide-in drawer
- Sticky on scroll with shadow effect

### 3. **Hero Section**
- Large heading with tagline
- Left: Text content with CTA buttons
- Right: 2x2 clickable image grid (colored placeholders)
- Min height: 90vh

### 4. **Services Section**
- 4x2 grid of service cards (8 total)
- Icons from Lucide React
- Hover effect with blue border
- Quick action buttons (FAQ, Contacts, Book)
- "All services" button

### 5. **Checkup Section**
- 4 colored cards for different health packages
- "для мужчин", "для женщин", "для детей", "профильные"
- "Купить" links and "All checkups" button

### 6. **Reviews Section**
- 4.5/5 star rating badge
- 3 review cards with avatar, name, source, text, and stars
- Responsive layout (single column on mobile)

### 7. **CTA Banner**
- Dark blue background with decorative SVG pattern
- 10% discount offer text
- Large white "Записаться" button

### 8. **About Section**
- Clinic description paragraph
- 3 feature items with checkmarks
- 3 value cards (Quality, Innovation, Responsibility)
- "Learn more" link

### 9. **Instagram Feed**
- 6 square placeholder tiles
- Social media icons below

### 10. **Footer**
- Logo, tagline, and ISO badges
- 4 columns of links:
  - Main: About, Career, Doctors, Blog, FAQ, etc.
  - Services: Various medical departments
  - Useful: Privacy policy, Terms, Cookies
  - Payment: Visa, Uzcard, Humo
- Copyright bottom bar
- Floating scroll-to-top button (bottom right)

## 📱 Responsive Design

All components are fully responsive:
- **Desktop**: Full 4-column grids, horizontal layouts
- **Tablet**: 2-column grids, adjusted spacing
- **Mobile**: 1-column stack, hamburger menu, optimized touch targets

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration Files

- **`vite.config.js`** - Vite configuration with React plugin
- **`tailwind.config.js`** - Tailwind CSS customization with brand colors
- **`postcss.config.js`** - PostCSS configuration for Tailwind
- **`package.json`** - Project dependencies and scripts
- **`index.html`** - HTML entry point for Vite

## 🎯 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#1a3c6e',      // Change primary color
      'accent': '#2563eb',       // Change accent color
      // ...
    }
  }
}
```

### Adding Pages
1. Create new file in `src/pages/`
2. Add route in `src/App.jsx`
3. Import and add to Routes

### Modifying/Adding Components
1. Create new component file in `src/components/`
2. Import and use in pages or other components
3. Use Tailwind classes for styling

## 📝 Text & Language

All text is in Russian (Русский язык). To modify text, edit the component JSX files directly.

## 🎭 Interactive Elements

- **Hover states** on all buttons, links, and cards
- **Smooth scroll behavior** on page
- **Mobile hamburger menu** with smooth animation
- **Sticky header** that responds to scroll
- **Scroll-to-top button** fixed in bottom right

## 📦 Build Output

Production files are generated in the `dist/` folder:
```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-*.css    # Minified CSS
│   └── index-*.js     # Minified JavaScript
```

## 🔍 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## 💡 Notes

- All images are placeholder colored divs for easy customization
- Icons from Lucide React can be replaced with actual images
- All content text is in Russian (Russian language support)
- No TypeScript - pure JavaScript + JSX
- Smooth animations and transitions throughout

## 📄 License

This project is a template for Anfa Clinic medical website.
