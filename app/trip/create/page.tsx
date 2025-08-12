'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  MapPin,
  Plus,
  Calendar,
  Clock,
  Navigation,
  Save,
  Layers,
  ZoomIn,
  ZoomOut,
  X,
  Camera,
  Star,
  Eye,
  Home,
  Compass,
  Users,
  User,
  HelpCircle,
  Menu,
  Bell,
  Route
} from 'lucide-react'
import Link from 'next/link'

interface RoutePoint {
  id: string
  name: string
  type: string
  color: string
  order: number
}

interface FeaturedViewpoint {
  id: string
  name: string
  image: string
  rating: number
  visits: string
  category: string
}

const routePoints: RoutePoint[] = [
  { id: '1', name: 'Central Park, NYC', type: 'Start Point', color: 'purple', order: 1 },
  { id: '2', name: 'Times Square', type: 'Tourist attraction', color: 'green', order: 2 },
  { id: '3', name: 'Brooklyn Bridge', type: 'Landmark', color: 'orange', order: 3 },
  { id: '4', name: 'JFK Airport', type: 'End Point', color: 'red', order: 4 }
]

const featuredViewpoints: FeaturedViewpoint[] = [
  {
    id: '1',
    name: 'Statue of Liberty',
    image: '/api/placeholder/60/60',
    rating: 4.8,
    visits: '2.3k',
    category: 'Landmark'
  },
  {
    id: '2',
    name: 'Empire State Building',
    image: '/api/placeholder/60/60',
    rating: 4.7,
    visits: '1.8k',
    category: 'Landmark'
  },
  {
    id: '3',
    name: 'High Line Park',
    image: '/api/placeholder/60/60',
    rating: 4.6,
    visits: '1.2k',
    category: 'Park'
  }
]

export default function TripCreatePage() {
  const [tripName, setTripName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [budget, setBudget] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getColorClass = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-500'
      case 'blue': return 'bg-blue-500'
      case 'green': return 'bg-green-500'
      case 'yellow': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

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
              <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link href="/explore" className="text-gray-600 hover:text-purple-600 transition-colors">
                Explore
              </Link>
              <Link href="/social" className="text-gray-600 hover:text-purple-600 transition-colors">
                Social
              </Link>
              <Link href="/trip/create" className="text-purple-600 font-semibold">
                Create Trip
              </Link>
            </nav>

            {/* Right Side - Hidden on mobile and tablet, visible on desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Save Button */}
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              
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
                <AvatarFallback>U</AvatarFallback>
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
                  <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Home
                  </Link>
                  <Link href="/explore" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Explore
                  </Link>
                  <Link href="/social" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Social
                  </Link>
                  <Link href="/trip/create" className="block px-4 py-2 text-purple-600 font-semibold hover:bg-gray-50 transition-colors">
                    Create Trip
                  </Link>
                </nav>
                <div className="border-t border-gray-200 pt-4 px-4 space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                  </Button>
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
            {/* Save Button */}
            <Button variant="outline" size="sm">
              <Save className="w-4 h-4" />
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </div>
            </div>

            {/* User Avatar */}
            <Avatar className="w-8 h-8">
              <AvatarImage src="/api/placeholder/32/32" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar - Trip Details */}
        <div className={`${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white border-r border-gray-200 p-4 lg:p-6 overflow-y-auto transition-transform duration-300 ease-in-out`}>
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold text-gray-900">Trip Details</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSidebar(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Trip Details Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 lg:block hidden">Trip Details</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="tripName" className="text-sm font-medium text-gray-700">
                  Trip Name
                </Label>
                <Input
                  id="tripName"
                  value={tripName}
                  onChange={(e) => setTripName(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                  Start Date
                </Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="endDate" className="text-sm font-medium text-gray-700">
                  End Date
                </Label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                  Budget
                </Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500">$0 - $500</SelectItem>
                    <SelectItem value="500-1000">$500 - $1000</SelectItem>
                    <SelectItem value="1000-2000">$1000 - $2000</SelectItem>
                    <SelectItem value="2000+">$2000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Trip Statistics Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Trip Statistics</h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Total Points</span>
                </div>
                <span className="text-lg font-bold text-blue-600">7</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Duration</span>
                </div>
                <span className="text-lg font-bold text-green-600">5 days</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center">
                  <Navigation className="w-5 h-5 text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Distance</span>
                </div>
                <span className="text-lg font-bold text-orange-600">324 km</span>
              </div>
            </div>
          </div>

          {/* Save Trip Button */}
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
            <Save className="w-4 h-4 mr-2" />
            Save Trip
          </Button>
        </div>

        {/* Central Area - Interactive Map */}
        <div className="flex-1 flex flex-col">
          {/* Map Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900">Plan Your Route</h1>
              
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Layers className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Layers</span>
                </Button>
                <Button variant="outline" size="sm">
                  <Route className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Auto Route</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="flex-1 relative bg-gradient-to-br from-blue-100 to-green-100 p-4 md:p-8">
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                +
              </Button>
              <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                -
              </Button>
            </div>

            {/* Interactive Map */}
            <div className="relative w-full h-full bg-white/20 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
              {/* Map Waypoints */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute top-1/3 left-1/3 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute bottom-1/3 right-1/3 w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>

              {/* Route Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 25% 25% Q 33% 33% 67% 67% Q 75% 75% 75% 75%"
                  stroke="blue"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>

              {/* Center Instructions */}
              <div className="text-center text-gray-600 px-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
                </div>
                <p className="text-base md:text-lg font-medium">Interactive Map Area</p>
                <p className="text-sm">Click to add waypoints</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Route Points & Featured Viewpoints */}
        <div className="hidden xl:block xl:w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
          {/* Your Route Points Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Route Points</h2>
            
            <div className="space-y-3">
              {routePoints.map((point) => (
                <div key={point.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${getColorClass(point.color)} mr-3`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{point.name}</p>
                      <p className="text-xs text-gray-500">{point.type}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-500">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4 border-dashed">
              <Plus className="w-4 h-4 mr-2" />
              Add Custom Point
            </Button>
          </div>

          {/* Featured Viewpoints Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Featured Viewpoints</h2>
            
            <div className="space-y-3">
              {featuredViewpoints.map((viewpoint) => (
                <div key={viewpoint.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={viewpoint.image}
                    alt={viewpoint.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{viewpoint.name}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{viewpoint.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600 ml-1">{viewpoint.visits}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 sm:hidden">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center space-y-1">
            <Home className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Home</span>
          </Link>
          <Link href="/explore" className="flex flex-col items-center space-y-1">
            <Compass className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Explore</span>
          </Link>
          <Link href="/trip/create" className="flex flex-col items-center space-y-1">
            <Plus className="w-6 h-6 text-purple-600" />
            <span className="text-xs font-medium text-purple-600">Create</span>
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

      {/* Mobile Overlay */}
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </div>
  )
}
