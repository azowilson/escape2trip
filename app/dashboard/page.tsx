'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ROUTES } from '@/lib/constants'
import {
  MapPin,
  Plus,
  Heart,
  Users,
  Search,
  Star,
  Bell,
  Bookmark,
  Route,
  Home,
  Compass,
  User,
  HelpCircle,
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'

interface Route {
  id: string
  title: string
  location: string
  image: string
  user: {
    name: string
    avatar: string
  }
  rating: number
  duration: string
  stops: number
  likes: number
  saves: number
}

interface TravelStory {
  id: string
  user: {
    name: string
    avatar: string
    initials: string
  }
  isAddStory?: boolean
}

const topRatedRoutes: Route[] = [
  {
    id: '1',
    title: 'Japan Highlights',
    location: 'Tokyo, Kyoto, Osaka',
    image: '/api/placeholder/300/200',
    user: {
      name: 'John D.',
      avatar: '/api/placeholder/40/40'
    },
    rating: 4.8,
    duration: '10 days',
    stops: 12,
    likes: 234,
    saves: 156
  },
  {
    id: '2',
    title: 'Italian Adventure',
    location: 'Rome, Florence, Venice',
    image: '/api/placeholder/300/200',
    user: {
      name: 'Sarah L.',
      avatar: '/api/placeholder/40/40'
    },
    rating: 5.0,
    duration: '7 days',
    stops: 8,
    likes: 189,
    saves: 98
  },
  {
    id: '3',
    title: 'Scottish Highlands',
    location: 'Edinburgh, Inverness, Isle of Skye',
    image: '/api/placeholder/300/200',
    user: {
      name: 'Mike T.',
      avatar: '/api/placeholder/40/40'
    },
    rating: 4.9,
    duration: '8 days',
    stops: 10,
    likes: 156,
    saves: 89
  },
  {
    id: '4',
    title: 'Amalfi Coast Dream',
    location: 'Positano, Amalfi, Ravello',
    image: '/api/placeholder/300/200',
    user: {
      name: 'Emma W.',
      avatar: '/api/placeholder/40/40'
    },
    rating: 4.7,
    duration: '6 days',
    stops: 7,
    likes: 123,
    saves: 67
  }
]

const travelStories: TravelStory[] = [
  { id: 'add', user: { name: 'Add Story', avatar: '', initials: '+' }, isAddStory: true },
  { id: '1', user: { name: 'Emma', avatar: '/api/placeholder/60/60', initials: 'ES' } },
  { id: '2', user: { name: 'John', avatar: '/api/placeholder/60/60', initials: 'JD' } },
  { id: '3', user: { name: 'Mike', avatar: '/api/placeholder/60/60', initials: 'MT' } },
  { id: '4', user: { name: 'Sarah', avatar: '/api/placeholder/60/60', initials: 'SL' } }
]

export default function DashboardPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSession, setCurrentSession] = useState<any>(null)

  useEffect(() => {
    // Check for dummy session in localStorage for development
    if (process.env.NODE_ENV === 'development') {
      const dummySession = localStorage.getItem('dummy-session')
      if (dummySession) {
        try {
          const parsedSession = JSON.parse(dummySession)
          // Check if session is still valid
          if (new Date(parsedSession.expires) > new Date()) {
            setCurrentSession(parsedSession)
          } else {
            localStorage.removeItem('dummy-session')
          }
        } catch (error) {
          localStorage.removeItem('dummy-session')
        }
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TripPlanner</span>
            </Link>

            {/* Center Navigation - Hidden on mobile and tablet, visible on desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                Featured Routes
              </Link>
              <Link href={ROUTES.SOCIAL} className="text-gray-600 hover:text-purple-600 transition-colors">
                Social
              </Link>
              <div className="relative">
                <Link href={ROUTES.TRIPS.CREATE} className="text-gray-600 hover:text-purple-600 transition-colors flex items-center">
                  Plan Trip
                  <div className="ml-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </Link>
              </div>
            </nav>

            {/* Right Side - Hidden on mobile and tablet, visible on desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search routes, places..."
                  className="pl-10 w-64"
                />
              </div>
              
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </div>
              </Button>

              {/* User Avatar */}
              <Avatar className="w-8 h-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>{currentSession?.user?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
            </div>

            {/* Burger Menu Button - Only visible on tablet (640px-768px) */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="sm:flex md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile/Tablet Menu - Only visible when open on tablet */}
          {isMenuOpen && (
            <div className="sm:block md:hidden border-t border-gray-200 bg-white">
              <div className="py-4 space-y-4">
                <nav className="space-y-2">
                  <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Featured Routes
                  </Link>
                  <Link href={ROUTES.SOCIAL} className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Social
                  </Link>
                  <Link href={ROUTES.TRIPS.CREATE} className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Plan Trip
                  </Link>
                </nav>
                <div className="border-t border-gray-200 pt-4 px-4">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search routes, places..."
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Header - Only visible below 640px */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3 sm:hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TripPlanner</span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </div>
            </div>

            {/* Search */}
            <Search className="w-6 h-6 text-gray-600" />

            {/* User Avatar */}
            <Avatar className="w-8 h-8">
              <AvatarImage src="/api/placeholder/32/32" />
              <AvatarFallback>{currentSession?.user?.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Plan Your Dream Journey
          </h1>
          <p className="text-base md:text-lg mb-6 opacity-90">
            Create, share and discover amazing trip routes from travelers around the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create New Trip
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MapPin className="w-4 h-4 mr-2" />
              Explore Routes
            </Button>
          </div>
        </div>
      </section>

      <div className="px-4 pb-20">
        {/* Travel Stories Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Travel Stories</h2>
            <Link href="#" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              View All
            </Link>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-2">
            {travelStories.map((story) => (
              <div key={story.id} className="flex flex-col items-center space-y-2 min-w-[80px]">
                {story.isAddStory ? (
                  <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:border-purple-400 transition-colors">
                    <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                ) : (
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={story.user.avatar} />
                    <AvatarFallback>{story.user.initials}</AvatarFallback>
                  </Avatar>
                )}
                <span className="text-xs text-gray-600 text-center">
                  {story.user.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Top Rated Routes Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Top Rated Routes</h2>
            <Link href="#" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              View All Routes
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topRatedRoutes.map((route) => (
              <Card key={route.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-32 md:h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white w-8 h-8 p-0">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3 md:p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-base md:text-lg">{route.title}</h3>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">{route.location}</p>

                  <div className="flex items-center space-x-2 mb-2 md:mb-3">
                    <Avatar className="w-5 h-5 md:w-6 md:h-6">
                      <AvatarImage src={route.user.avatar} />
                      <AvatarFallback className="text-xs">{route.user.name}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs md:text-sm text-gray-600">{route.user.name}</span>
                  </div>

                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(route.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-xs md:text-sm font-medium ml-1">{route.rating}</span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-600">
                      {route.duration} • {route.stops} stops
                    </span>
                  </div>

                  <Button className="w-full" size="sm">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    Add to My Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trending Viewpoints Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Trending Viewpoints</h2>
            <Link href="#" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              See All
            </Link>
          </div>

          <Card className="overflow-hidden">
            <div className="relative h-48 md:h-96 bg-gradient-to-br from-blue-400 to-purple-600">
              {/* Map Mockup */}
              <div className="absolute inset-0 bg-white/10">
                {/* Map Points */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white"></div>

                {/* Route Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M 25% 25% Q 50% 50% 75% 75%"
                    stroke="purple"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>

              {/* Zoom Controls */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 flex flex-col space-y-1 md:space-y-2">
                <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white w-6 h-6 md:w-8 md:h-8 p-0">
                  +
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white w-6 h-6 md:w-8 md:h-8 p-0">
                  -
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Stats */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <Card>
              <CardContent className="p-3 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">My Trips</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <div className="p-2 md:p-3 rounded-full bg-blue-100 text-blue-600">
                    <Route className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">Saved Routes</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">28</p>
                  </div>
                  <div className="p-2 md:p-3 rounded-full bg-green-100 text-green-600">
                    <Bookmark className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">Followers</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">156</p>
                  </div>
                  <div className="p-2 md:p-3 rounded-full bg-purple-100 text-purple-600">
                    <Users className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm font-medium text-gray-600">Total Likes</p>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">342</p>
                  </div>
                  <div className="p-2 md:p-3 rounded-full bg-red-100 text-red-600">
                    <Heart className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-8">
          <Card className="bg-purple-600 text-white">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Plan Your Next Adventure?</h3>
              <p className="text-base md:text-lg mb-4 md:mb-6 opacity-90">
                Join thousands of travelers creating and sharing amazing trip routes around the world.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <MapPin className="w-4 h-4 mr-2" />
                Start Planning Now
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 sm:hidden">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center space-y-1">
            <Home className="w-6 h-6 text-purple-600" />
            <span className="text-xs font-medium text-purple-600">Home</span>
          </Link>
          <Link href="/explore" className="flex flex-col items-center space-y-1">
            <Compass className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Explore</span>
          </Link>
          <Link href="/trip/create" className="flex flex-col items-center space-y-1">
            <Plus className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Create</span>
          </Link>
          <Link href="/social" className="flex flex-col items-center space-y-1">
            <Users className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Social</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center space-y-1">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Help Button */}
      <div className="fixed bottom-20 right-4 sm:bottom-8">
        <Button className="w-12 h-12 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-lg">
          <HelpCircle className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

