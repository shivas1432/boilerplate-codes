import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Zap, Shield, TestTube } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: 'Fast Development',
    description: 'Built with Vite for lightning-fast development experience',
  },
  {
    icon: <Code className="w-8 h-8 text-green-600" />,
    title: 'TypeScript Ready',
    description: 'Full TypeScript support for better code quality and DX',
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-600" />,
    title: 'Authentication',
    description: 'JWT-based authentication system ready to use',
  },
  {
    icon: <TestTube className="w-8 h-8 text-red-600" />,
    title: 'Testing Setup',
    description: 'Vitest and Testing Library configured out of the box',
  },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          React TypeScript Boilerplate
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Production-ready starter template with modern tooling and best practices
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Dashboard
          </Link>
          <a
            href="https://github.com/shivashanker/boilerplate-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Source
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {feature.icon}
              <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}