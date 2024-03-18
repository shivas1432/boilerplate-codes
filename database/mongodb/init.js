// MongoDB Boilerplate Database Setup
// Production-ready MongoDB initialization script

// Switch to the application database
use('boilerplate_db');

// Create collections with validation schemas
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['email', 'username', 'passwordHash'],
      properties: {
        _id: {
          bsonType: 'objectId'
        },
        email: {
          bsonType: 'string',
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          description: 'Must be a valid email address'
        },
        username: {
          bsonType: 'string',
          minLength: 3,
          maxLength: 30,
          description: 'Username must be between 3 and 30 characters'
        },
        passwordHash: {
          bsonType: 'string',
          description: 'Hashed password is required'
        },
        firstName: {
          bsonType: 'string',
          maxLength: 50
        },
        lastName: {
          bsonType: 'string',
          maxLength: 50
        },
        role: {
          enum: ['user', 'admin', 'moderator'],
          description: 'Role must be one of user, admin, or moderator'
        },
        status: {
          enum: ['active', 'inactive', 'suspended'],
          description: 'Status must be one of active, inactive, or suspended'
        },
        emailVerified: {
          bsonType: 'bool'
        },
        profile: {
          bsonType: 'object',
          properties: {
            avatarUrl: { bsonType: 'string' },
            bio: { bsonType: 'string', maxLength: 500 },
            phone: { bsonType: 'string' },
            dateOfBirth: { bsonType: 'date' },
            timezone: { bsonType: 'string' },
            language: { bsonType: 'string' }
          }
        },
        lastLogin: {
          bsonType: 'date'
        },
        createdAt: {
          bsonType: 'date'
        },
        updatedAt: {
          bsonType: 'date'
        }
      }
    }
  }
});

db.createCollection('posts', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['userId', 'title', 'slug'],
      properties: {
        _id: {
          bsonType: 'objectId'
        },
        userId: {
          bsonType: 'objectId',
          description: 'User ID is required'
        },
        title: {
          bsonType: 'string',
          minLength: 1,
          maxLength: 255,
          description: 'Title is required and must be between 1 and 255 characters'
        },
        slug: {
          bsonType: 'string',
          pattern: '^[a-z0-9-]+$',
          description: 'Slug must contain only lowercase letters, numbers, and hyphens'
        },
        content: {
          bsonType: 'string'
        },
        excerpt: {
          bsonType: 'string',
          maxLength: 500
        },
        featuredImage: {
          bsonType: 'string'
        },
        status: {
          enum: ['draft', 'published', 'archived'],
          description: 'Status must be one of draft, published, or archived'
        },
        categories: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        tags: {
          bsonType: 'array',
          items: {
            bsonType: 'string'
          }
        },
        publishedAt: {
          bsonType: 'date'
        },
        createdAt: {
          bsonType: 'date'
        },
        updatedAt: {
          bsonType: 'date'
        }
      }
    }
  }
});

db.createCollection('categories', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'slug'],
      properties: {
        _id: {
          bsonType: 'objectId'
        },
        name: {
          bsonType: 'string',
          minLength: 1,
          maxLength: 100,
          description: 'Category name is required'
        },
        slug: {
          bsonType: 'string',
          pattern: '^[a-z0-9-]+$',
          description: 'Slug must contain only lowercase letters, numbers, and hyphens'
        },
        description: {
          bsonType: 'string',
          maxLength: 500
        },
        parentId: {
          bsonType: 'objectId'
        },
        createdAt: {
          bsonType: 'date'
        },
        updatedAt: {
          bsonType: 'date'
        }
      }
    }
  }
});

db.createCollection('comments', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['postId', 'userId', 'content'],
      properties: {
        _id: {
          bsonType: 'objectId'
        },
        postId: {
          bsonType: 'objectId',
          description: 'Post ID is required'
        },
        userId: {
          bsonType: 'objectId',
          description: 'User ID is required'
        },
        parentId: {
          bsonType: 'objectId'
        },
        content: {
          bsonType: 'string',
          minLength: 1,
          maxLength: 1000,
          description: 'Comment content is required'
        },
        status: {
          enum: ['pending', 'approved', 'rejected'],
          description: 'Status must be one of pending, approved, or rejected'
        },
        createdAt: {
          bsonType: 'date'
        },
        updatedAt: {
          bsonType: 'date'
        }
      }
    }
  }
});

db.createCollection('sessions', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['userId', 'sessionToken', 'expiresAt'],
      properties: {
        _id: {
          bsonType: 'objectId'
        },
        userId: {
          bsonType: 'objectId',
          description: 'User ID is required'
        },
        sessionToken: {
          bsonType: 'string',
          description: 'Session token is required'
        },
        refreshToken: {
          bsonType: 'string'
        },
        expiresAt: {
          bsonType: 'date',
          description: 'Expiration date is required'
        },
        ipAddress: {
          bsonType: 'string'
        },
        userAgent: {
          bsonType: 'string'
        },
        createdAt: {
          bsonType: 'date'
        },
        lastAccessed: {
          bsonType: 'date'
        }
      }
    }
  }
});

