# Financial Management System - Backend

A robust backend API for a financial management application that handles expense tracking, budgeting, financial goals, and analytics.

## Features

- **User Authentication**: Secure registration and login system
- **Expense Management**: Track, categorize, and analyze expenses
- **Budget Planning**: Create and monitor budgets
- **Financial Goals**: Set and track financial goals
- **Shared Expenses**: Split and manage shared expenses
- **Recurring Expenses**: Schedule and manage recurring payments
- **Reports & Analytics**: Generate financial reports and insights
- **Profile Management**: User profile and settings customization

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **JWT**: Authentication mechanism
- **Mongoose**: MongoDB object modeling

## API Documentation

API documentation is available at `/api/docs` endpoint when the server is running.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd financial-management-backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   NODE_ENV=development
   ```

4. Start the server
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

### Demo Credentials

You can use the following credentials to test the application:

- **Email**: dhana@example.com
- **Password**: dhana@1234

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/logout` - Logout a user

### Profile Management
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile
- `POST /api/profile/change-password` - Change password
- `DELETE /api/profile` - Delete account

### Expense Management
- `GET /api/expenses` - Get all expenses
- `GET /api/expenses/:id` - Get expense by ID
- `POST /api/expenses` - Create an expense
- `PUT /api/expenses/:id` - Update an expense
- `DELETE /api/expenses/:id` - Delete an expense

### Budget Management
- `GET /api/budgets` - Get all budgets
- `POST /api/budgets` - Create a budget
- `PUT /api/budgets/:id` - Update a budget
- `DELETE /api/budgets/:id` - Delete a budget
- `GET /api/budgets/overview` - Get budget overview

### Financial Goals
- `POST /api/goals` - Create a financial goal
- `GET /api/goals` - Get all financial goals
- `PUT /api/goals/:id` - Update a financial goal
- `DELETE /api/goals/:id` - Delete a financial goal

### Shared Expenses
- `POST /api/shared-expenses` - Create shared expense
- `GET /api/shared-expenses` - Get shared expenses
- `PUT /api/shared-expenses/:id` - Update shared expense
- `DELETE /api/shared-expenses/:id` - Delete shared expense
- `POST /api/shared-expenses/:id/settle` - Settle expense

### Recurring Expenses
- `POST /api/recurring` - Schedule recurring expense
- `GET /api/recurring` - Get recurring expenses
- `PUT /api/recurring/:id` - Update recurring expense
- `DELETE /api/recurring/:id` - Delete recurring expense

### Reports
- `GET /api/reports/generate` - Generate a financial report

## Deployment

The backend is deployed on Render:
https://expense-tracker-backend-944r.onrender.com

## License

This project is licensed under the MIT License.
