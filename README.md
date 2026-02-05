Inventory Management System — Frontend

A modern React-based single-page application for managing inventory with full CRUD operations, analytics dashboard, and QR code integration.

🚀 Live URLs

Frontend (Vercel)
https://inventory-frontend-io.vercel.app/

Backend API (Railway)
https://inventorybackendio-production.up.railway.app/

✨ Features

View products in a responsive table

Create, update, and delete products

Inventory analytics dashboard

QR code generation per product

Form validation and error handling

Responsive design (desktop & mobile)

Clean UI with gradient header

🛠 Tech Stack

React 18

Vite

Axios (API communication)

CSS3 (custom styling, no framework)

📦 Prerequisites

Node.js v14+

Backend API running (local or deployed)

⚙️ Installation & Local Setup
git clone https://github.com/Jamadar01/inventory_frontend.io.git
cd inventory_frontend.io

npm install

cp .env.example .env

npm run dev


Frontend runs at:
👉 http://localhost:3000

🔐 Environment Variables

Create a .env file using .env.example.

Variable	Description	Default
VITE_API_URL	Backend API base URL	http://localhost:8000
Production Example
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
Command	Description
npm run dev	Start development server
npm run build	Build production bundle
npm run preview	Preview production build

🧪 Feature Details
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

Edit and Delete actions per product

Empty-state UI when no products exist

Product Form

Modal-based create/edit form

Input fields:

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

Create — Click Add Product in the header

Read — Products load automatically on app load

Update — Click Edit on a product row

Delete — Click Delete and confirm

Dashboard & Analytics

Total products

Active products

Total inventory quantity

Inventory value

Low-stock items

Out-of-stock items

Category-wise distribution

Top 5 products by price

Top 5 products by quantity

QR Code Integration

Generate QR codes for individual products

View and download QR code as PNG

QR encodes product ID, name, SKU, and price as JSON

Uses API Ninjas with automatic fallback to qrserver.com

🚢 Deployment

Live Frontend:
https://inventory-frontend-io.vercel.app/

Build Command
npm run build


Deploy the generated dist/ folder to any static hosting provider such as Vercel, Netlify, or GitHub Pages.
