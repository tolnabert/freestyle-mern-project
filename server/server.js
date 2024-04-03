import mongoose from 'mongoose';
import express from 'express';
import 'dotenv/config';

import {
  createDog,
  deleteDog,
  getAllDogs,
  getDog,
  updateDog,
} from './controllers/dogControllers.js';
import { loginUser, registerUser } from './controllers/userControllers.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.status(200).send('<h1>Home Page</h1>');
});

//Dog Routes
app.get('/api/v1/dogs',  getAllDogs);
app.get('/api/v1/dogs/:id', getDog);
app.post('/api/v1/dogs/', createDog);
app.put('/api/v1/dogs/:id', updateDog);
app.delete('/api/v1/dogs/:id', deleteDog);

//User Routes
app.post('/api/v1/login', loginUser);
app.post('/api/v1/register', registerUser);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_KEY}@cluster0.8qcksfu.mongodb.net/`
  );
  app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
  });
} catch (error) {
  console.error('Failed to connect to MongoDB:', error);
  process.exit(1);
}
