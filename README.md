# ☕ Espresso Emporium - Coffee Store

A modern, responsive Coffee Store application built with React, Firebase, and Tailwind CSS. Browse, add, update, and manage your favorite coffee products with an intuitive user interface.

---

## 🌟 Features

- **User Authentication** - Sign up, sign in, and sign out with Firebase
- **Coffee Catalog** - Browse and search coffee products
- **Add Coffee** - Create new coffee entries with details
- **Update Coffee** - Modify existing coffee product information
- **User Management** - View and manage registered users
- **Responsive Design** - Mobile-friendly hamburger menu and layout
- **Error Handling** - Custom 404 error page
- **Loading States** - Smooth loading indicators
- **Contact Form** - Get in touch with the store
- **Instagram Feed** - Display Instagram images

---

## 🛠 Tech Stack

### Frontend

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Routing**: React Router DOM v6+
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Font Awesome)
- **Alerts**: SweetAlert2
- **Linting**: ESLint

### Backend

- **Runtime**: Node.js
- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Database Driver**: Mongoose (Optional)
- **Authentication**: Firebase / JWT

### Database & Services

- **Cloud Database**: MongoDB
- **Authentication Service**: Firebase

---
   
---

## 📁 Project Structure

```
src/
├── Components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation bar with hamburger menu
│   ├── Home.jsx        # Home page
│   ├── AddCoffee.jsx   # Add new coffee form
│   ├── CoffeeCard.jsx  # Coffee product card
│   ├── CoffeeDetails.jsx # Detailed coffee view
│   ├── UpdateCoffee.jsx # Edit coffee product
│   ├── Users.jsx       # User management
│   ├── SignIn.jsx      # Login page
│   ├── SignUp.jsx      # Registration page
│   ├── Contuct.jsx     # Contact form
│   ├── Header.jsx      # Page header
│   ├── Hero.jsx        # Hero section
│   ├── Footer.jsx      # Footer component
│   ├── InstagramImage.jsx # Instagram feed
│   ├── ErrorPage.jsx   # 404 error page
│   └── Loading.jsx     # Loading spinner
├── Context/            # React Context API
│   ├── AuthContext.jsx # Auth context setup
│   └── AuthProvider.jsx # Auth provider wrapper
├── firebase/           # Firebase configuration
│   └── firebase.init.js
├── Layouts/            # Page layouts
│   └── MainLayout.jsx
├── PrivetRoute/        # Protected routes
│   └── PrivateRoute.jsx
├── Router/             # Route configuration
│   └── router.jsx
├── assets/             # Images and static files
│   └── images/
├── App.jsx             # Main App component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

---

## 📋 Prerequisites

Before you begin, make sure you have installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

---

## 🚀 Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd "Programing hero/Coffee Store 2/Client"
   ```


2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Setup Firebase Configuration**:

   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Copy your Firebase configuration
   - Update `src/firebase/firebase.init.js` with your credentials:
     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
     };
     ```

4. **Create `.env.local` file** (if needed):

   ```env
   VITE_FIREBASE_API_KEY=your_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_domain_here
   VITE_API_URL=http://localhost:5000
   ```

5. **Setup MongoDB** (if running locally):

   - Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Start MongoDB service
   - Or use MongoDB Atlas (cloud): [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

6. **Setup Express Backend** (if not already running):
   - Ensure your Express.js backend is running on `http://localhost:5000`
   - Backend repository should have its own `.env` file with MongoDB URI:
     ```env
     MONGODB_URI=mongodb://localhost:27017/coffee_store
     PORT=5000
     ```

---

## 🏃 Running the Project

**Development Mode**:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

**Build for Production**:

```bash
npm run build
```

**Preview Production Build**:

```bash
npm run preview
```

## � Backend Setup (Express.js + MongoDB)

### Express Server Configuration

- API base URL: `http://localhost:5000` (default)
- API endpoints for coffee management, users, authentication
- MongoDB connection via Mongoose (optional ORM)

### MongoDB Collections

- **coffees** - Coffee product information
- **users** - User accounts and profiles
- **orders** - Customer orders (if applicable)
- **contacts** - Contact form submissions

### Environment Variables (Backend)

```env
MONGODB_URI=mongodb://localhost:27017/coffee_store
# or for MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/coffee_store

PORT=5000
NODE_ENV=development

# Firebase or JWT Settings
FIREBASE_PROJECT_ID=your_project_id
JWT_SECRET=your_secret_key
```

---

## �🔐 Authentication

The app uses Firebase Authentication with the following flows:

- **Sign Up**: Create a new account with email and password
- **Sign In**: Login with existing credentials
- **Protected Routes**: Some pages require authentication
- **Sign Out**: Logout with confirmation dialog

---

## 📱 Responsive Design

The navbar features a responsive hamburger menu for mobile devices:

- **Desktop**: Full navigation menu visible
- **Mobile**: Hamburger icon (☰) with collapsible menu
- **Tablets**: Adaptive layout based on screen size

---

## 🧪 Testing

For ESLint checks:

```bash
npm run lint
```

---

## 🌐 Deployment

### Deploy to Vercel

The project includes `vercel.json` configuration for easy Vercel deployment:

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Firebase Hosting

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:

   ```bash
   firebase login
   firebase init
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🎨 Customization

### Fonts & Typography

- Uses "Rancho" and "Open Sans" fonts
- Custom CSS classes: `.rancho`, `.my-text`

### Colors & Styling

- Tailwind CSS for utility-first styling
- Custom gradient and background images
- Coffee-themed color palette

---

## 🐛 Known Issues & Improvements

- Consider using React Query for better data fetching
- Add form validation libraries (React Hook Form, Zod)
- Implement error boundary components
- Add unit and integration tests

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Developer Notes

- Keep components modular and reusable
- Use Context API for global state (auth)
- Follow React best practices and hooks guidelines
- Test responsive design on multiple devices
- Always close the mobile menu when navigating

---

## 📧 Support

For issues or questions, please create an issue in the repository or contact the development team.

---

**Happy Brewing! ☕**
