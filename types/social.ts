export interface Comment {
  id: string
  content: string
  userId: string
  tripId: string
  user: User
  createdAt: Date
}

export interface Like {
  id: string
  userId: string
  tripId: string
  user: User
  createdAt: Date
}

export interface Follow {
  id: string
  followerId: string
  followingId: string
  follower: User
  following: User
  createdAt: Date
}

export interface CreateCommentData {
  content: string
}

export interface SocialStats {
  followersCount: number
  followingCount: number
  tripsCount: number
  likesCount: number
  commentsCount: number
}

export interface UserFeed {
  trips: Trip[]
  hasMore: boolean
  nextCursor?: string
}
