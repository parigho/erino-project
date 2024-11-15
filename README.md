# Contact Management System

## Description
A web application for managing contacts with CRUD operations. Built using ReactJS (frontend), NodeJS (backend), and MongoDB (database).

## Features
- Add new contacts.
- View all contacts with pagination and sorting.
- Edit contact details.
- Delete contacts.

## Tech Stack
- **Frontend**: ReactJS, Material UI
- **Backend**: NodeJS, Express
- **Database**: MongoDB

## Setup Instructions
1. Clone the repository.
2. Setup Backend:
   - Navigate to `backend/`.
   - Run `npm install`.
   - Set up `.env` with `MONGO_URI`.
   - Run `node app.js`.
3. Setup Frontend:
   - Navigate to `frontend/`.
   - Run `npm install`.
   - Start the app with `npm start`.

## Challenges and Solutions
- **Validation**: Ensured user inputs are validated on both frontend and backend.
- **Pagination**: Used MUI components for easy implementation.

## API Endpoints
- `POST /contacts` - Create a contact.
- `GET /contacts` - Get all contacts.
- `PUT /contacts/:id` - Update contact.
- `DELETE /contacts/:id` - Delete contact.
