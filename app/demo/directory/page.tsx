'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Star, MapPin, Phone, ChevronRight, Filter } from 'lucide-react'

const RESTAURANTS_DATA = [
  {
    id: 1,
    name: "Lola's Batchoy House",
    rating: 4.8,
    reviews: 127,
    category: 'Traditional Filipino',
    address: 'Molo, Iloilo City',
    phone: '+63 917 123 4567',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: 2,
    name: 'Chicken House by Dinso',
    rating: 4.6,
    reviews: 89,
    category: 'Filipino Grilled',
    address: 'Jaro, Iloilo City',
    phone: '+63 917 234 5678',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: 3,
    name: 'Izakaya Katsutoku',
    rating: 4.9,
    reviews: 203,
    category: 'Japanese',
    address: 'La Paz, Iloilo City',
    phone: '+63 917 345 6789',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: 4,
    name: 'The Ruins Cafe',
    rating: 4.5,
    reviews: 156,
    category: 'Cafe & Desserts',
    address: 'Tanza, Iloilo City',
    phone: '+63 917 456 7890',
    image: 'https://images.unsplash.com/photo-1491927570601-bf6a62b7b2e1?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: 5,
    name: 'Netty Eatery',
    rating: 4.7,
    reviews: 98,
    category: 'Filipino Comfort Food',
    address: 'Mandurriao, Iloilo City',
    phone: '+63 917 567 8901',
    image: 'https://images.unsplash.com/photo-1495556365770-2cc5c3d87f60?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: 6,
    name: 'Paraw Seafood House',
    rating: 4.4,
    reviews: 72,
    category: 'Seafood',
    address: 'Molo, Iloilo City',
    phone: '+63 917 678 9012',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    featured: false,
  },
]

export default function DirectoryDemo() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'name'>('rating')

  const categories = [...new Set(RESTAURANTS_DATA.map(r => r.category))]

  const filteredRestaurants = useMemo(() => {
    return RESTAURANTS_DATA
      .filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.category.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = !selectedCategory || r.category === selectedCategory
        return matchesSearch && matchesCategory
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating
        if (sortBy === 'reviews') return b.reviews - a.reviews
        return a.name.localeCompare(b.name)
      })
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-cream via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
            <span className="text-xl font-bold text-secondary-500">← HanaPH</span>
          </Link>
          <h1 className="text-2xl font-bold text-secondary-500 hidden sm:block">Restaurant Directory</h1>
          <div className="w-8"></div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants, cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition text-base"
            />
          </div>

          {/* Filters */}
          <div className="space-y-4">
            {/* Category Filter */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Categories
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    selectedCategory === null
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-semibold transition ${
                      selectedCategory === cat
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Sort by</p>
              <div className="flex gap-2">
                {['rating', 'reviews', 'name'].map(sort => (
                  <button
                    key={sort}
                    onClick={() => setSortBy(sort as any)}
                    className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${
                      sortBy === sort
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {sort === 'rating' && 'Top Rated'}
                    {sort === 'reviews' && 'Most Reviewed'}
                    {sort === 'name' && 'A-Z'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No restaurants found. Try a different search.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-600 mb-6">
              Showing <strong>{filteredRestaurants.length}</strong> restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant, idx) => (
                <div
                  key={restaurant.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-200 h-48">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    />
                    {restaurant.featured && (
                      <div className="absolute top-3 right-3 bg-accent-gold text-secondary-500 px-3 py-1 rounded-full font-bold text-xs">
                        Featured ⭐
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-secondary-500">{restaurant.name}</h3>
                      <p className="text-sm text-gray-500">{restaurant.category}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-accent-gold text-accent-gold" />
                        <span className="font-bold text-secondary-500">{restaurant.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({restaurant.reviews} reviews)</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-500" />
                      <span>{restaurant.address}</span>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-gray-200 flex gap-2">
                      <a
                        href={`tel:${restaurant.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-secondary-500 rounded-lg font-semibold hover:bg-gray-200 transition text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="hidden sm:inline">Call</span>
                      </a>
                      <Link
                        href={`/demo/website/${restaurant.id}`}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-primary-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition text-sm"
                      >
                        <span>View Website</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Info Footer */}
      <section className="bg-blue-50 border-t border-blue-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-700">
            This is an interactive demo showing search & filtering. In production, these will connect to a real database.
          </p>
          <Link href="/" className="text-primary-500 font-semibold hover:underline mt-2 inline-block">
            ← Back to Demos
          </Link>
        </div>
      </section>
    </div>
  )
}
