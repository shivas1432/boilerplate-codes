# Python FastAPI Boilerplate

A modern, production-ready FastAPI boilerplate with PostgreSQL, SQLAlchemy, and JWT authentication.

## 🚀 Features

- ⚡️ **FastAPI** - Modern, fast web framework for building APIs
- 🗄️ **PostgreSQL** - Powerful relational database
- 🔧 **SQLAlchemy 2.0** - Modern Python SQL toolkit and ORM
- 🔐 **JWT Authentication** - Secure token-based authentication
- 📝 **Pydantic V2** - Data validation using Python type annotations
- 🧪 **Pytest** - Comprehensive testing framework
- 📊 **Alembic** - Database migration tool
- 🎯 **Type Hints** - Full type annotation support
- 📚 **OpenAPI** - Automatic API documentation

## 📦 Installation

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy environment variables
cp .env.example .env

# Run database migrations
alembic upgrade head

# Start development server
uvicorn main:app --reload
```

## 🏗 Project Structure

```
app/
├── api/               # API routes
│   └── v1/           # API version 1
├── core/             # Core configuration
├── crud/             # Database operations
├── db/               # Database configuration
├── models/           # SQLAlchemy models
├── schemas/          # Pydantic schemas
├── services/         # Business logic
└── tests/            # Test files
```

## 🔌 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh` - Refresh token

### Users
- `GET /api/v1/users/me` - Get current user profile
- `PUT /api/v1/users/me` - Update current user
- `GET /api/v1/users/` - Get all users (admin only)

## 🧪 Testing

```bash
# Run tests
pytest

# Run tests with coverage
pytest --cov=app

# Run tests in watch mode
pytest-watch
```

## 📝 Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost/fastapi_boilerplate
SECRET_KEY=your-secret-key-here
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_MINUTES=60480
ALGORITHM=HS256
```

## 📚 API Documentation

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI JSON**: http://localhost:8000/openapi.json

---

**Made with ❤️ by [Kanugula Shivashanker](https://shivashanker.com)**