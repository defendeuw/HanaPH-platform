'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Share2, MessageCircle, CheckCircle2, Lock } from 'lucide-react'

const MOCK_REFERRALS = [
  { name: 'Maria\'s Batchoy', status: 'completed', date: '2 days ago' },
  { name: 'Juan\'s Chicken House', status: 'completed', date: '1 day ago' },
]

export default function ReferralDemo() {
  const [copied, setCopied] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const referralLink = 'https://hanaph.com/ref/lolas-restaurant'
  const referralsCompleted = MOCK_REFERRALS.length
  const referralsNeeded = 3
  const referralsRemaining = referralsNeeded - referralsCompleted

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const celebrateCompletion = () => {
    setShowCelebration(true)
    setTimeout(() => setShowCelebration(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-cream via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
            <span className="text-xl font-bold text-secondary-500">← HanaPH</span>
          </Link>
          <h1 className="text-2xl font-bold text-secondary-500 hidden sm:block">Referral System</h1>
          <div className="w-8"></div>
        </div>
      </header>

      {/* Celebration Animation */}
      {showCelebration && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="text-6xl animate-bounce">🎉</div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Section */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-8 mb-8 animate-slide-up">
          <h2 className="text-3xl font-bold text-secondary-500 mb-2">Get Featured Forever</h2>
          <p className="text-gray-600 mb-8">Refer 3 businesses to unlock free Featured status forever</p>

          {/* Big Progress Circle */}
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-stretch">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 mb-6">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                  {/* Background circle */}
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                  {/* Progress circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#FF6B35"
                    strokeWidth="8"
                    strokeDasharray={`${(referralsCompleted / referralsNeeded) * 314} 314`}
                    strokeLinecap="round"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dasharray 0.5s ease' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-500">{referralsCompleted}</p>
                    <p className="text-sm text-gray-600">of {referralsNeeded}</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-lg font-semibold text-secondary-500">
                {referralsRemaining === 0 ? '🎊 You unlocked Featured!' : `${referralsRemaining} more to Featured!`}
              </p>
            </div>

            {/* Referrals List */}
            <div className="flex-1 space-y-4">
              <h3 className="text-lg font-bold text-secondary-500 mb-4">Your Referrals</h3>

              {MOCK_REFERRALS.map((referral, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-accent-success flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-secondary-500">{referral.name}</p>
                    <p className="text-sm text-gray-600">{referral.date}</p>
                  </div>
                </div>
              ))}

              {/* Placeholder for next referral */}
              {referralsRemaining > 0 && (
                <div className="flex items-start gap-3 p-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg opacity-60">
                  <Lock className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-600">Waiting for referral...</p>
                    <p className="text-sm text-gray-500">Share your link to unlock this spot</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-accent-success p-8 mb-8 animate-slide-up">
          <h3 className="text-2xl font-bold text-secondary-500 mb-2">📤 Share Your Referral Link</h3>
          <p className="text-gray-600 mb-6">Give this link to other restaurants. When they sign up, both of you benefit!</p>

          {/* Link Box */}
          <div className="bg-white p-4 rounded-lg border-2 border-accent-success mb-6 flex gap-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 text-sm font-monospace text-gray-700 bg-transparent outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-accent-success text-white font-semibold rounded hover:bg-green-700 transition flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">Copy</span>
            </button>
          </div>

          {copied && (
            <p className="text-sm text-accent-success font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Copied to clipboard!
            </p>
          )}

          {/* Share Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a
              href={`https://wa.me/?text=Hey%21%20Join%20HanaPH%20Business%20Directory%20%E2%9C%A8%0A%0AGet%20a%20free%20professional%20website%20for%20your%20restaurant%21%0A%0A${referralLink}%0A%0AWhen%20you%20sign%20up%2C%20I%20get%20closer%20to%20earning%20Featured%20status.%20Win-win%21`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-accent-success text-white font-semibold rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Share on WhatsApp
            </a>
            <a
              href={`mailto:?subject=Join HanaPH Business Directory&body=Hey!%0A%0AJoin HanaPH Business Directory and get a free professional website for your restaurant!%0A%0A${referralLink}%0A%0AWhen you sign up, I get closer to earning Featured status. Win-win!`}
              className="px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Email
            </a>
          </div>

          {/* Template Messages */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-xs font-semibold text-gray-600 mb-3">💡 Message Template</p>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>For friends:</strong> "Hey! You need to check out this platform. Completely free and your restaurant gets a professional website. I get a reward for referring you!"</p>
              <p><strong>For community groups:</strong> "Attention restaurant owners! HanaPH is giving free professional websites to all businesses. Share this link and we all win!"</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl border-2 border-gray-200 p-8 mb-8 animate-slide-up">
          <h3 className="text-2xl font-bold text-secondary-500 mb-6">How It Works</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: 1, title: 'You Share', desc: 'Send your referral link to restaurants' },
              { step: 2, title: 'They Sign Up', desc: 'They claim their free website' },
              { step: 3, title: 'We Track It', desc: 'We confirm their account activation' },
              { step: 4, title: 'You Win', desc: 'Get Featured listing forever' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-orange-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold text-secondary-500 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards Section */}
        <div className="bg-accent-gold/20 border-2 border-accent-gold rounded-xl p-8 animate-slide-up">
          <h3 className="text-2xl font-bold text-secondary-500 mb-6">🏆 Your Reward</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-accent-gold">
              <p className="text-4xl mb-2">⭐</p>
              <p className="font-bold text-secondary-500">Featured Status</p>
              <p className="text-sm text-gray-600">Your listing appears in top results</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-accent-gold">
              <p className="text-4xl mb-2">♾️</p>
              <p className="font-bold text-secondary-500">Forever Free</p>
              <p className="text-sm text-gray-600">Normally ₱299/month, you keep it forever</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-accent-gold">
              <p className="text-4xl mb-2">📈</p>
              <p className="font-bold text-secondary-500">More Customers</p>
              <p className="text-sm text-gray-600">3x more views and clicks on average</p>
            </div>
          </div>
        </div>

        {/* Completion Button */}
        {referralsCompleted === referralsNeeded && (
          <div className="mt-8 bg-green-100 border-2 border-accent-success p-6 rounded-xl text-center animate-slide-up">
            <p className="text-3xl mb-3">🎉</p>
            <h3 className="text-2xl font-bold text-secondary-500 mb-2">Congratulations!</h3>
            <p className="text-gray-700 mb-4">You've earned Featured Status Forever!</p>
            <button
              onClick={celebrateCompletion}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition"
            >
              🎊 Celebrate!
            </button>
          </div>
        )}
      </div>

      {/* Info Footer */}
      <section className="bg-blue-50 border-t border-blue-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-700">
            This demo shows the viral referral mechanics. Real referrals would be tracked in the database.
          </p>
          <Link href="/" className="text-primary-500 font-semibold hover:underline mt-2 inline-block">
            ← Back to Demos
          </Link>
        </div>
      </section>
    </div>
  )
}
