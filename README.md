# Salary Manager API

A simple Express and MongoDB-based API to manage employee salary records.

## Setup

1. Run `npm install` to install dependencies  
2. Start the server using `node index.js`  
3. Ensure MongoDB is running and your `.env` file has the correct connection URL

## Endpoints

### Create User
POST /users  
Body:
json
{
  "name": "Sakthi",
  "position": "Developer",
  "salary": 25000,
  "pendingSalary": 10000
}


### Get All Users

GET /users

### Get User by ID

GET /users/:id

### Get Users by Status

GET /users/status/:status

### Update Salary

PUT /users/:id
Body:
json
{
  "paid": 5000
}


### Delete User

DELETE /users/:id

## Response Codes

201 Created - User added or salary fully paid
200 OK - Successful request
400 Bad Request - Missing or invalid input
404 Not Found - User not found
500 Internal Server Error - Server error

## Author

Sakthivel