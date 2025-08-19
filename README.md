# SQL Events Nigeria - Modern Event Management Website

A sophisticated, GSAP-powered website with dual light/dark themes, smooth animations, and modern design inspired by premium brands like GSAP and Motto.

## ✨ Features

### 🎨 **Dual Theme System**

- **Light Theme**: Clean, professional white background with dark text
- **Dark Theme**: Sophisticated dark background with light text
- **Smooth Transitions**: Seamless theme switching with CSS transitions
- **Persistent Storage**: Remembers user's theme preference

### 🚀 **Advanced Animations**

- **GSAP Integration**: Professional-grade animations and interactions
- **Smooth Scrolling**: Lenis-powered smooth scrolling experience
- **Scroll Triggers**: Animations triggered by scroll position
- **Micro-interactions**: Hover effects, parallax, and more

### 🎯 **Modern Design**

- **Baskerville Typography**: Elegant serif fonts for headings
- **Responsive Layout**: Mobile-first design approach
- **Professional UI**: Clean, minimalist aesthetic
- **Interactive Elements**: Hover effects and smooth transitions

## 🛠️ Tech Stack

### **Core Technologies**

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### **Animation & Interaction**

- **GSAP (GreenSock)** - Professional animation library
- **Framer Motion** - React animation library
- **Lenis** - Smooth scrolling library
- **Three.js** - 3D graphics support

### **UI Components**

- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons
- **Lucide React** - Modern icon library

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn

### **Installation**

```bash
# Clone the repository
git clone [your-repo-url]
cd sql-events

# Install dependencies
npm install

# Run development server
npm run dev
```

### **Environment Setup**

```bash
# Create environment file
cp .env.example .env.local

# Add your configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🎨 Theme System

### **Theme Toggle**

The website includes a beautiful theme toggle button that:

- Switches between light and dark themes
- Saves preference to localStorage
- Provides smooth transitions
- Includes hover animations

### **CSS Variables**

Both themes use CSS custom properties for consistent styling:

```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --primary: #3b82f6;
  /* ... more variables */
}

.dark {
  --background: #020617;
  --foreground: #f8fafc;
  /* ... dark theme variables */
}
```

## 🎬 Animation System

### **GSAP Animations**

- **Hero Animations**: Smooth text reveals and transitions
- **Scroll Triggers**: Animations based on scroll position
- **Parallax Effects**: Depth and movement on scroll
- **Hover Interactions**: Micro-animations on user interaction

### **Animation Functions**

```typescript
import { heroAnimations, textReveal, cardAnimations } from "@/lib/animations";

// Use in components
useEffect(() => {
  heroAnimations();
  textReveal(".text-element");
  cardAnimations();
}, []);
```

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### **Mobile-First Approach**

- Responsive navigation with mobile menu
- Optimized touch interactions
- Adaptive layouts for all screen sizes

## 🎯 Customization

### **Colors**

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ },
  brand: { /* your brand colors */ }
}
```

### **Typography**

Modify fonts in the same config file:

```typescript
fontFamily: {
  display: ['Your Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif']
}
```

### **Animations**

Customize animations in `src/lib/animations.ts`:

```typescript
export const customAnimation = () => {
  gsap.to(".element", {
    // your animation properties
  });
};
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navigation.tsx   # Main navigation
│   │   └── ThemeToggle.tsx  # Theme switcher
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── lib/                 # Utility libraries
│   │   └── animations.ts    # GSAP animations
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
npm start
```

### **Environment Variables**

Ensure these are set in production:

- `NEXT_PUBLIC_SITE_URL` - Your domain
- `NODE_ENV` - Set to 'production'

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎨 Design Inspiration

- **GSAP Website**: Animation techniques and interaction design
- **Motto Website**: Clean typography and layout principles
- **Modern Web Standards**: Accessibility and performance best practices

---

**Built with ❤️ for SQL Events Nigeria**
