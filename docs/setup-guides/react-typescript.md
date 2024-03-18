# React TypeScript Setup Guide

This guide will help you set up and customize the React TypeScript boilerplate for your project.

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/shivashanker/boilerplate-codes.git

# Navigate to React TypeScript boilerplate
cd boilerplate-codes/web-development/react-typescript

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

### 3. Environment Setup

Edit your `.env` file:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=Your App Name
```

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` includes:
- React plugin
- Path aliases
- Environment variables
- Build optimizations

### TypeScript Configuration

Three TypeScript configs are included:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node.js settings

### Tailwind CSS

Pre-configured with:
- Custom color palette
- Responsive breakpoints
- Component classes
- Utility extensions

## 🎨 Customization

### Adding New Components

1. Create component in `src/components/`
2. Add TypeScript interface
3. Include in component barrel export

```typescript
// src/components/Button/Button.tsx
import React from 'react'

interface ButtonProps {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ 
  variant, 
  children, 
  onClick 
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### State Management

Uses Zustand for global state:

```typescript
// src/store/appStore.ts
import { create } from 'zustand'

interface AppState {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}))
```

### API Integration

Uses React Query for server state:

```typescript
// src/hooks/useUsers.ts
import { useQuery } from 'react-query'
import { apiClient } from '../services/api'

export const useUsers = () => {
  return useQuery('users', () => apiClient.get('/users'))
}
```

## 🧪 Testing

### Unit Tests

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Writing Tests

```typescript
// src/components/Button/Button.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

test('renders button with text', () => {
  render(<Button variant="primary">Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn()
  render(<Button variant="primary" onClick={handleClick}>Click me</Button>)
  
  await userEvent.click(screen.getByText('Click me'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

## 📚 Best Practices

### Code Organization

- Group related files in feature folders
- Use barrel exports for cleaner imports
- Keep components small and focused
- Separate business logic into custom hooks

### Performance

- Use `React.memo` for expensive components
- Implement code splitting with `React.lazy`
- Optimize images with next-gen formats
- Use React Query for efficient data fetching

### Security

- Validate all user inputs
- Sanitize data before rendering
- Use HTTPS in production
- Implement Content Security Policy

---

**Need help?** Contact [Kanugula Shivashanker](https://t.me/helpme_coder)