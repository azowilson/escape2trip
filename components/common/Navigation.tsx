'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'
import { MapPin, User, LogOut, Plus } from 'lucide-react'

export function Navigation() {
  const { data: session, status } = useSession()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Escape2Trip</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href={ROUTES.SOCIAL} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Social
            </Link>
            <Link 
              href={ROUTES.EXPLORE} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Explore
            </Link>
            {session?.user?.id && (
              <Link 
                href={ROUTES.DASHBOARD} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : session?.user?.id ? (
              <div className="flex items-center space-x-4">
                <Button asChild size="sm">
                  <Link href={ROUTES.TRIPS.CREATE}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Trip
                  </Link>
                </Button>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{session.user.name}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={ROUTES.LOGIN}>Sign In</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={ROUTES.REGISTER}>Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
