# 🔐 JSS Originals - Modular Auth System

A production-ready, reusable authentication system built with **Next.js 14**, **MongoDB Atlas**, **Resend**, and **JWT**. Designed to be plug-and-play for any modern web application.

## ✨ Features
- **Passwordless Auth**: Secure OTP login via email.
- **Database Backed**: MongoDB Atlas integration for persistent user data.
- **Auto-Expiry OTPs**: MongoDB TTL (Time To Live) indexes for self-cleaning verification codes.
- **JWT Session Management**: Secure `httpOnly` cookies using the `jose` library.
- **Route Protection**: Next.js Middleware to guard sensitive dashboards.
- **Reusable Architecture**: Highly modular folder structure.

## 🛠️ Tech Stack
| Component | Technology |
| :--- | :--- |
| Framework | Next.js 14 (App Router) |
| Database | MongoDB Atlas |
| ORM | Mongoose |
| Email Service | Resend |
| Auth Tokens | JWT (via `jose`) |
| Styling | Tailwind CSS |

## 🚀 Setup & Installation

### 1. Clone & Install
```bash
npm install
