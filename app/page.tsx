'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChefHat, Utensils, Share2, TrendingUp } from 'lucide-react'

export default function Home() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const demos = [
    {
      id: 'directory',
      title: 'Business Directory',
      description: 'Explore restaurants with powerful search & filtering',
      icon: Utensils,
      href: '/demo/directory',
      color: 'bg-blue-50 text-blue-700',
      accentColor: 'from-blue-400 to-blue-600',
    },
    {
      id: 'generator',
      title: 'Mini-Website Generator',
      description: 'Create a stunning website in minutes (no code!)',
      icon: ChefHat,
      href: '/demo/generator',
      color: 'bg-orange-50 text-orange-700',
      accentColor: 'from-orange-400 to-orange-600',
    },
    {
      id: 'referral',
      title: 'Referral System',
      description: 'Earn rewards by sharing with other businesses',
      icon: Share2,
      href: '/demo/referral',
      color: 'bg-green-50 text-green-700',
      accentColor: 'from-green-400 to-green-600',
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'Track your business performance in real-time',
      icon: TrendingUp,
      href: '/demo/analytics',
      color: 'bg-purple-50 text-purple-700',
      accentColor: 'from-purple-400 to-purple-600',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-cream via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-orange-600 flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-secondary-500">HanaPH</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#demos" className="text-gray-700 hover:text-primary-500 transition">Demos</a>
            <a href="#features" className="text-gray-700 hover:text-primary-500 transition">Features</a>
            <a href="https://github.com/defendeuw/HanaPH-platform" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition">GitHub</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center space-y-6 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-sm font-semibold text-primary-600">🚀 Interactive Demo</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-secondary-500 leading-tight">
            AI-Powered Business Directory
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-orange-600 bg-clip-text text-transparent">
              for Philippine Cities
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how HanaPH helps restaurants and businesses get discovered online.
            Explore 4 interactive demos showing the complete platform in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#demos"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
            >
              Explore Demos
            </a>
            <a
              href="https://github.com/defendeuw/HanaPH-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gray-300 text-secondary-500 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-500 transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold">4</p>
              <p className="text-blue-200 mt-1">Interactive Demos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">8</p>
              <p className="text-blue-200 mt-1">Weeks to Launch</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">∞</p>
              <p className="text-blue-200 mt-1">Revenue Potential</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">🇵🇭</p>
              <p className="text-blue-200 mt-1">Philippines First</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demos Grid */}
      <section id="demos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-secondary-500 mb-4 text-center">Interactive Demos</h3>
        <p className="text-gray-600 text-center mb-12">Click any demo to explore the features</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demos.map((demo) => {
            const Icon = demo.icon
            return (
              <Link key={demo.id} href={demo.href}>
                <div
                  className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer h-full"
                  onMouseEnter={() => setActiveDemo(demo.id)}
                  onMouseLeave={() => setActiveDemo(null)}
                >
                  <div className={`w-16 h-16 rounded-xl ${demo.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <h4 className="text-2xl font-bold text-secondary-500 mb-2">{demo.title}</h4>
                  <p className="text-gray-600 mb-6">{demo.description}</p>

                  <div className="flex items-center text-primary-500 font-semibold group-hover:gap-2 gap-1 transition">
                    <span>View Demo</span>
                    <span className="text-xl group-hover:translate-x-2 transition">→</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-secondary-500 mb-12 text-center">Why HanaPH?</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '🎯 Niche Focus',
                description: 'Start with restaurants in Iloilo, expand to all categories across Philippine cities'
              },
              {
                title: '🚀 Viral Growth',
                description: 'Built-in referral system: refer 3 → get Featured Forever. Exponential growth mechanics.'
              },
              {
                title: '💰 Immediate Revenue',
                description: 'Featured listings (₱299/mo), premium insights (₱999/mo), affiliate revenue from day 1'
              },
              {
                title: '📱 Mobile-First',
                description: 'Optimized for Philippine users who access via mobile phones (9+ hours daily)'
              },
              {
                title: '💬 WhatsApp Ready',
                description: 'WhatsApp notifications, bot support, direct messaging - not email-dependent'
              },
              {
                title: '🤖 AI-Powered',
                description: 'Auto-generated mini-websites, content, descriptions, support - scales without you'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
                <p className="text-2xl mb-3">{feature.title.split(' ')[0]}</p>
                <h4 className="font-semibold text-secondary-500 mb-2">{feature.title.split(' ').slice(1).join(' ')}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary-500 to-orange-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Build?</h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            The complete build instructions and UX strategy are in the GitHub repository.
            Explore the demos first, then share the BisnesPH-Build-Instructions.md with an AI agent to implement Phase 1.
          </p>
          <a
            href="https://github.com/defendeuw/HanaPH-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-orange-50 transition"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-500 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">HanaPH Platform</h4>
              <p className="text-blue-200">AI-Powered Business Directory for Philippine Cities</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#demos" className="hover:text-white transition">Demos</a></li>
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="https://github.com/defendeuw/HanaPH-platform" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="https://github.com/defendeuw/HanaPH-platform/blob/main/BisnesPH-Build-Instructions.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Build Guide</a></li>
                <li><a href="https://github.com/defendeuw/HanaPH-platform/blob/main/UX-STRATEGY.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">UX Strategy</a></li>
                <li><a href="https://github.com/defendeuw/HanaPH-platform/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-8 text-center text-blue-200">
            <p>© 2025 HanaPH Platform. All rights reserved. | <a href="https://github.com/defendeuw/HanaPH-platform" className="hover:text-white">Developed with ❤️ for Philippine Businesses</a></p>
          </div>
        </div>
      </footer>
    </main>
  )
}
