# Escape2Trip - Trip Route Planning Web App

A modern, interactive trip planning application built with Next.js 14, TypeScript, and Prisma. Plan your perfect adventure with interactive route planning, social features, and a beautiful user interface.

## 🚀 Features

### Core Features
- **Interactive Route Planning**: Create detailed routes with multiple waypoints
- **Smart Itinerary Builder**: Plan day-by-day activities and manage schedules
- **Social Travel Community**: Share trips, discover destinations, connect with travelers
- **Offline Maps**: Download maps for offline navigation
- **Global Coverage**: Access detailed maps and information worldwide
- **Personalized Experience**: Get recommendations based on preferences

### Technical Features
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with multiple providers
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui components
- **State Management**: Zustand for client state
- **Real-time Updates**: Socket.io integration (planned)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Date/Time**: date-fns

### Backend & Database
- **API**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **File Storage**: AWS S3 (planned)
- **Real-time**: Socket.io (planned)

### DevOps & Deployment
- **Hosting**: Vercel
- **Database**: PlanetScale/Supabase
- **Version Control**: Git

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd escape2trip
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/escape2trip"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Google OAuth (optional)
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   
   # Mapbox (optional)
   MAPBOX_ACCESS_TOKEN=""
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

The application uses the following main models:

- **User**: User accounts and profiles
- **Trip**: Trip information and metadata
- **Waypoint**: Route destinations and coordinates
- **Itinerary**: Day-by-day activity planning
- **Comment**: Social comments on trips
- **Like**: Social likes on trips
- **Follow**: User following relationships

## 🚀 Getting Started

### Creating Your First Trip

1. **Sign up/Login**: Create an account or sign in
2. **Create Trip**: Click "Create New Trip" from the dashboard
3. **Add Details**: Fill in trip title, description, dates, and budget
4. **Set Privacy**: Choose public or private visibility
5. **Add Waypoints**: Use the interactive map to add destinations
6. **Plan Itinerary**: Create day-by-day activities
7. **Share**: Share your trip with the community

### Key Pages

- **Home** (`/`): Landing page with features and CTA
- **Dashboard** (`/dashboard`): User's trips and overview
- **Create Trip** (`/trip/create`): Trip creation form
- **Trip Details** (`/trip/[id]`): Individual trip view
- **Explore** (`/explore`): Discover public trips
- **Profile** (`/profile`): User profile management

## 🔧 Development

### Project Structure

```
escape2trip/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── trip/              # Trip-related pages
│   └── explore/           # Explore page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   ├── trip/             # Trip-related components
│   └── social/           # Social feature components
├── lib/                  # Utility libraries
├── prisma/               # Database schema and migrations
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

### Database Commands

- `npx prisma generate`: Generate Prisma client
- `npx prisma db push`: Push schema changes to database
- `npx prisma studio`: Open Prisma Studio
- `npx prisma migrate dev`: Create and apply migrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ User authentication
- ✅ Trip creation and management
- ✅ Basic social features
- ✅ Responsive design

### Phase 2 (Planned)
- 🚧 Interactive map integration
- 🚧 Real-time collaboration
- 🚧 Advanced route optimization
- 🚧 Mobile app

### Phase 3 (Future)
- 📋 AI-powered recommendations
- 📋 Advanced analytics
- 📋 Integration with booking platforms
- 📋 Multi-language support

---

Built with ❤️ by the Escape2Trip team
