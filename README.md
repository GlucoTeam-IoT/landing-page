# Glucova Landing Page

## Technologies

- **React** - Frontend library for building user interfaces
- **TypeScript** - Static type-checking for JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Additional Libraries

- **Hamburger React** - Animated hamburger menu component

## Features

### Responsive Design

- Fully responsive layout that works seamlessly across mobile, tablet, and desktop devices
- Mobile-friendly navigation with animated hamburger menu
- Different UI components optimized for various screen sizes

### Interactive UI Elements

- Smooth scroll navigation between sections
- Animated section reveals using Framer Motion
- Interactive navigation with visual feedback

### Sections

1. **Home/Hero** - Introduction to GlucoVa with main call-to-action
2. **About** - Information about the app's purpose and goals
3. **Features** - Highlights of key app functionalities
4. **Download** - App download options with mobile device preview
5. **Team** - Profiles of team members
6. **Contact** - Contact form and information
7. **Authentication** - Links to login and signup pages

## Project Structure

- `src/components` - Reusable UI components
- `src/components/ui` - Core UI elements (Navbar, Button, etc.)
- `src/components/sections` - Main page sections
- `src/utils/consts` - Configuration data (navbar items, features, etc.)
- `public` - Static assets (images, icons)

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/GlucoTeam-IoT/landing-page.git

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```
