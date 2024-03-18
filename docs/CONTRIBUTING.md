# Contributing Guidelines

Thank you for considering contributing to the Boilerplate Codes repository! This guide will help you get started.

## 🤝 How to Contribute

### 1. Fork the Repository

Click the "Fork" button at the top right of this repository to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/shivas1432/boilerplate-codes.git
cd boilerplate-codes
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

- Follow the existing code style and conventions
- Add tests for any new functionality
- Update documentation as needed
- Ensure all existing tests pass

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add your descriptive commit message"
```

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

Open a pull request from your fork to the main repository.

## 📋 Contribution Types

### New Boilerplates
- Must be production-ready
- Include comprehensive documentation
- Follow security best practices
- Include testing setup
- Provide Docker configuration

### Bug Fixes
- Include reproduction steps
- Add tests to prevent regression
- Update documentation if needed

### Documentation
- Improve existing docs
- Add missing documentation
- Fix typos and grammar

## 🔧 Development Setup

### Prerequisites
- Node.js 18+
- Python 3.11+
- Go 1.21+
- Docker
- Git

### Installation
```bash
# Install Node.js dependencies
npm install

# Install Python dependencies
pip install -r requirements.txt

# Install Go dependencies
go mod tidy
```

## 📝 Code Standards

### General
- Use consistent indentation (2 spaces for JS/TS, 4 spaces for Python)
- Write descriptive commit messages
- Add comments for complex logic
- Follow language-specific conventions

### JavaScript/TypeScript
- Use ESLint and Prettier
- Prefer TypeScript over JavaScript
- Use meaningful variable names
- Add JSDoc comments for functions

### Python
- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions and classes
- Use Black for formatting

### Go
- Follow Go conventions
- Use gofmt for formatting
- Write comprehensive tests
- Use meaningful package names

## 🧪 Testing

All contributions must include appropriate tests:

- Unit tests for new functions
- Integration tests for API endpoints
- E2E tests for critical user flows

Run tests before submitting:
```bash
# JavaScript/TypeScript
npm test

# Python
pytest

# Go
go test ./...
```

## 📚 Documentation

Update documentation for any changes:

- README files for each boilerplate
- API documentation
- Setup guides
- Configuration examples

## 🚀 Pull Request Guidelines

### Title
Use conventional commits format:
- `feat: add new React boilerplate`
- `fix: resolve authentication bug`
- `docs: update setup instructions`

### Description
Include:
- What changes were made
- Why the changes were necessary
- How to test the changes
- Any breaking changes

### Checklist
- [ ] Tests pass
- [ ] Code follows style guidelines
- [ ] Documentation is updated
- [ ] No breaking changes (or clearly documented)

## 🏆 Recognition

Contributors will be:
- Listed in the repository contributors
- Credited in release notes
- Mentioned in social media announcements

## 📞 Getting Help

- Open an issue for questions
- Join our [Telegram group](https://t.me/helpme_coder)
- Connect on [LinkedIn](https://linkedin.com/in/shivashanker-kanugula-51a512252)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping make this project better! 🎉**