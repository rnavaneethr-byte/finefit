# FineFit - Luxury Bespoke Tailoring Website

A modern, elegant website for FineFit (formerly Chandra Textiles), a luxury bespoke tailoring brand. Built with Next.js, TypeScript, and Tailwind CSS, featuring a sophisticated design inspired by Huntsman Savile Row.

## Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive and mobile-friendly
- **Elegant UI**: Sophisticated design with serif fonts, large hero images, and luxury aesthetic
- **Complete Pages**:
  - Home - Hero, services preview, process overview
  - About - Brand story, values, team
  - Services - Detailed service listings
  - Gallery - Portfolio of work
  - Contact - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd c:\projects\finefit
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
finefit/
├── app/
│   ├── about/
│   ├── services/
│   ├── gallery/
│   ├── contact/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── public/
└── [config files]
```

## Design Guidelines

- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Colors**: 
  - Primary: #1a1a1a (dark)
  - Gold: #c9a961 (accent)
- **Style**: Minimalist, elegant, luxury-focused

## Customization

### Images
Replace placeholder images from Unsplash with actual brand images. Update image URLs in:
- `app/page.tsx`
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/gallery/page.tsx`
- `app/contact/page.tsx`

### Contact Information
Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Brand Content
Customize text content throughout the pages to match your brand story and messaging.

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://react.dev/) - UI library

## License

Private - All rights reserved

## Contact

For questions or support, contact: info@finefit.com
