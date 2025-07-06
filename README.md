# Video-Tube Backend API

A robust backend API for a YouTube-like video streaming platform built with Node.js, Express, and MongoDB. This project provides comprehensive functionality for video management, user authentication, social features, and content interaction.

## 🚀 Features

### Core Features
- **User Authentication & Authorization**: Secure JWT-based authentication with refresh tokens
- **Video Management**: Upload, stream, and manage video content with Cloudinary integration
- **User Profiles**: Complete user profiles with avatars and cover images
- **Social Features**: Like, comment, and interact with videos
- **Playlist Management**: Create and manage video playlists
- **Subscription System**: Subscribe to channels and manage subscriptions
- **Dashboard Analytics**: User dashboard with statistics and insights
- **Tweet Integration**: Social media integration for sharing content

### Technical Features
- **RESTful API**: Well-structured REST endpoints
- **File Upload**: Secure file upload with Multer and Cloudinary
- **Database**: MongoDB with Mongoose ODM
- **Security**: Password hashing with bcrypt, CORS protection
- **Pagination**: Efficient data pagination for large datasets
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer + Cloudinary
- **Password Hashing**: bcrypt
- **Development**: Nodemon, Prettier
- **Environment**: dotenv

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Video-Tube
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_EXPIRY=10d
   CORS_ORIGIN=http://localhost:3000
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:8000`

## 📚 API Endpoints

### Authentication
- `POST /api/v1/users/register` - User registration
- `POST /api/v1/users/login` - User login
- `POST /api/v1/users/logout` - User logout
- `POST /api/v1/users/refresh-token` - Refresh access token

### User Management
- `GET /api/v1/users/current-user` - Get current user profile
- `PATCH /api/v1/users/update-account` - Update user account
- `PATCH /api/v1/users/avatar` - Update user avatar
- `PATCH /api/v1/users/cover-image` - Update cover image
- `GET /api/v1/users/c/:username` - Get user channel profile
- `GET /api/v1/users/watch-history` - Get user watch history

### Video Management
- `POST /api/v1/videos` - Upload video
- `GET /api/v1/videos/:videoId` - Get video by ID
- `PATCH /api/v1/videos/:videoId` - Update video
- `DELETE /api/v1/videos/:videoId` - Delete video
- `PATCH /api/v1/videos/:videoId/publish` - Toggle video publish status
- `PATCH /api/v1/videos/:videoId/views` - Increment video views

### Comments
- `POST /api/v1/comments/:videoId` - Add comment to video
- `GET /api/v1/comments/:videoId` - Get video comments
- `PATCH /api/v1/comments/:commentId` - Update comment
- `DELETE /api/v1/comments/:commentId` - Delete comment

### Likes
- `POST /api/v1/likes/toggle/v/:videoId` - Toggle video like
- `POST /api/v1/likes/toggle/c/:commentId` - Toggle comment like
- `POST /api/v1/likes/toggle/t/:tweetId` - Toggle tweet like
- `GET /api/v1/likes/v/:videoId` - Get video likes
- `GET /api/v1/likes/c/:commentId` - Get comment likes
- `GET /api/v1/likes/t/:tweetId` - Get tweet likes

### Subscriptions
- `POST /api/v1/subscriptions/:channelId` - Subscribe to channel
- `DELETE /api/v1/subscriptions/:channelId` - Unsubscribe from channel
- `GET /api/v1/subscriptions/u/:subscriberId` - Get user subscriptions

### Playlists
- `POST /api/v1/playlist` - Create playlist
- `GET /api/v1/playlist/user/:userId` - Get user playlists
- `GET /api/v1/playlist/:playlistId` - Get playlist by ID
- `PATCH /api/v1/playlist/:playlistId` - Update playlist
- `DELETE /api/v1/playlist/:playlistId` - Delete playlist
- `POST /api/v1/playlist/:playlistId/:videoId` - Add video to playlist
- `DELETE /api/v1/playlist/:playlistId/:videoId` - Remove video from playlist

### Dashboard
- `GET /api/v1/dashboard/stats` - Get dashboard statistics
- `GET /api/v1/dashboard/videos` - Get user videos
- `GET /api/v1/dashboard/channel-stats` - Get channel statistics

### Health Check
- `GET /api/v1/healthcheck` - API health check

## 🗄️ Database Models

### User Model
- Username, email, full name
- Avatar and cover image (Cloudinary URLs)
- Password (hashed with bcrypt)
- Watch history
- JWT refresh tokens

### Video Model
- Video file and thumbnail (Cloudinary URLs)
- Title, description, duration
- Views count and publish status
- Owner reference

### Additional Models
- **Comment**: Video comments with user references
- **Like**: Like system for videos, comments, and tweets
- **Subscription**: Channel subscription management
- **Playlist**: Video playlist functionality
- **Tweet**: Social media integration

## 🔧 Development Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 📁 Project Structure

```
src/
├── controllers/     # Request handlers
├── models/         # Database models
├── routes/         # API routes
├── middlewares/    # Custom middleware
├── utils/          # Utility functions
├── db/            # Database connection
├── app.js         # Express app configuration
├── index.js       # Server entry point
└── constants.js   # Application constants
```

## 🔒 Security Features

- JWT-based authentication with refresh tokens
- Password hashing with bcrypt
- CORS protection
- Input validation and sanitization
- Secure file upload with size limits
- Environment variable protection

## 🌐 External Services

- **Cloudinary**: Video and image storage
- **MongoDB Atlas**: Database hosting (optional)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Karan**

## 🆘 Support

For support and questions, please open an issue in the repository or contact the author.

---

**Note**: Make sure to configure all environment variables properly before running the application. The application requires a MongoDB database and Cloudinary account for full functionality.
