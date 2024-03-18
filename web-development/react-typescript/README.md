# React TypeScript Boilerplate

A production-ready React TypeScript boilerplate with modern tooling and best practices.

## 🚀 Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Type safety and better DX
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Client-side routing
- 🔄 **React Query** - Server state management
- 🐻 **Zustand** - Lightweight state management
- 📋 **React Hook Form** - Form handling with validation
- 🧪 **Vitest** - Fast unit testing
- 📏 **ESLint & Prettier** - Code linting and formatting
- 🔒 **Authentication** - JWT-based auth system
- 🎭 **Component Library** - Reusable UI components

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint
```

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   └── forms/          # Form components
├── hooks/              # Custom React hooks
├── pages/              # Route components
├── services/           # API services
├── store/              # Global state management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── main.tsx           # Application entry point
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.cjs` - ESLint configuration
- `.prettierrc` - Prettier configuration

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=React TypeScript Boilerplate
```

## 🚢 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Documentation

- [Component Guidelines](./docs/components.md)
- [State Management](./docs/state-management.md)
- [API Integration](./docs/api-integration.md)
- [Testing Strategy](./docs/testing.md)

---

**Made with ❤️ by [Kanugula Shivashanker](https://shivashanker.com)**