export const APP_NAME = 'Escape2Trip'
export const APP_DESCRIPTION = 'Plan your perfect trip with our interactive route planner'

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/signin',
    LOGOUT: '/api/auth/signout',
    REGISTER: '/api/auth/register',
  },
  TRIPS: {
    LIST: '/api/trips',
    CREATE: '/api/trips',
    DETAIL: (id: string) => `/api/trips/${id}`,
    UPDATE: (id: string) => `/api/trips/${id}`,
    DELETE: (id: string) => `/api/trips/${id}`,
    WAYPOINTS: (id: string) => `/api/trips/${id}/waypoints`,
  },
  USERS: {
    PROFILE: '/api/users/profile',
    UPDATE: '/api/users/profile',
  },
  SOCIAL: {
    FOLLOW: (userId: string) => `/api/social/follow/${userId}`,
    UNFOLLOW: (userId: string) => `/api/social/unfollow/${userId}`,
    COMMENTS: (tripId: string) => `/api/social/trips/${tripId}/comments`,
    LIKES: (tripId: string) => `/api/social/trips/${tripId}/likes`,
  },
} as const

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  SOCIAL: '/social',
  TRIPS: {
    CREATE: '/trip/create',
    DETAIL: (id: string) => `/trip/${id}`,
    EDIT: (id: string) => `/trip/edit/${id}`,
  },
  EXPLORE: '/explore',
  PROFILE: '/profile',
} as const

export const MAP_CONFIG = {
  DEFAULT_CENTER: { lat: 40.7128, lng: -74.0060 }, // New York
  DEFAULT_ZOOM: 10,
  STYLES: {
    STREETS: 'mapbox://styles/mapbox/streets-v11',
    OUTDOORS: 'mapbox://styles/mapbox/outdoors-v11',
    LIGHT: 'mapbox://styles/mapbox/light-v10',
    DARK: 'mapbox://styles/mapbox/dark-v10',
  },
} as const

export const TRIP_CATEGORIES = [
  'Adventure',
  'Beach',
  'City',
  'Cultural',
  'Food',
  'Nature',
  'Road Trip',
  'Romantic',
  'Solo',
  'Family',
] as const

export const TRANSPORTATION_MODES = [
  'driving',
  'walking',
  'cycling',
  'transit',
] as const
