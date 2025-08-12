'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MapPin, Heart, MessageCircle, Share2, Search, Filter } from 'lucide-react'

interface Trip {
  id: string
  title: string
  description: string
  author: string
  location: string
  duration: string
  waypoints: number
  likes: number
  comments: number
  image: string
  tags: string[]
}

const mockTrips: Trip[] = [
  {
    id: '1',
    title: 'Japan Highlights Route',
    description: 'A comprehensive 10-day journey through Japan\'s most iconic destinations',
    author: 'John Davis',
    location: 'Japan',
    duration: '10 days',
    waypoints: 8,
    likes: 234,
    comments: 45,
    image: '/api/placeholder/400/250',
    tags: ['Cultural', 'Food', 'City']
  },
  {
    id: '2',
    title: 'Santorini Sunset Adventure',
    description: 'Experience the magic of Santorini with this perfect 5-day itinerary',
    author: 'Emma Smith',
    location: 'Greece',
    duration: '5 days',
    waypoints: 6,
    likes: 189,
    comments: 32,
    image: '/api/placeholder/400/250',
    tags: ['Romantic', 'Beach', 'Sunset']
  },
  {
    id: '3',
    title: 'Machu Picchu Trek',
    description: '4-day Inca Trail adventure to the ancient wonder of Machu Picchu',
    author: 'Sarah Williams',
    location: 'Peru',
    duration: '4 days',
    waypoints: 5,
    likes: 156,
    comments: 28,
    image: '/api/placeholder/400/250',
    tags: ['Adventure', 'Nature', 'Cultural']
  },
  {
    id: '4',
    title: 'Paris in Spring',
    description: 'The perfect springtime exploration of the City of Light',
    author: 'Marie Dubois',
    location: 'France',
    duration: '7 days',
    waypoints: 10,
    likes: 203,
    comments: 41,
    image: '/api/placeholder/400/250',
    tags: ['Cultural', 'City', 'Romantic']
  }
]

const categories = [
  'All', 'Adventure', 'Beach', 'City', 'Cultural', 'Food', 'Nature', 'Road Trip', 'Romantic', 'Solo', 'Family'
]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [trips] = useState<Trip[]>(mockTrips)

  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         trip.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         trip.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || trip.tags.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Trips</h1>
          <p className="text-gray-600">Discover amazing travel itineraries from our community</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search trips, destinations, or travelers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'secondary'}
                className="cursor-pointer hover:bg-blue-100"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTrips.length} of {trips.length} trips
          </p>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => (
            <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{trip.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{trip.description}</p>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {trip.location} • {trip.duration} • {trip.waypoints} waypoints
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {trip.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {trip.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {trip.comments}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm">
                      View Route
                    </Button>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm text-gray-600">
                    By <span className="font-medium">{trip.author}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredTrips.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Trips
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredTrips.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No trips found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters to find more trips
            </p>
            <Button onClick={() => {
              setSearchQuery('')
              setSelectedCategory('All')
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
