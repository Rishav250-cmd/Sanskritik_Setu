# Sanskriti Setu 🕉️

**Sanskriti Setu** (संस्कृति सेतु — "Bridge of Culture") is a full-stack web platform built to showcase, celebrate, and connect people with India's rich cultural heritage — spanning art, history, heritage sites, and community. Built as a Smart India Hackathon (SIH) project.

---

## 📖 About

India's cultural diversity — its monuments, art forms, festivals, and traditions — is vast but often scattered across disconnected sources. Sanskriti Setu aims to be a single, accessible bridge between people and this heritage, offering a modern, engaging way to explore Indian culture and connect with a community of enthusiasts.

## ✨ Features

- 🏛️ **Heritage Sites** — Explore India's monuments and historical landmarks
- 🎨 **Art** — Discover traditional and regional Indian art forms
- 📜 **History** — Learn the stories behind India's cultural evolution
- 🌏 **Culture** — Dive into festivals, traditions, and regional practices
- 👥 **Community** — Connect with others who share an interest in Indian heritage
- 🔐 **Authentication** — Secure sign-up/sign-in with session-based access

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- JavaScript (JSX)
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT) for authentication

## 📁 Project Structure

```
Sanskritik_Setu/
├── client/
│   └── Setu/
│       ├── src/
│       │   ├── pages/        # Home, Heritage Site, Culture, Community, Art, History, Signin
│       │   ├── utils/         # API config, helpers
│       │   └── ...
│       └── package.json
├── Server/
│   ├── controllers/           # authcontroller.js
│   ├── routes/                # userRouter.js
│   ├── middleware/            # isLoggedin.js
│   ├── utils/                 # generatetoken.js, validation.js
│   ├── models/                # usermodel.js
│   └── server.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- A MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Clone the repository

```bash
git clone https://github.com/Rishav250-cmd/Sanskritik_Setu.git
cd Sanskritik_Setu
```

### 2. Set up the backend

```bash
cd Server
npm install
```

Create a `.env` file inside `Server/`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
PORT=5000
```

Start the backend server:

```bash
node server.js
```

### 3. Set up the frontend

```bash
cd ../client/Setu
npm install
```

Create a `.env.local` file inside `client/Setu/`:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend dev server:

```bash
npm run dev
```

The app should now be running at `http://localhost:5173`.

## 🌐 Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com), with the project root set to `client/Setu`.
- **Backend** is deployed on [Render](https://render.com) (or any Node-friendly host), since it runs as a persistent Express server.
- Environment variables (`VITE_API_URL`, `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`) are configured separately on each platform.

## 🔐 Authentication

Sanskriti Setu uses JWT-based authentication with HTTP-only cookies:
- Passwords are validated and hashed before storage
- Protected routes are guarded via `isLoggedin` middleware
- Cross-origin cookie handling is configured for separate frontend/backend deployments

## 👥 Team

This project was built by:

- **Rishav Dev**
- Umesh Chaudhary
- Gouri Agrawal
- Yasir Husain

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is currently unlicensed. Consider adding an [MIT License](https://choosealicense.com/licenses/mit/) if you plan to open it up for public contribution.

## 🙏 Acknowledgements

Built as part of the Smart India Hackathon (SIH) on the theme of Indian Culture and Heritage.