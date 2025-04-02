# IntelliSQR--Assignment


## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Running the Project](#running-the-project)
- [Features](#features)
- [Error Handling](#error-handling)
- [Demonstration](#demonstration)


---

## Project Overview
This is a full-stack application built using React (with TypeScript) for the frontend and Node.js (with Prisma) for the backend. The application follows modern development practices and integrates essential libraries for validation, form handling, and API interaction. Mongodb atlas database used in **Prisma**, and Prisma Client is used for database interactions.

---

## Technologies Used
### Frontend:
- **React (TypeScript)**
- **Vite** (for fast development)
- **Zod** (for schema validation)
- **React Hook Form** (for form handling)
- **React Query** (for API data management)
- **CSS Modules** (for styling)

### Backend:
- **Node.js (TypeScript)**
- **Express.js** (for handling API requests)
- **MongoDB Atlas** (as the database)
- **Prisma Client** (for database interaction)
- **dotenv** (for environment variable management)

---

## Project Structure
### Backend:
```
backend/
│── prisma/
│   ├── schema.prisma  # Database schema for MongoDB
│── src/
│   ├── config/
│   │   ├── db.ts       # Database connection using Prisma Client
│   ├── controllers/
│   │   ├── auth.controller.ts # Authentication logic
│   ├── routes/
│   │   ├── auth.routes.ts     # Authentication API routes
│   ├── server.ts   # Main Express server
│── .env            # Environment variables
│── package.json    # Dependencies and scripts
```

### Frontend:
```
frontend/
│── src/
│   ├── assets/           # Static files
│   ├── zod/              # Implement schema validation for data integrity
│   ├── lib/              # Utility functions (axios.ts for API calls)
│   ├── pages/            # App pages (Login, Register, Home)
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Homepage.tsx
│   ├── store/            # State management (useAuthStore.ts)
│   ├── schemas.ts        # Validation schemas
│── package.json          # Dependencies and scripts
│── vite.config.ts        # Vite configuration
```

---

## Setup Instructions
### Backend Setup
1. **Clone the repository**:
   ```sh
   git clone <your-repo-url>
   cd backend
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Set up environment variables**:
   - Create a `.env` file in the `backend/` directory and add:
     ```env
     DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/dbname"
     ```
4. **Generate Prisma Client**:
   ```sh
   npx prisma generate
   ```
5. **Start the backend server**:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. **Navigate to frontend directory**:
   ```sh
   cd frontend
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Start the frontend server**:
   ```sh
   npm run dev
   ```

---

## Running the Project
Once both frontend and backend servers are running:
- Open `http://localhost:5173` to access the frontend.
- Backend API runs on `http://localhost:5000`.

---

## Features
- **User Authentication:** Users can register and log in using email and password.
- **Form Validation:** Uses `React Hook Form` and `Zod` for validation.
- **API Integration:** Frontend communicates with backend using `React Query`.
- **Database Management:** Uses Prisma Client for MongoDB interactions.

---

## Error Handling
- **Frontend:** Displays user-friendly error messages for form validation and API failures.
- **Backend:** Implements centralized error handling with middleware.

---

## Demonstration
A recorded video showcasing the working project, including:
- User authentication flow (signup/login)
- Form validation and API integration
- Error handling demonstration

📌 **[[Google Drive Link to Video]](https://drive.google.com/file/d/1ALLlBS0-mqnIXwRsYZs6bsMgs1AeghCH/view?usp=sharing)(#)** 

---

