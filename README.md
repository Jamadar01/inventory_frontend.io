# Inventory Management Frontend
Inventory Management System — Frontend

A React-based single-page application for managing inventory with full CRUD operations, analytics dashboard, and QR code support.

🚀 Live URLs

Frontend (Vercel):
https://inventory-frontend-io.vercel.app/

Backend API (Railway):
https://inventorybackendio-production.up.railway.app/

✨ Features

View all products in a responsive table

Create new products

Edit existing products

Delete products with confirmation

Dashboard with inventory analytics

QR code generation per product

Form validation and error handling

Responsive design (desktop & mobile)

Modern UI with gradient header

🛠 Tech Stack

React 18

Vite

Axios (API calls)

CSS3 (custom styling, no framework)

📦 Prerequisites

Node.js v14 or higher

Backend API running

⚙️ Installation & Setup
git clone https://github.com/Jamadar01/inventory_frontend.io.git
cd inventory_frontend.io

npm install

cp .env.example .env

npm run dev


Application runs at:
👉 http://localhost:3000

🔐 Environment Variables

Copy .env.example to .env:

Variable	Description	Default
VITE_API_URL	Backend API base URL	http://localhost:8000

For production:

VITE_API_URL=https://inventorybackendio-production.up.railway.app/

▶️ Running Frontend & Backend Together

Run both services in separate terminals.

Terminal 1 — Backend

cd inventory_backend.io
source venv/bin/activate
uvicorn app.main:app --reload


Terminal 2 — Frontend

cd inventory_frontend.io
npm run dev


Backend: http://localhost:8000

Frontend: http://localhost:3000

📜 Available Scripts

npm run dev — start development server

npm run build — build for production

npm run preview — preview production build

📁 Project Structure
src/
├── components/
│   ├── Dashboard.jsx      # Analytics dashboard
│   ├── ProductList.jsx    # Product table
│   ├── ProductForm.jsx    # Create/Edit modal form
│   └── QRCodeModal.jsx    # QR code viewer
├── services/
│   └── api.js             # Axios API service
├── App.jsx                # Main application component
├── App.css                # Application styles
└── main.jsx               # Application entry point

🧪 Features Overview
Product List

Displays all products in a responsive table

Columns:

ID

Name

SKU

Description

Quantity

Price

Category

Status (Active / Inactive)

Color-coded status badges

Edit and Delete actions per row

Empty state when no products exist

Product Form

Modal-based create/edit form

Fields:

Name

SKU

Description

Quantity

Price

Category

Active status

Client-side validation

Cancel and Save actions

CRUD Operations

Create — Click Add Product button in header

Read — Products load automatically on page load

Update — Click Edit on any product

Delete — Click Delete and confirm action

Dashboard & Analytics

Total products

Active products

Total inventory quantity

Inventory value

Low stock & out-of-stock counts

Category-wise distribution

Top 5 products by price

Top 5 products by quantity

QR Code Integration

Generate QR code for any product

View and download QR as PNG

QR encodes product ID, name, SKU, and price

Uses API Ninjas with automatic fallback to qrserver.com

🚢 Deployment

Live Deployment:
https://inventory-frontend-io.vercel.app/

Build Command
npm run build


Deploy the generated dist/ folder to any static hosting provider (Vercel, Netlify, GitHub Pages).
