'use client'

import Link from 'next/link'
import { Eye, Phone, TrendingUp, Star, Users, BarChart3 } from 'lucide-react'

const CHART_DATA = [
  { day: 'Mon', views: 45 },
  { day: 'Tue', views: 52 },
  { day: 'Wed', views: 48 },
  { day: 'Thu', views: 71 },
  { day: 'Fri', views: 89 },
  { day: 'Sat', views: 102 },
  { day: 'Sun', views: 87 },
]

const MAX_VIEWS = 102

export default function AnalyticsDemo() {
  const totalViews = 494
  const totalClicks = 47
  const avgRating = 4.8
  const totalReviews = 127

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-cream via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
            <span className="text-xl font-bold text-secondary-500">← HanaPH</span>
          </Link>
          <h1 className="text-2xl font-bold text-secondary-500 hidden sm:block">Analytics Dashboard</h1>
          <div className="w-8"></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Restaurant Header */}
        <div className="mb-8 animate-slide-up">
          <div className="bg-gradient-to-r from-primary-500 to-orange-600 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-2">Lola's Batchoy House</h2>
                <p className="text-orange-100">Dashboard for week of Nov 3-9, 2025</p>
              </div>
              <div className="mt-6 md:mt-0 flex gap-4">
                <button className="px-6 py-2 bg-white text-primary-500 font-semibold rounded-lg hover:bg-orange-50 transition">
                  This Week
                </button>
                <button className="px-6 py-2 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition">
                  This Month
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: 'Website Views',
              value: totalViews,
              icon: Eye,
              color: 'from-blue-500 to-blue-600',
              bgColor: 'bg-blue-50',
              change: '+12%'
            },
            {
              title: 'Phone Clicks',
              value: totalClicks,
              icon: Phone,
              color: 'from-green-500 to-green-600',
              bgColor: 'bg-green-50',
              change: '+8%'
            },
            {
              title: 'Avg Rating',
              value: avgRating,
              icon: Star,
              color: 'from-accent-gold to-orange-500',
              bgColor: 'bg-orange-50',
              change: 'Excellent'
            },
            {
              title: 'Total Reviews',
              value: totalReviews,
              icon: Users,
              color: 'from-purple-500 to-purple-600',
              bgColor: 'bg-purple-50',
              change: '+5 new'
            },
          ].map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div key={idx} className={`${metric.bgColor} rounded-xl p-6 border-2 border-gray-200 animate-slide-up`} style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold text-secondary-500">{metric.value}</p>
                  </div>
                  <div className={`bg-gradient-to-br ${metric.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-green-600">{metric.change}</p>
              </div>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Views Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl border-2 border-gray-200 p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-secondary-500">Daily Views</h3>
                <p className="text-sm text-gray-600">Website visits by day</p>
              </div>
              <TrendingUp className="w-6 h-6 text-primary-500" />
            </div>

            <div className="flex items-end justify-between gap-2 h-64">
              {CHART_DATA.map((data, idx) => {
                const height = (data.views / MAX_VIEWS) * 100
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center group">
                    <div className="w-full bg-gray-200 rounded-t hover:bg-primary-500 transition cursor-pointer relative group" style={{ height: `${height}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                        {data.views} views
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-gray-600 mt-2">{data.day}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>Weekly Total:</strong> {totalViews} views <span className="text-green-600 font-semibold">(+12% vs last week)</span>
              </p>
            </div>
          </div>

          {/* Top Keywords */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6 animate-slide-up">
            <h3 className="text-xl font-bold text-secondary-500 mb-6">Top Search Keywords</h3>

            <div className="space-y-3">
              {[
                { keyword: 'batchoy iloilo', count: 87 },
                { keyword: 'ilonggo food', count: 54 },
                { keyword: 'lola\'s restaurant', count: 42 },
                { keyword: 'molo restaurant', count: 31 },
                { keyword: 'best batchoy', count: 28 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item.keyword}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 h-2 rounded">
                      <div className="bg-primary-500 h-2 rounded" style={{ width: `${(item.count / 87) * 100}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 w-8 text-right">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Click Sources */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6 animate-slide-up">
            <h3 className="text-xl font-bold text-secondary-500 mb-6">Click Sources</h3>

            <div className="space-y-4">
              {[
                { source: 'Phone Number Click', clicks: 28, color: 'bg-blue-500', pct: 60 },
                { source: 'WhatsApp Click', clicks: 14, color: 'bg-green-500', pct: 30 },
                { source: 'Location Click', clicks: 5, color: 'bg-purple-500', pct: 10 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-700">{item.source}</p>
                    <p className="text-sm font-bold text-secondary-500">{item.clicks} ({item.pct}%)</p>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                    <div className={`${item.color} h-2 transition-all duration-500`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upgrade CTA */}
          <div className="bg-gradient-to-br from-accent-gold/30 to-orange-100 rounded-xl border-2 border-accent-gold p-6 animate-slide-up">
            <h3 className="text-xl font-bold text-secondary-500 mb-4">💡 Upgrade to Premium</h3>

            <p className="text-gray-700 mb-4">Get deeper insights about your customers and competitors:</p>

            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-accent-gold">✓</span> Customer demographics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-gold">✓</span> Competitor analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-gold">✓</span> Conversion optimization tips
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-gold">✓</span> Monthly reports
              </li>
            </ul>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition">
              Upgrade to Premium - ₱999/month
            </button>

            <p className="text-xs text-gray-600 text-center mt-4">
              Or stay with Featured and get basic analytics free
            </p>
          </div>
        </div>

        {/* Featured Badge Info */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 animate-slide-up">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
              ⭐
            </div>
            <div>
              <h3 className="font-bold text-secondary-500 mb-2">You Have Featured Status</h3>
              <p className="text-gray-700">
                Your listing appears at the top of search results, getting 3x more views than standard listings. Keep sharing referrals to maintain this status!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <section className="bg-blue-50 border-t border-blue-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-700">
            This dashboard shows real-time analytics. Businesses can track performance and make data-driven decisions.
          </p>
          <Link href="/" className="text-primary-500 font-semibold hover:underline mt-2 inline-block">
            ← Back to Demos
          </Link>
        </div>
      </section>
    </div>
  )
}
