'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Copy, MessageCircle, Mail } from 'lucide-react'

export default function GeneratorDemo() {
  const [step, setStep] = useState(1)
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Lola\'s Restaurant',
    tagline: 'Authentic Ilonggo Cuisine Since 1985',
    phone: '+63 917 123 4567',
    email: 'lolas@restaurant.com',
    whatsapp: '+63 917 123 4567',
    address: '123 Molo Street, Iloilo City',
    hours: 'Mon-Sun: 10am - 9pm',
    description: 'A family-owned restaurant serving authentic Ilonggo dishes for over 30 years. Fresh ingredients, traditional recipes, and warm hospitality.',
  })

  const subdomain = formData.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  const websiteUrl = `${subdomain}.hanaph.com`
  const referralLink = `https://hanaph.com/ref/${subdomain}`

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const steps = [
    { number: 1, title: 'Business Info', fields: ['name', 'tagline'] },
    { number: 2, title: 'Contact', fields: ['phone', 'email', 'whatsapp'] },
    { number: 3, title: 'Details', fields: ['address', 'hours'] },
    { number: 4, title: 'Description', fields: ['description'] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-cream via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
            <span className="text-xl font-bold text-secondary-500">← HanaPH</span>
          </Link>
          <h1 className="text-2xl font-bold text-secondary-500 hidden sm:block">Website Generator</h1>
          <div className="w-8"></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Side */}
          <div>
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                {steps.map((s) => (
                  <div key={s.number} className="flex flex-col items-center flex-1">
                    <button
                      onClick={() => setStep(s.number)}
                      className={`w-12 h-12 rounded-full font-bold transition flex items-center justify-center ${
                        step >= s.number
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {s.number}
                    </button>
                    <p className="text-xs font-semibold text-gray-600 mt-2 text-center hidden sm:block">{s.title}</p>
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 h-1 rounded-full">
                <div
                  className="bg-primary-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${(step / steps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6 bg-white p-6 rounded-xl border border-gray-200">
              {step === 1 && (
                <div className="space-y-4 animate-slide-up">
                  <h2 className="text-2xl font-bold text-secondary-500">Business Information</h2>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Restaurant Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      placeholder="e.g., Lola's Restaurant"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tagline</label>
                    <input
                      type="text"
                      value={formData.tagline}
                      onChange={(e) => handleChange('tagline', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      placeholder="e.g., Authentic Ilonggo Cuisine"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-slide-up">
                  <h2 className="text-2xl font-bold text-secondary-500">Contact Information</h2>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      placeholder="+63 917 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      placeholder="contact@restaurant.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleChange('whatsapp', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      placeholder="+63 917 123 4567"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-slide-up">
                  <h2 className="text-2xl font-bold text-secondary-500">Location & Hours</h2>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      placeholder="123 Main St, Iloilo City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Operating Hours</label>
                    <input
                      type="text"
                      value={formData.hours}
                      onChange={(e) => handleChange('hours', e.target.value)}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      placeholder="Mon-Sun: 10am - 9pm"
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4 animate-slide-up">
                  <h2 className="text-2xl font-bold text-secondary-500">Business Description</h2>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">About Your Business</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      rows={5}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      placeholder="Tell customers about your business..."
                    />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(Math.min(4, step + 1))}
                  disabled={step === 4}
                  className="flex-1 px-6 py-2 bg-gradient-to-r from-primary-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          {/* Preview Side */}
          <div className="sticky top-24 h-fit">
            <h2 className="text-2xl font-bold text-secondary-500 mb-4">Live Preview</h2>

            {/* Website Preview */}
            <div className="bg-white rounded-xl border-2 border-gray-300 overflow-hidden shadow-lg mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-orange-600 text-white p-6 text-center">
                <h1 className="text-2xl font-bold">{formData.name}</h1>
                <p className="text-orange-100 mt-1">{formData.tagline}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">[Restaurant Photo]</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="font-semibold text-secondary-500 w-24">Hours:</span>
                    <span className="text-gray-600">{formData.hours}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-secondary-500 w-24">Address:</span>
                    <span className="text-gray-600">{formData.address}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-secondary-500 w-24">About:</span>
                    <span className="text-gray-600">{formData.description}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-200">
                  <a
                    href={`tel:${formData.phone}`}
                    className="px-3 py-2 bg-gray-100 text-secondary-500 text-sm font-semibold rounded hover:bg-gray-200 transition text-center"
                  >
                    📞 Call
                  </a>
                  <a
                    href={`https://wa.me/${formData.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-accent-success text-white text-sm font-semibold rounded hover:opacity-90 transition text-center"
                  >
                    💬 WhatsApp
                  </a>
                </div>

                <p className="text-xs text-gray-500 text-center">Powered by HanaPH</p>
              </div>
            </div>

            {/* Your Website URL */}
            <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg mb-6">
              <p className="text-xs font-semibold text-gray-600 mb-2">YOUR WEBSITE URL</p>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={websiteUrl}
                  readOnly
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm font-monospace"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`https://${websiteUrl}`)
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                  }}
                  className="px-3 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition"
                  title="Copy URL"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Referral Section */}
            <div className="bg-green-50 border-2 border-accent-success rounded-lg p-4 space-y-3">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-2">SHARE YOUR REFERRAL LINK</p>
                <p className="text-sm text-gray-700">Share this with other businesses. They get a free featured listing when they sign up!</p>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-xs font-monospace"
                />
                <button
                  onClick={handleCopy}
                  className="px-3 py-2 bg-accent-success text-white rounded hover:bg-green-700 transition flex items-center gap-1"
                  title="Copy Link"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {copied && <p className="text-xs text-green-700 font-semibold">✓ Copied to clipboard!</p>}

              <div className="flex gap-2 pt-2">
                <a
                  href={`https://wa.me/?text=Join%20HanaPH%20Business%20Directory!%20Get%20your%20free%20website:%20${referralLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-accent-success text-white rounded font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:?subject=Join HanaPH Business Directory&body=Get your free website: ${referralLink}`}
                  className="flex-1 px-3 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <section className="bg-blue-50 border-t border-blue-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-700">
            This demo shows how easy it is to create a professional website. All fields update the preview in real-time.
          </p>
          <Link href="/" className="text-primary-500 font-semibold hover:underline mt-2 inline-block">
            ← Back to Demos
          </Link>
        </div>
      </section>
    </div>
  )
}
