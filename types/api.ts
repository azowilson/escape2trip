export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface ApiError {
  message: string
  status: number
  code?: string
}

export interface SearchParams {
  page?: number
  limit?: number
  search?: string
  sort?: string
  order?: 'asc' | 'desc'
}

export interface TripSearchParams extends SearchParams {
  category?: string
  startDate?: string
  endDate?: string
  minBudget?: number
  maxBudget?: number
  isPublic?: boolean
  userId?: string
}
