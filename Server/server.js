import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import usersRouter from './Routes/userRouter.js';
import connectDB from './Config/db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set('trust proxy', 1);
app.use(express.json());
app.use(cookieParser());

// API routes
app.use('/api/users', usersRouter);

// Serve the built React app (only in production)
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '../client/Setu/dist');
  app.use(express.static(clientBuildPath));

  // Any non-API route falls through to React Router
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});