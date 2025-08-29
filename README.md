# Finobytes Application

A **role-based dashboard application** built with **React, Redux, React Router, and Tailwind CSS**.  
Supports separate dashboards for **Admin**, **Merchant**, and **Member** users with protected routes and dummy data.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Login Credentials](#login-credentials)
- [Project Structure](#project-structure)

---

## Features

- Admin Dashboard:
  - Manage Users & Merchants (dummy table data)
- Merchant Dashboard:
  - Home (table of Approved purchase)
  - Lookup Customer (searchable dummy list)
  - Set Contribution Rate (number input form)
  - Notifications (list of approval requests)
- Member Dashboard:
  - Points Summary (dummy points overview table)
- Role-based login with **protected routes**
- Minimalistic and responsive design using **Tailwind CSS**
- Redux-managed authentication
- Logout functionality

## Installation

### Prerequisites

- Node.js >= 18
- npm (comes with Node.js)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/yourusername/finobytes-dashboard.git
cd finobytes-dashboard
```

2. Install the dependencies

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open the application in your browser:

```bash
http://localhost:5173
```

### Login Credentials

## Admin

Email: admin@test.com

Password: admin123

## Merchant

Store ID: store173

Password: merchant123

## Member

Phone: 1234567890

Password: member123

### Project Structure

src/
├─ components/
│ ├─ layouts/
│ ├─ sidebar/
├─ pages/
│ ├─ dashboard/
│ │ ├─ Admin/
│ │ ├─ Merchant/
│ │ ├─ Member/
│ ├─ AdminLogin.tsx
│ ├─ MerchantLogin.tsx
│ ├─ MemberLogin.tsx
│ └─ Homepage.tsx
├─ routes/
│ ├─ router.tsx
│ └─ ProtectedRoute.tsx
├─ store/
│ ├─ Slice/
│ │ └─ AuthSlice.ts
│ └─ store.ts
└─ App.tsx
