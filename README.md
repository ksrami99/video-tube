# YouTube Clone Backend API

A robust backend API for a YouTube clone application with user authentication and profile management.

## API Endpoints

### User Authentication

#### Register User
- **POST** `/api/v1/users/register`
- **Description**: Register a new user with avatar and cover image
- **Request Body**:
```json
{
  "fullname": "John Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123",
  "avatar": [File],
  "coverImage": [File] // Optional
}
```
- **Response**:
```json
{
  "statusCode": 200,
  "data": {
    "fullname": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "avatar": "https://cloudinary.com/avatar-url",
    "coverImage": "https://cloudinary.com/cover-url"
  },
  "message": "User Registered Successfully",
  "success": true
}
```

#### Login User
- **POST** `/api/v1/users/login`
- **Description**: Login with username/email and password
- **Request Body**:
```json
{
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123"
}
```
- **Response**:
```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "fullname": "John Doe",
      "email": "john@example.com",
      "username": "johndoe",
      "avatar": "https://cloudinary.com/avatar-url",
      "coverImage": "https://cloudinary.com/cover-url"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
  },
  "message": "User logged In successfully",
  "success": true
}
```

#### Logout User
- **POST** `/api/v1/users/logout`
- **Description**: Logout the current user
- **Headers**: `Authorization: Bearer <access_token>`
- **Response**:
```json
{
  "statusCode": 200,
  "data": {},
  "message": "User Logged Out",
  "success": true
}
```

#### Refresh Access Token
- **POST** `/api/v1/users/refresh-token`
- **Description**: Get new access token using refresh token
- **Request Body**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```
- **Response**:
```json
{
  "statusCode": 200,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
  },
  "message": "success",
  "success": true
}
```

### User Profile Management

#### Get Current User
- **GET** `/api/v1/users/current-user`
- **Description**: Get current user's profile
- **Headers**: `Authorization: Bearer <access_token>`
- **Response**:
```json
{
  "statusCode": 200,
  "data": {
    "fullname": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "avatar": "https://cloudinary.com/avatar-url",
    "coverImage": "https://cloudinary.com/cover-url"
  },
  "message": "Current user fetched successfully",
  "success": true
}
```

#### Update Account Details
- **PATCH** `/api/v1/users/update-account`
- **Description**: Update user's fullname and email
- **Headers**: `Authorization: Bearer <access_token>`
- **Request Body**:
```json
{
  "fullname": "John Updated",
  "email": "john.updated@example.com"
}
```
- **Response**:
```json
{
  "statusCode": 200,
  "data": {
    "fullname": "John Updated",
    "email": "john.updated@example.com",
    "username": "johndoe",
    "avatar": "https://cloudinary.com/avatar-url",
    "coverImage": "https://cloudinary.com/cover-url"
  },
  "message": "user details updated successfully",
  "success": true
}
```

#### Update Avatar
- **PATCH** `/api/v1/users/avatar`
- **Description**: Update user's avatar
- **Headers**: `Authorization: Bearer <access_token>`
- **Request Body**: `FormData` with `avatar` file
- **Response**:
```json
{
  "statusCode": 200,
  "data": null,
  "message": "Avatar updated successfully",
  "success": true
}
```

#### Update Cover Image
- **PATCH** `/api/v1/users/cover-image`
- **Description**: Update user's cover image
- **Headers**: `Authorization: Bearer <access_token>`
- **Request Body**: `FormData` with `coverImage` file
- **Response**:
```json
{
  "statusCode": 200,
  "data": {
    "fullname": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "avatar": "https://cloudinary.com/avatar-url",
    "coverImage": "https://cloudinary.com/new-cover-url"
  },
  "message": "Avatar updated successfully",
  "success": true
}
```

#### Change Password
- **POST** `/api/v1/users/change-password`
- **Description**: Change user's password
- **Headers**: `Authorization: Bearer <access_token>`
- **Request Body**:
```json
{
  "oldPassword": "password123",
  "newPassword": "newpassword123"
}
```
- **Response**:
```json
{
  "statusCode": 200,
  "data": {},
  "message": "Password Changed Successfully",
  "success": true
}
```

## Error Responses

All endpoints return standardized error responses in the following format:

```json
{
  "statusCode": 400,
  "data": null,
  "message": "Error message here",
  "success": false,
  "errors": []
}
```

Common error status codes:
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 409: Conflict
- 500: Internal Server Error
