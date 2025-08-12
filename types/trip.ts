export interface Trip {
  id: string
  title: string
  description: string | null
  isPublic: boolean
  startDate: Date | null
  endDate: Date | null
  budget: number | null
  userId: string
  user: User
  waypoints: Waypoint[]
  itinerary: Itinerary[]
  comments: Comment[]
  likes: Like[]
  createdAt: Date
  updatedAt: Date
}

export interface Waypoint {
  id: string
  name: string
  latitude: number
  longitude: number
  address: string | null
  order: number
  tripId: string
  createdAt: Date
}

export interface Itinerary {
  id: string
  day: number
  title: string
  description: string | null
  startTime: Date | null
  endTime: Date | null
  location: string | null
  tripId: string
  createdAt: Date
}

export interface CreateTripData {
  title: string
  description?: string
  startDate?: Date
  endDate?: Date
  budget?: number
  isPublic?: boolean
}

export interface UpdateTripData extends Partial<CreateTripData> {}

export interface CreateWaypointData {
  name: string
  latitude: number
  longitude: number
  address?: string
  order: number
}

export interface CreateItineraryData {
  day: number
  title: string
  description?: string
  startTime?: Date
  endTime?: Date
  location?: string
}

export interface TripFilters {
  search?: string
  category?: string
  startDate?: Date
  endDate?: Date
  minBudget?: number
  maxBudget?: number
  isPublic?: boolean
}

export interface TripStats {
  totalDistance: number
  totalDuration: number
  waypointsCount: number
  daysCount: number
}
