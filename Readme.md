# Eclypse E-commerce

A modern, minimalist e-commerce platform for luxury fashion, built with React, TypeScript, and Node.js. Features a clean design aesthetic focused on quiet luxury and premium user experience.

## 🌟 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite for fast development
- **Responsive Design**: Built with Tailwind CSS for mobile-first approach
- **Premium UI/UX**: Dark theme with sophisticated design elements
- **Shopping Cart**: Full cart functionality with checkout process
- **Dynamic Content**: Image gallery powered by backend API
- **Form Handling**: Complete shipping address form with validation
- **Interactive Elements**: Smooth transitions and hover effects

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
eclypse-ecommerce/
├── frontend/
│   src/
├── types/
│   └── index.ts          # All TypeScript interfaces
├── utils/
│   └── calculations.ts   # Business logic for calculations
├── services/
│   └── imageService.ts   # API calls and external services
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ImageGrid.tsx
│   ├── ProductSection.tsx
│   ├── CustomerReview.tsx
│   ├── Footer.tsx
│   ├── ShippingForm.tsx
│   └── OrderSummary.tsx
├── pages/               # Main page components
│   ├── HomePage.tsx
│   └── CheckoutPage.tsx
└── App.tsx             # Main app component (simplified)
├── backend/
│   ├── server.js
│   ├── package.json
│   └── public/
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eclypse-ecommerce
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Development

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📦 Dependencies

### Frontend Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "lucide-react": "^0.263.1"
}
```

### Frontend Dev Dependencies
```json
{
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "@vitejs/plugin-react": "^4.0.0",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24",
  "tailwindcss": "^3.3.0",
  "typescript": "^5.0.0",
  "vite": "^4.4.0"
}
```

### Backend Dependencies
```json
{
  "express": "^4.18.0",
  "cors": "^2.8.5"
}
```

### Backend Dev Dependencies
```json
{
  "nodemon": "^3.0.0"
}
```

## 🎨 Key Components

### Frontend Components
- **EclypseEcommerce** - Main application component
- **Header** - Navigation and branding
- **HomePage** - Product showcase and hero section
- **CheckoutPage** - Shopping cart and shipping form

### Backend API Endpoints
- `GET /api/images` - Retrieve product images
- `GET /api/health` - Server health check

## 🎯 Features Overview

### Homepage
- Hero section with brand messaging
- Dynamic image gallery
- Product showcase with size selection
- Customer testimonials
- Footer with contact information

### Checkout Page
- Shipping address form
- Order summary with tax calculation
- Responsive form layout
- Price calculations (subtotal, shipping, tax)

## 🔧 Configuration

### Vite Configuration
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
```

### Tailwind Configuration
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Red/Vermilion for highlights
- **Text**: Gray variations for hierarchy

### Typography
- Clean, modern fonts
- Light font weights for elegance
- Proper spacing and hierarchy

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Touch-friendly interactions

## 🚀 Deployment

### Frontend Build
```bash
cd frontend
npm run build
```

### Backend Production
```bash
cd backend
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: eclypse@gmail.com
- **Phone**: +91 123-456-7890

## 🔗 Links

- [Live Demo](#) - Add your deployment URL
- [Design System](#) - Add design documentation
- [API Documentation](#) - Add API docs

---

**Eclypse® 2025** - Quiet luxury, designed to speak softly.