# Portfolio Website

A modern portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design
- Contact form with MongoDB integration
- Modern UI with animations
- SEO optimized

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB Atlas account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
   - Create a `.env.local` file in the root directory
   - Add your MongoDB Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   ```
   - Replace `<username>`, `<password>`, `<cluster>`, and `<database>` with your actual MongoDB Atlas credentials

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## MongoDB Setup

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Set up a database user with read/write permissions
4. Get your connection string from the "Connect" button
5. Add your IP address to the IP whitelist in the Network Access tab
6. Replace the placeholder connection string in `.env.local` with your actual connection string

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
