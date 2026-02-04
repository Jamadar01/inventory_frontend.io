# Inventory Management Frontend

A React-based frontend application for managing inventory with full CRUD operations.

## Features

- View all products in a table
- Create new products
- Edit existing products
- Delete products
- Responsive design
- Modern UI with gradient header
- Form validation
- Error handling

## Tech Stack

- React 18
- Vite
- Axios for API calls
- CSS3 for styling

## Prerequisites

- Node.js (v14 or higher)
- Backend API running on http://localhost:8000

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

1. Make sure the backend API is running on http://localhost:8000

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   ├── ProductList.jsx    # Product table component
│   └── ProductForm.jsx    # Create/Edit form component
├── services/
│   └── api.js             # API service with axios
├── App.jsx                # Main application component
├── App.css                # Application styles
└── main.jsx               # Application entry point
```

## Features Overview

### Product List
- Displays all products in a responsive table
- Shows product ID, name, SKU, description, quantity, price, category, and status
- Edit and Delete buttons for each product
- Empty state when no products exist

### Product Form
- Modal form for creating/editing products
- Fields: Name, SKU, Description, Quantity, Price, Category, Active status
- Form validation
- Cancel and Save buttons

### CRUD Operations
- **Create**: Click "Add Product" button in header
- **Read**: Products automatically load on page load
- **Update**: Click "Edit" button on any product
- **Delete**: Click "Delete" button (with confirmation)

## API Integration

The frontend connects to the FastAPI backend at http://localhost:8000

All API calls are handled through the `productService` in `src/services/api.js`

## Screenshots

The application features:
- Purple gradient header with "Add Product" button
- Clean table layout with color-coded status badges
- Modal forms for create/edit operations
- Green "Edit" and red "Delete" buttons
- Responsive design for mobile devices