// Create indexes for better performance
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ username: 1 }, { unique: true });
db.users.createIndex({ role: 1 });
db.users.createIndex({ status: 1 });
db.users.createIndex({ createdAt: 1 });
db.users.createIndex({ 'profile.email': 1 });

db.posts.createIndex({ userId: 1 });
db.posts.createIndex({ slug: 1 }, { unique: true });
db.posts.createIndex({ status: 1 });
db.posts.createIndex({ publishedAt: 1 });
db.posts.createIndex({ createdAt: 1 });
db.posts.createIndex({ categories: 1 });
db.posts.createIndex({ tags: 1 });

// Text indexes for search
db.posts.createIndex({ 
  title: 'text', 
  content: 'text', 
  excerpt: 'text' 
}, {
  weights: {
    title: 10,
    excerpt: 5,
    content: 1
  }
});

db.categories.createIndex({ name: 1 }, { unique: true });
db.categories.createIndex({ slug: 1 }, { unique: true });
db.categories.createIndex({ parentId: 1 });

db.comments.createIndex({ postId: 1 });
db.comments.createIndex({ userId: 1 });
db.comments.createIndex({ parentId: 1 });
db.comments.createIndex({ status: 1 });
db.comments.createIndex({ createdAt: 1 });

db.sessions.createIndex({ userId: 1 });
db.sessions.createIndex({ sessionToken: 1 }, { unique: true });
db.sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Insert sample data
const adminUser = db.users.insertOne({
  email: 'admin@example.com',
  username: 'admin',
  passwordHash: '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg/9qm', // admin123
  firstName: 'Admin',
  lastName: 'User',
  role: 'admin',
  status: 'active',
  emailVerified: true,
  profile: {
    bio: 'System administrator',
    timezone: 'UTC',
    language: 'en'
  },
  createdAt: new Date(),
  updatedAt: new Date()
});

const regularUser = db.users.insertOne({
  email: 'user@example.com',
  username: 'user',
  passwordHash: '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg/9qm', // user123
  firstName: 'Regular',
  lastName: 'User',
  role: 'user',
  status: 'active',
  emailVerified: true,
  profile: {
    bio: 'Regular user account',
    timezone: 'UTC',
    language: 'en'
  },
  createdAt: new Date(),
  updatedAt: new Date()
});

// Insert sample categories
const techCategory = db.categories.insertOne({
  name: 'Technology',
  slug: 'technology',
  description: 'Posts about technology and programming',
  createdAt: new Date(),
  updatedAt: new Date()
});

const lifestyleCategory = db.categories.insertOne({
  name: 'Lifestyle',
  slug: 'lifestyle',
  description: 'Posts about lifestyle and personal development',
  createdAt: new Date(),
  updatedAt: new Date()
});

const businessCategory = db.categories.insertOne({
  name: 'Business',
  slug: 'business',
  description: 'Posts about business and entrepreneurship',
  createdAt: new Date(),
  updatedAt: new Date()
});

// Insert sample posts
db.posts.insertOne({
  userId: adminUser.insertedId,
  title: 'Getting Started with MongoDB',
  slug: 'getting-started-with-mongodb',
  content: 'MongoDB is a popular NoSQL database that offers flexibility and scalability...',
  excerpt: 'Learn the basics of MongoDB and how to get started with this powerful NoSQL database.',
  status: 'published',
  categories: [techCategory.insertedId],
  tags: ['mongodb', 'database', 'nosql'],
  publishedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date()
});

db.posts.insertOne({
  userId: regularUser.insertedId,
  title: 'Building Better Habits',
  slug: 'building-better-habits',
  content: 'Developing good habits is essential for personal growth and success...',
  excerpt: 'Discover effective strategies for building and maintaining positive habits.',
  status: 'published',
  categories: [lifestyleCategory.insertedId],
  tags: ['habits', 'productivity', 'self-improvement'],
  publishedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date()
});

// Create user roles and permissions
db.createRole({
  role: 'appUser',
  privileges: [
    {
      resource: { db: 'boilerplate_db', collection: '' },
      actions: ['find', 'insert', 'update', 'remove']
    }
  ],
  roles: []
});

// Create application user (run this with admin privileges)
// db.createUser({
//   user: 'app_user',
//   pwd: 'secure_password_here',
//   roles: ['appUser']
// });

print('MongoDB boilerplate database initialized successfully!');
print('Collections created: users, posts, categories, comments, sessions');
print('Indexes created for optimal performance');
print('Sample data inserted');
print('Remember to create application user with appropriate permissions');