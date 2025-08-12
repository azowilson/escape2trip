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
  Check,
  Zap,
  Smartphone,
  Target,
  Award,
  Clock,
  Shield,
  CreditCard,
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Route,
    title: "Smart Route Planning",
    description: "AI-powered suggestions help you create optimal routes with the best viewpoints and attractions.",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Social Community",
    description: "Share your adventures and discover routes from fellow travelers around the world.",
    color: "text-purple-600"
  },
  {
    icon: MapPin,
    title: "Interactive Maps",
    description: "Visualize your journey with detailed maps showing all viewpoints and attractions.",
    color: "text-green-600"
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Choose Destination",
    description: "Select your dream destination or explore our curated recommendations.",
    color: "bg-purple-500"
  },
  {
    step: "2",
    title: "Plan Your Route",
    description: "Use our smart planner to create the perfect itinerary with viewpoints and stops.",
    color: "bg-green-500"
  },
  {
    step: "3",
    title: "Share & Explore",
    description: "Share your journey with the community and discover routes from other travelers.",
    color: "bg-orange-500"
  }
]

const pricingPlans = [
  {
    name: "Explorer",
    price: "$0",
    period: "forever",
    description: "Perfect for casual travelers and beginners",
    button: "Get Started",
    popular: false,
    features: [
      "Up to 3 trip plans",
      "Basic route planning",
      "Community access",
      "Standard maps"
    ]
  },
  {
    name: "Adventurer",
    price: "$9.99",
    period: "/month",
    description: "For travelers who want premium features",
    button: "Start 7-Day Free Trial",
    popular: true,
    features: [
      "Unlimited trip plans",
      "Advanced route optimization",
      "AI route suggestions",
      "Premium maps & offline access",
      "Priority support",
      "No ads"
    ]
  },
  {
    name: "Travel Pro",
    price: "$24.99",
    period: "/month",
    description: "For travel agencies and professional guides",
    button: "Contact Sales",
    popular: false,
    features: [
      "Everything in Adventurer",
      "Team collaboration (up to 10)",
      "Client sharing & white labeling",
      "Advanced analytics",
      "Dedicated account manager",
      "API access"
    ]
  }
]

const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated amount for the remainder of your billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for your convenience."
  }
]

const testimonials = [
  {
    quote: "TripPlanner's AI suggestions helped me discover hidden gems I never would have found on my own. The route optimization is incredible!",
    author: "Emma Johnson",
    role: "Travel Blogger",
    rating: 5
  },
  {
    quote: "The community features are amazing. I've connected with travelers from around the world and discovered incredible routes.",
    author: "Michael Chen",
    role: "Adventure Photographer",
    rating: 5
  },
  {
    quote: "Planning trips has never been easier. The interface is intuitive and the offline maps saved me multiple times.",
    author: "Sarah Williams",
    role: "Solo Traveler",
    rating: 5
  }
]

export default function HomePage() {
  const [isYearly, setIsYearly] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TripPlanner</span>
            </Link>

            {/* Navigation - Hidden on mobile and tablet, visible on desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                Features
              </Link>
              <Link href="#routes" className="text-gray-600 hover:text-purple-600 transition-colors">
                Routes
              </Link>
              <Link href="#community" className="text-gray-600 hover:text-purple-600 transition-colors">
                Community
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                Pricing
              </Link>
            </nav>

            {/* Auth Buttons - Hidden on mobile and tablet, visible on desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-purple-600 transition-colors">
                Sign in
              </Link>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
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
                  <Link href="#features" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Features
                  </Link>
                  <Link href="#routes" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Routes
                  </Link>
                  <Link href="#community" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Community
                  </Link>
                  <Link href="#pricing" className="block px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors">
                    Pricing
                  </Link>
                </nav>
                <div className="border-t border-gray-200 pt-4 px-4 space-y-2">
                  <Link href="/login" className="block text-gray-600 hover:text-purple-600 transition-colors">
                    Sign in
                  </Link>
                  <Button asChild className="w-full">
                    <Link href="/register">Get Started</Link>
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
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TripPlanner</span>
          </div>

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Plan Your Dream{" "}
                <span className="text-purple-600">Journey</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
                Create, share and discover amazing trip routes with our intelligent planning platform. Connect with travelers worldwide and turn your wanderlust into reality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Play className="w-4 h-4 mr-2" />
                  Start Planning Free
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold">50K+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Route className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold">10K+ Routes Created</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9★ User Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Mockup */}
            <div className="relative">
              <div className="relative mx-auto lg:mx-0 w-80 h-96 bg-white rounded-2xl shadow-2xl transform rotate-3">
                <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl">
                  {/* Map Mockup */}
                  <div className="absolute inset-0 bg-white/20 rounded-xl">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  {/* Sunset Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-400 to-transparent rounded-b-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose TripPlanner?</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make trip planning effortless and enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg lg:text-xl text-gray-600">Get started in just three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${step.color} text-white flex items-center justify-center text-2xl font-bold`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Arrow */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8">Choose the plan that's right for your travel needs</p>

            {/* Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-gray-600 ${!isYearly ? 'font-semibold' : ''}`}>Monthly</span>
              <div className="relative">
                <input 
                  type="checkbox" 
                  id="toggle" 
                  className="sr-only" 
                  checked={isYearly}
                  onChange={(e) => setIsYearly(e.target.checked)}
                />
                <label htmlFor="toggle" className="block w-14 h-8 bg-gray-200 rounded-full cursor-pointer">
                  <div className={`block w-6 h-6 bg-white rounded-full shadow transform transition-transform ${isYearly ? 'translate-x-7' : ''}`}></div>
                </label>
              </div>
              <span className={`text-gray-900 ${isYearly ? 'font-semibold' : ''}`}>Yearly</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Save 20%</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-purple-500 shadow-xl scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <Button
                    className={`w-full mb-6 ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    {plan.button}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Travelers Say</h2>
            <p className="text-lg lg:text-xl text-gray-600">Join thousands of satisfied users worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Join over 50,000 travelers who trust TripPlanner for their journey planning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              <Check className="w-4 h-4 mr-2" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TripPlanner</span>
              </div>
              <p className="text-gray-400 mb-6">
                Plan, share and discover amazing trips around the world with our intelligent platform.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-sm">y</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Mobile App</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Travel Guides</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 TripPlanner. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>

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
