# Node.js Express Boilerplate

A production-ready Node.js Express boilerplate with TypeScript, MongoDB, and JWT authentication.

## 🚀 Features

- ⚡️ **Express.js** - Fast, unopinionated web framework
- 🔷 **TypeScript** - Type safety and better development experience
- 🗄️ **MongoDB** - NoSQL database with Mongoose ODM
- 🔐 **JWT Authentication** - Secure token-based authentication
- 🛡️ **Security** - Helmet, CORS, Rate limiting
- 📝 **Validation** - Request validation with express-validator
- 🧪 **Testing** - Jest and Supertest for API testing
- 📊 **Logging** - Morgan for HTTP request logging
- 🔧 **Development** - Nodemon for auto-restart

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗 Project Structure

```
src/
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/            # Mongoose models
├── routes/            # Express routes
├── services/          # Business logic
├── types/             # TypeScript types
├── utils/             # Utility functions
├── validators/        # Request validators
└── server.ts          # Application entry point
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Users
- `GET /api/users` - Get all users (protected)
- `GET /api/users/:id` - Get user by ID (protected)
- `PUT /api/users/:id` - Update user (protected)
- `DELETE /api/users/:id` - Delete user (protected)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Environment Variables

```env
NODE_ENV=development
PORT=3001
MONGODB_URI=mongodb://localhost:27017/express-boilerplate
JWT_SECRET=your-jwt-secret-here
JWT_EXPIRES_IN=7d
```

## 🚀 Deployment

This boilerplate is ready for deployment on:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS EC2
- Docker containers

## 📚 Documentation

- [API Documentation](./docs/api.md)
- [Authentication Guide](./docs/auth.md)
- [Database Schema](./docs/database.md)
- [Deployment Guide](./docs/deployment.md)

---

**Made with ❤️ by [Kanugula Shivashanker](https://shivashanker.com)**