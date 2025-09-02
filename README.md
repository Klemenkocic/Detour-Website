# Detour - Your Next Trip, Planned in Minutes

A modern, responsive travel planning website built with Next.js that helps users plan epic road trips with smart stops, visual inspiration, and effortless editing.

## 🚀 Features

- **Interactive Trip Planning**: Point on the map and set your pace
- **Smart Stop Suggestions**: Automatically find hidden gems and scenic routes
- **2D & 3D Maps**: Visualize your journey in multiple dimensions
- **Local Experience Focus**: Travel like a local, not a tourist
- **Responsive Design**: Optimized for all devices
- **Google Analytics Integration**: Track user engagement and conversions

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.32
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages (via GitHub Actions)
- **Analytics**: Google Analytics (gtag.js)

## 📱 Pages & Components

- **Homepage**: Hero section, features showcase, trip planning process
- **Contact**: Get in touch with the Detour team
- **Documentation**: Learn how to use Detour (coming soon)
- **Quiz**: Interactive travel style assessment
- **Tally Form**: Early access signup integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Klemenkocic/Detour-Website.git
cd Detour-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: `#FF5C29` (Orange)
- **Gray Scale**: From `#E4E5E7` to `#181D27`
- **Accent Colors**: Sky blue, lavender, mint green

### Typography
- **Primary Font**: Inter (Sans-serif)
- **Display Font**: Covered By Your Grace (Cursive)

### Components
- Responsive navigation with mobile menu
- Animated CTA buttons with hover effects
- Card-based feature showcases
- Smooth scroll animations and micro-interactions

## 📊 Analytics

The website includes Google Analytics tracking via gtag.js with the tracking ID `G-Q1H4YCWP11`. This provides insights into:

- Page views and user behavior
- Traffic sources and conversions
- User engagement metrics

## 🚀 Deployment

### Automatic Deployment

The website automatically deploys to GitHub Pages when code is pushed to the `main` branch via GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files are generated in the `out/` directory

3. Deploy the `out/` directory to your hosting provider

## 🔧 Configuration

### Environment Variables

No environment variables are currently required for basic functionality.

### Customization

- **Colors**: Modify `tailwind.config.ts` for brand color changes
- **Content**: Update component files in the `components/` directory
- **Analytics**: Change tracking ID in `app/layout.tsx`

## 📁 Project Structure

```
detour-website/
├── app/                    # Next.js app directory
│   ├── (legal)/           # Legal pages (cookies, privacy)
│   ├── contact/           # Contact page
│   ├── docs/              # Documentation page
│   ├── quiz/              # Travel quiz page
│   ├── tally/             # Tally form integration
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with Google Analytics
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation component
│   └── ...                # Other page components
├── hooks/                  # Custom React hooks
├── public/                 # Static assets
│   └── detour/            # Brand assets and images
├── .github/workflows/      # GitHub Actions
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

- **Email**: klemen@mydetour.co
- **Website**: [mydetour.co](https://mydetour.co)

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons and animations powered by Framer Motion
- Form integration via Tally.so
- Hosting and CI/CD via GitHub
