# Expenzo: Expense Tracker Backend

## Project Description
Expenzo is a robust backend service designed to streamline expense management. It offers APIs for user authentication, managing categories, tracking expenses, and generating detailed reports. Built with *Node.js, **Express, and **MongoDB, it employs **JWT-based authentication* to ensure data security and adheres to RESTful API principles.

## Key Features
- *User Authentication*: Secure Signup and Login.
- *Expense and Category Management*: CRUD operations.
- *Monthly Reports*: Summarized expense insights.
- *Token-Based Authentication*: Middleware for secure data access.
- *Error Handling*: Robust validations and error management.

---

## Setup Instructions

### Prerequisites
- *Node.js* (v14 or higher)
- *MongoDB* (local installation or cloud-based, e.g., MongoDB Atlas)

### Steps to Set Up the Project Locally

1. *Clone the Repository*
   bash
   git clone <repository_url>
   

2. *Install Dependencies*
   bash
   npm install express mongoose dotenv jsonwebtoken bcryptjs cors body-parser
   

3. *Configure Environment Variables*
   Create a .env file in the root directory with the following variables:
   env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ExpenzoDB?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   

4. *Start the Server*
   Run the server in development mode:
   node server.js
---

## API Endpoints

### 1. *User Authentication*
#### Signup
- *Endpoint*: POST /api/auth/signup
- *Request Body*:
  json
  {
    "name": "Ram Gupta",
    "email": "ram@example.com",
    "password": "password123"
  }
  
- *Response*:
  json
  {
    "token": "your_jwt_token"
  }
  

#### Login
- *Endpoint*: POST /api/auth/login
- *Request Body*:
  json
  {
    "email": "ram@example.com",
    "password": "password123"
  }
  
- *Response*:
  json
  {
    "token": "your_jwt_token"
  }
  

### 2. *Category Management*
#### Add Category
- *Endpoint*: POST /api/categories/
- *Headers*: Include x-auth-token.
- *Request Body*:
  json
  {
    "name": "Dessert",
    "description": "Exploring scrumptious delicacies"
  }
  
- *Response*:
  json
  {
    "name": "Dessert",
    "_id": "678e9834cb0f108c20391200",
    "__v": 0
  }
  

#### Get Categories
- *Endpoint*: GET /api/categories/
- *Headers*: Include x-auth-token.
- *Response*:
  json
  [
    {
      "_id": "678e9762cb0f108c203911f9",
      "name": "Travel",
      "__v": 0
    },
    {
      "_id": "678e9834cb0f108c20391200",
      "name": "Dessert",
      "__v": 0
    }
  ]
  

### 3. *Expense Management*
#### Add Expense
- *Endpoint*: POST /api/expenses
- *Headers*: Include x-auth-token.
- *Request Body*:
  json
  {
    "date": "2025-01-21",
    "category_id": "678e9834cb0f108c20391200",
    "amount": 280.08,
    "description": "Well spent money on sweets."
  }
  
- *Response*:
  json
  {
    "date": "2025-01-21T00:00:00.000Z",
    "category_id": "678e9834cb0f108c20391200",
    "amount": 280.08,
    "description": "Well spent money on sweets.",
    "_id": "678e989bcb0f108c20391203",
    "__v": 0
  }
  

#### Update Expense
- *Endpoint*: PUT /api/expenses/:id
- *Headers*: Include x-auth-token.
- *Request Body*:
  json
  {
    "date": "2025-01-20",
    "category_id": "678e9834cb0f108c20391200",
    "amount": 270.60,
    "description": "Fun foods"
  }
  

#### Delete Expense
- *Endpoint*: DELETE /api/expenses/:id
- *Headers*: Include x-auth-token.
- *Response*:
  json
  "Expense deleted."
  

#### Get Expenses by Category
- *Endpoint*: GET /api/expenses/category/:categoryId
- *Headers*: Include x-auth-token.
- *Response*:
  json
  [
    {
      "_id": "678e989bcb0f108c20391203",
      "date": "2025-01-20T00:00:00.000Z",
      "category_id": "678e9834cb0f108c20391200",
      "amount": 270.6,
      "description": "Fun foods",
      "__v": 0
    }
  ]
  

### 4. *Monthly Report*
- *Endpoint*: GET /api/expenses/monthly-report
- *Headers*: Include x-auth-token.

---

## Database Models

### User
javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


### Expense
javascript
const expenseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
});


### Category
javascript
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});


---

## Sample Data

### User Collection
json
[
  {
    "name": "Ram Gupta",
    "email": "ram.gupta@example.com",
    "password": "hashed_password_here"
  },
  {
    "name": "Sita Sharma",
    "email": "sita.sharma@example.com",
    "password": "hashed_password_here"
  }
]


### Category Collection
json
[
  { "name": "Food" },
  { "name": "Transport" },
  { "name": "Entertainment" }
]


### Expense Collection
json
[
  {
    "amount": 500,
    "description": "Grocery shopping",
    "date": "2025-01-20",
    "categoryId": "ObjectId_for_Food_category",
    "userId": "ObjectId_for_Ram_Gupta"
  },
  {
    "amount": 300,
    "description": "Movie night",
    "date": "2025-01-18",
    "categoryId": "ObjectId_for_Entertainment_category",
    "userId": "ObjectId_for_Ram_Gupta"
  }
]
