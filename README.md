# Audiophile E-Commerce Platform

Audiophile is a full-stack e-commerce application built for selling audio equipment such as headphones, speakers, and earphones. It focuses on a clean user experience, real-time interactions, and a complete checkout flow.

##Live Demo
https://audiophile-ecommerce-website-theta-three.vercel.app/

## Overview

This project demonstrates a practical e-commerce implementation including product browsing, cart management, checkout, and order confirmation with email notification.

## Features

- Browse products by category
- View detailed product pages with responsive images
- Add, remove, and update cart items in real time
- Persistent cart using localStorage
- Checkout with form validation and error handling
- Cash on Delivery payment (e-Money UI present but not implemented)
- Order summary with totals (including VAT and shipping)
- Order confirmation modal after checkout
- Automated email sent after successful order

## Tech Stack

Frontend:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

Backend & Services:
- Convex (database and backend logic)
- Next.js API routes
- Resend (email service)

Other Tools:
- React Hook Form (form handling)
- Zod (validation)
- Git & GitHub
- Vercel (deployment)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- Convex account
- Resend account

### Installation

Clone the repository:

```bash
git clone https://github.com/dcomputer22/audiophile-ecommerce.git
cd audiophile-ecommerce
