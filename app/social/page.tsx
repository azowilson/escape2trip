'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ROUTES } from '@/lib/constants'
import {
  MapPin,
  Plus,
  Heart,
  MessageCircle,
  Users,
  Calendar,
  Search,
  Star,
  Bell,
  MoreHorizontal,
  Play,
  Eye,
  Share2,
  Bookmark,
  Filter,
  ArrowRight,
  ChevronDown,
  Camera,
  Route,
  Globe,
  TrendingUp,
  Home,
  Compass,
  User,
  HelpCircle,
  Send,
  Image,
  Smile,
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'

interface Post {
  id: string
  user: {
    name: string
    avatar: string
    handle: string
  }
  content: string
  image?: string
  route?: {
    title: string
    location: string
    image: string
    duration: string
    stops: number
  }
  likes: number
  comments: number
  shares: number
  timestamp: string
  isLiked?: boolean
}

interface TrendingDestination {
  id: string
  name: string
  image: string
  posts: number
  travelers: number
}

interface SuggestedFriend {
  id: string
  name: string
  avatar: string
  mutualFriends: number
  isFollowing?: boolean
}

const posts: Post[] = [
  {
    id: '1',
    user: {
      name: 'Emma Johnson',
      avatar: '/api/placeholder/40/40',
      handle: '@emma_travels'
    },
    content: 'Just completed an amazing road trip through the Scottish Highlands! The landscapes were absolutely breathtaking. Here\'s my route if anyone wants to follow in my footsteps 🏴󠁧󠁢󠁳󠁣󠁴󠁿✨',
    image: '/api/placeholder/400/300',
    route: {
      title: 'Scottish Highlands Adventure',
      location: 'Edinburgh, Inverness, Isle of Skye',
      image: '/api/placeholder/200/120',
      duration: '7 days',
      stops: 12
    },
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: '2 hours ago',
    isLiked: true
  },
  {
    id: '2',
    user: {
      name: 'Mike Chen',
      avatar: '/api/placeholder/40/40',
      handle: '@mike_adventures'
    },
    content: 'Found this hidden gem in Kyoto today! The bamboo forest was magical, especially early in the morning when it was just me and nature. 🌸 #Japan #Kyoto #Travel',
    image: '/api/placeholder/400/300',
    likes: 189,
    comments: 23,
    shares: 8,
    timestamp: '4 hours ago'
  },
  {
    id: '3',
    user: {
      name: 'Sarah Williams',
      avatar: '/api/placeholder/40/40',
      handle: '@sarah_wanderlust'
    },
    content: 'Planning my next adventure! Thinking about exploring the Amalfi Coast in Italy. Anyone have recommendations for must-visit spots? 🇮🇹',
    route: {
      title: 'Amalfi Coast Dream Trip',
      location: 'Positano, Amalfi, Ravello',
      image: '/api/placeholder/200/120',
      duration: '10 days',
      stops: 8
    },
    likes: 156,
    comments: 67,
    shares: 15,
    timestamp: '6 hours ago'
  }
]

const trendingDestinations: TrendingDestination[] = [
  {
    id: '1',
    name: 'Santorini, Greece',
    image: '/api/placeholder/60/60',
    posts: 1234,
    travelers: 567
  },
  {
    id: '2',
    name: 'Kyoto, Japan',
    image: '/api/placeholder/60/60',
    posts: 987,
    travelers: 432
  },
  {
    id: '3',
    name: 'Reykjavik, Iceland',
    image: '/api/placeholder/60/60',
    posts: 756,
    travelers: 234
  },
  {
    id: '4',
    name: 'Barcelona, Spain',
    image: '/api/placeholder/60/60',
    posts: 654,
    travelers: 321
  }
]

const suggestedFriends: SuggestedFriend[] = [
  {
    id: '1',
    name: 'Lisa Martinez',
    avatar: '/api/placeholder/40/40',
    mutualFriends: 12
  },
  {
    id: '2',
    name: 'David Kim',
    avatar: '/api/placeholder/40/40',
    mutualFriends: 8
  },
  {
    id: '3',
    name: 'Anna Rodriguez',
    avatar: '/api/placeholder/40/40',
    mutualFriends: 15
  },
  {
    id: '4',
    name: 'Tom Wilson',
    avatar: '/api/placeholder/40/40',
    mutualFriends: 6
  }
]

export default function SocialPage() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set(['1']))
  const [newPost, setNewPost] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLike = (postId: string) => {
    const newLikedPosts = new Set(likedPosts)
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId)
    } else {
      newLikedPosts.add(postId)
    }
    setLikedPosts(newLikedPosts)
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
              <Link href="/social" className="text-purple-600 font-semibold">
                Social
              </Link>
              <Link href="/trip/create" className="text-gray-600 hover:text-purple-600 transition-colors">
                Create Trip
              </Link>
            </nav>

            {/* Right Side - Hidden on mobile and tablet, visible on desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search posts, users..."
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
                  <Link href="/social" className="block px-4 py-2 text-purple-600 font-semibold hover:bg-gray-50 transition-colors">
                    Social
                  </Link>
                  <Link href="/trip/create" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Create Trip
                  </Link>
                </nav>
                <div className="border-t border-gray-200 pt-4 px-4">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search posts, users..."
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
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar - User Profile (Hidden on mobile) */}
        <div className="hidden lg:block lg:w-80 bg-white border-r border-gray-200 p-6">
          {/* User Profile */}
          <div className="text-center mb-6">
            <Avatar className="w-20 h-20 mx-auto mb-4">
              <AvatarImage src="/api/placeholder/80/80" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
            <p className="text-gray-600">@john_traveler</p>
            <p className="text-sm text-gray-500 mt-2">Passionate traveler sharing adventures around the world</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">156</p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">2.3k</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">890</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <Button className="w-full" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Share Experience
            </Button>
            <Button variant="outline" className="w-full" size="sm">
              <Route className="w-4 h-4 mr-2" />
              Create Route
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:max-w-2xl">
          {/* Create Post Section */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/api/placeholder/40/40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="border border-gray-200 rounded-lg p-3">
                  <textarea
                    placeholder="Share your travel experience..."
                    className="w-full border-none resize-none focus:outline-none text-sm"
                    rows={3}
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <Image className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <Route className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button size="sm" disabled={!newPost.trim()}>
                    <Send className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4 p-4">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post.user.avatar} />
                      <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-sm">{post.user.name}</h3>
                        <span className="text-xs text-gray-500">{post.user.handle}</span>
                      </div>
                      <p className="text-xs text-gray-500">{post.timestamp}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-gray-900 mb-4">{post.content}</p>

                  {/* Post Image */}
                  {post.image && (
                    <div className="mb-4">
                      <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-48 md:h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Route Card */}
                  {post.route && (
                    <Card className="mb-4 border border-gray-200">
                      <div className="flex">
                        <img
                          src={post.route.image}
                          alt={post.route.title}
                          className="w-20 h-20 object-cover rounded-l-lg"
                        />
                        <div className="flex-1 p-3">
                          <h4 className="font-semibold text-sm">{post.route.title}</h4>
                          <p className="text-xs text-gray-600 mb-2">{post.route.location}</p>
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {post.route.duration}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {post.route.stops} stops
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center space-x-1 ${likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500'}`}
                      >
                        <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm">{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-500">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-gray-500">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">{post.shares}</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Trending & Suggestions (Hidden on mobile) */}
        <div className="hidden lg:block lg:w-80 bg-white border-l border-gray-200 p-6">
          {/* Trending Destinations */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Destinations</h3>
            <div className="space-y-3">
              {trendingDestinations.map((destination) => (
                <div key={destination.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{destination.name}</h4>
                    <p className="text-xs text-gray-500">{destination.posts} posts • {destination.travelers} travelers</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Friends */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Suggested Friends</h3>
            <div className="space-y-3">
              {suggestedFriends.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={friend.avatar} />
                      <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-sm">{friend.name}</h4>
                      <p className="text-xs text-gray-500">{friend.mutualFriends} mutual friends</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Follow
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
            <Plus className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Create</span>
          </Link>
          <Link href="/social" className="flex flex-col items-center space-y-1">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-xs font-medium text-purple-600">Social</span>
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
