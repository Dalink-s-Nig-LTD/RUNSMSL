# RUNSMSL - Cooperative Society Management Platform

A comprehensive web-based management platform for **RUN Cooperative Society** (Run Staff Cooperative Multipurpose Society Limited), built with modern web technologies for handling loans, member management, and cooperative operations.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Application Routes](#application-routes)
- [Components](#components)
- [Development](#development)
- [Build & Deployment](#build--deployment)

## 🎯 Overview

RUNSMSL is a full-featured cooperative society management system designed to streamline operations for member loan applications, loan management, member tracking, product management, and administrative oversight. The platform provides role-based access with distinct interfaces for administrators, officers, and members.

## ✨ Features

### Admin Portal
- **Dashboard Analytics**: View platform-wide statistics including pending requests, active loans, member count, and outstanding balances
- **Member Management**: Browse, search, and manage cooperative members
- **Loan Management**: Review, approve, or reject loan applications with detailed tracking
- **Application Processing**: Handle new member applications with approval workflows
- **Financial Settings**: Configure interest rates, processing fees, and other financial parameters
- **Audit Trail**: Track all administrative actions and changes
- **Broadcast**: Send announcements and communications to members
- **Product Management**: Manage products available in the cooperative shop
- **Reports**: Generate and export data in CSV format
- **Monthly Disbursement Tracking**: Monitor loan disbursement schedules

### Member Portal
- **Loan Applications**: Submit and track loan applications with status updates
- **Loan History**: View all personal loans, repayment schedules, and balances
- **Shop Access**: Browse and view cooperative products
- **Savings Tracking**: Monitor personal savings balance
- **Profile Management**: View and manage personal information
- **Pending Approval Status**: Check application approval status

### Officer Portal
- Quick access to pending loan reviews and approvals
- Dashboard overview of cooperative metrics

### Public Features
- **Landing Page**: Information about the cooperative society
- **Privacy Policy**: Terms and conditions
- **Cookie Consent**: GDPR-compliant cookie notification
- **Sitemap**: SEO-friendly sitemap generation

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **TypeScript 5.8** - Type-safe JavaScript
- **Vite 7.3.1** - Fast build tool and dev server
- **TanStack Router 1.168.0** - Type-safe routing
- **TanStack React Query 5.83.0** - Server state management
- **TanStack React Start 1.167.14** - Meta-framework

### UI & Styling
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
  - Dialog, Select, Dropdown, Popover, Tooltip, Accordion, etc.
- **Lucide React 0.575.0** - Icon library
- **shadcn/ui** - Pre-built component system

### Forms & Data
- **React Hook Form 7.71.2** - Efficient form management
- **Zod 3.24.2** - Schema validation
- **@hookform/resolvers** - Form validation resolvers
- **input-otp 1.4.2** - OTP input component

### Visualization & Utils
- **Recharts 2.15.4** - React charting library
- **date-fns 4.1.0** - Date manipulation
- **react-day-picker 9.14.0** - Date picker
- **Embla Carousel 8.6.0** - Carousel component
- **react-resizable-panels 4.6.5** - Resizable UI panels
- **Sonner 2.0.7** - Toast notifications
- **cmdk 1.1.1** - Command palette

### Build & Deployment
- **Cloudflare** - Deployment via Wrangler
- **Vercel** - Alternative deployment target
- **ESLint 9.32.0** - Code linting
- **Prettier 3.7.3** - Code formatting
- **Bun** - Package manager (alternative to npm)

## 📁 Project Structure

```
runlms/
├── src/
│   ├── routes/                 # Route definitions (TanStack Router)
│   │   ├── __root.tsx         # Root layout
│   │   ├── index.tsx          # Landing page
│   │   ├── login.tsx          # Authentication
│   │   ├── admin/             # Admin dashboard routes
│   │   ├── member/            # Member portal routes
│   │   ├── officer/           # Officer portal routes
│   │   └── ...                # Other routes
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── landing/           # Landing page components
│   │   ├── PortalLayout.tsx   # Shared portal layout
│   │   └── CookieConsent.tsx  # Cookie banner
│   ├── data/
│   │   ├── mockData.ts        # Mock data for testing/demo
│   │   └── landingData.ts     # Landing page content
│   ├── hooks/                 # Custom React hooks
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── assets/                # Static assets (images, fonts)
│   ├── styles.css             # Global styles
│   ├── router.tsx             # Router configuration
│   └── routeTree.gen.ts       # Auto-generated route tree
├── public/                    # Static public files
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── wrangler.jsonc             # Cloudflare configuration
├── vercel.json                # Vercel configuration
├── eslint.config.js           # ESLint rules
├── .prettierrc                # Prettier configuration
└── bun.lockb                  # Bun lock file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository** 
   ```bash
   git init
   git branch -m main
   git pull origin main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with Bun
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server

# Production
npm run build            # Build for production
npm run build:dev        # Build in development mode
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format code with Prettier

# Package Managers
npm install             # Install with npm
bun install            # Install with Bun
```

## 🗺️ Application Routes

### Public Routes
- `/` - Landing page
- `/login` - User authentication
- `/privacy` - Privacy policy
- `/cookies` - Cookie policy
- `/sitemap.xml` - SEO sitemap

### Admin Routes
- `/admin` - Dashboard and overview
- `/admin/members` - Member management
- `/admin/loans` - Loan management and approvals
- `/admin/applications` - Application processing
- `/admin/products` - Product management
- `/admin/audit` - Audit trail
- `/admin/broadcast` - Send communications
- `/pending-approval` - Approval queue

### Member Routes
- `/member` - Member dashboard
- `/member/loans` - Loan listings
- `/member/loans/:id` - Loan details
- `/member/apply-loan` - Loan application form
- `/member/shop` - Product shop
- `/member/shop/:id` - Product details

### Officer Routes
- `/officer` - Officer dashboard

## 🧩 Components

### UI Components (Radix + shadcn/ui)
- Button, Input, Label, Textarea
- Dialog, AlertDialog, Sheet
- Select, Dropdown, Command, Popover
- Tabs, Accordion, Collapsible
- Radio, Checkbox, Switch, Toggle
- Slider, Progress, Separator
- Avatar, Badge, Card
- Toast (Sonner), Tooltip
- Carousel, Date Picker

### Custom Components
- **PortalLayout** - Shared layout for admin/member/officer portals
- **CookieConsent** - Cookie notice component
- Landing page specific components

## 💻 Development

### Project Stack Details

#### Routing
- Uses TanStack Router with file-based routing
- Type-safe route definitions
- Auto-generated route tree (`routeTree.gen.ts`)
- Configured for SSR-ready architecture

#### State Management
- **React Query** - Server state (data fetching, caching)
- **React Hook Form** - Client state (form data)
- **React Context** - Global app state (if needed)

#### Styling Approach
- Tailwind CSS for utility-first styling
- CSS modules for component-scoped styles
- Radix UI for accessible primitives
- Custom design tokens in CSS

#### Data
- Currently using mock data (`mockData.ts`)
- Easily replaceable with API calls
- Includes: members, loans, applications, products, settings

### Adding New Features

1. **Create a new route** in `src/routes/`
2. **Create components** in `src/components/`
3. **Add mock data** if needed in `src/data/`
4. **Style with Tailwind** classes
5. **Use UI components** from `/ui` folder

### Code Quality
- **ESLint** enforces code standards
- **Prettier** formats code consistently
- **TypeScript** ensures type safety

## 🏗️ Build & Deployment

### Build for Production
```bash
npm run build
# Output: dist/ directory
```

### Deployment Options

#### Cloudflare (via Wrangler)
```bash
# Configure in wrangler.jsonc
npm run build
wrangler deploy
```

#### Vercel
```bash
# vercel.json is configured
git push  # Auto-deploys on push
```

#### Local Preview
```bash
npm run preview
```

### Environment Variables
Create a `.env.local` file if needed for API endpoints, keys, etc.

## 📊 Mock Data

The application includes comprehensive mock data:

- **Members**: 50+ sample members with savings, loans, roles
- **Loans**: Various loan statuses (pending, active, completed)
- **Applications**: Member application workflows
- **Products**: Cooperative shop inventory
- **Settings**: Financial parameters (interest rates, fees)
- **Monthly Disbursement**: Loan payout tracking

Located in `src/data/mockData.ts` - easily replaceable with real API calls.

## 🔐 Security Considerations

- TanStack Router provides type-safe routing
- Form validation with Zod
- GDPR cookie consent implemented
- No sensitive data hardcoded
- Ready for authentication integration

## 📈 Performance

- Vite for fast HMR during development
- Code splitting with Vite
- Tree-shaking for optimized bundles
- React 19 with concurrent features
- Tailwind CSS production optimization

## 📱 Responsive Design

- Mobile-first Tailwind CSS approach
- Radix UI components are inherently responsive
- Tested layouts for mobile, tablet, desktop

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Run `npm run lint` and `npm run format`
4. Submit pull request

## 📄 License

Cooperative Society Platform - RUNSMSL

## 📞 Support

For issues or questions regarding RUNSMSL, contact the development team or create an issue in the repository.

---

**Last Updated**: May 2026
**Version**: 1.0.0
**Status**: Active Development
