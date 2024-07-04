import express, { json } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
// const cloudinary = require('cloudinary').v2;
import cors from 'cors';

import dbConnection from './config/database.js';
// const { cloudinaryConfig } = require('./config/cloudinaryConfig');
config({ path: 'config.env' });

// DB Connection
dbConnection();

const app = express();

app.use(cors());
app.use(json());


// Routes
import articles from './routes/articles.js';
app.use('/api/articles', articles);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
