export interface User {
  id: string
  email: string
  name: string | null
  avatar: string | null
  bio: string | null
  createdAt: Date
  updatedAt: Date
}

export interface UserProfile extends User {
  tripsCount: number
  followersCount: number
  followingCount: number
}

export interface AuthUser {
  id: string
  email: string
  name: string | null
  avatar: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface UpdateProfileData {
  name?: string
  bio?: string
  avatar?: string
}
