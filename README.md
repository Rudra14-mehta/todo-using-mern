# 🎯 Todo App - Time Management & Task Organizer
Todo App – Smart Task Organizer with Time Management & Dark/Light Mode.

A modern, responsive todo application built with React and Node.js that helps you manage tasks with time scheduling capabilities. Features a beautiful UI with dark/light theme support and smooth animations.

![Todo App Preview](https://img.shields.io/badge/React-18.0+-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.0+-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue?style=for-the-badge&logo=mongodb)

## ✨ Features

### 🕐 **Time Management**
- **Schedule tasks** with specific times
- **Time-based sorting** - tasks with times appear first
- **Chronological organization** for better productivity
- **Visual time indicators** with clock emojis

### 🎨 **Modern UI/UX**
- **Dark/Light theme toggle** with smooth transitions
- **Glassmorphism design** with backdrop blur effects
- **Responsive layout** that works on all devices
- **Smooth animations** and hover effects
- **Beautiful gradients** and modern styling

### ✅ **Task Management**
- **Add, complete, and delete** tasks easily
- **Task completion tracking** with visual indicators
- **Statistics dashboard** showing progress
- **Local storage persistence** - tasks survive page refreshes
- **Keyboard shortcuts** (Enter to add tasks)

### 📱 **Responsive Design**
- **Mobile-first approach**
- **Touch-friendly interface**
- **Adaptive layouts** for different screen sizes
- **Optimized for tablets and desktops**

## 🚀 Live Demo

Visit the application: [http://localhost:5173](http://localhost:5173)

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern UI library
- **Vite 6.3.5** - Fast build tool and dev server
- **CSS3** - Modern styling with animations
- **Local Storage** - Client-side data persistence

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose 8.15.1** - MongoDB ODM
- **JWT** - Authentication (ready for future use)

## 📦 Installation

### Prerequisites
- Node.js (v18.16.0 or higher)
- npm or yarn package manager
- MongoDB Atlas account (for database)

### Step 1: Clone the Repository
```bash
git clone <repo-url>
cd todo-app
```

### Step 2: Install Dependencies

#### Backend Setup
```bash
cd todo-app/server
npm install
```

#### Frontend Setup
```bash
cd todo-app/client
npm install
```

### Step 3: Configure Database

1. **MongoDB Atlas Setup:**
   - Create a MongoDB Atlas account
   - Create a new cluster
   - Get your connection string
   - Update `todo-app/server/config/db.js` with your credentials

2. **Update Database Configuration:**
   ```javascript
   // In todo-app/server/config/db.js
   await mongoose.connect('mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@your-cluster-url', {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });
   ```

### Step 4: Run the Application

#### Start Backend Server
```bash
cd todo-app/server
node index.js
```
Server will start on: `http://localhost:3000`

#### Start Frontend Development Server
```bash
cd todo-app/client
npm run dev
```
Frontend will start on: `http://localhost:5173`

## 🎯 Usage Guide

### Adding Tasks
1. **Enter task description** in the text input
2. **Set time** (optional) using the time picker
3. **Click "Add Task"** or press Enter
4. **Task appears** in the list with time indicator

### Managing Tasks
- **Complete task**: Click the circle button (○ → ✓)
- **Delete task**: Click the trash icon (🗑️)
- **View statistics**: Check the stats panel at the top

### Theme Switching
- **Toggle theme**: Click the moon/sun button (🌙/☀️)
- **Automatic persistence**: Theme preference is saved

### Time Management
- **Tasks with times** appear first in the list
- **Chronological sorting** for scheduled tasks
- **Visual time indicators** help with planning

## 📁 Project Structure

```
todo-app/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Styling and animations
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global styles
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── server/                # Backend Node.js application
│   ├── config/
│   │   └── db.js          # Database configuration
│   ├── middlewares/
│   │   └── auth.js        # Authentication middleware
│   ├── routes/
│   │   ├── auth.js        # Authentication routes
│   │   └── todo.js        # Todo CRUD routes
│   ├── schema/
│   │   ├── todo.js        # Todo data model
│   │   └── user.js        # User data model
│   ├── index.js           # Express server setup
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## 🔧 Configuration

### Environment Variables (Optional)
Create a `.env` file in the server directory:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Customization
- **Colors**: Modify CSS variables in `App.css`
- **Animations**: Adjust timing in CSS transitions
- **Database**: Update connection string in `db.js`

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd todo-app/client
npm run build
```
Deploy the `dist` folder to your preferred hosting service.

### Backend Deployment (Heroku/Railway)
```bash
cd todo-app/server
# Add start script to package.json
# Deploy to your preferred platform
```

### Environment Setup for Production
- Set up environment variables
- Configure CORS for your domain
- Set up MongoDB Atlas IP whitelist

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite** for the fast build tool
- **MongoDB Atlas** for the cloud database
- **Express.js** for the backend framework

## 📞 Support

If you encounter any issues or have questions:

1. **Check the documentation** above
2. **Review the console** for error messages
3. **Verify database connection** and credentials
4. **Ensure all dependencies** are installed

### Common Issues

**MongoDB Connection Failed:**
- Verify your IP is whitelisted in MongoDB Atlas
- Check your connection string and credentials
- Ensure your cluster is running

**Frontend Not Loading:**
- Check if the development server is running
- Verify the correct port (5173)
- Clear browser cache and reload

**Backend Server Issues:**
- Check if port 3000 is available
- Verify all dependencies are installed
- Check console for error messages

---

**Made with ❤️ by [Rudra Mehta]**

*This todo app helps you stay organized and productive with beautiful design and powerful features!*
