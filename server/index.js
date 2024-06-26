const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const cloudinary = require('cloudinary').v2;
const cors = require('cors');

const dbConnection = require('./config/database');
// const { cloudinaryConfig } = require('./config/cloudinaryConfig');
dotenv.config({ path: 'config.env' });

// DB Connection
dbConnection();

const app = express();

app.use(cors());
app.use(express.json());


// Routes
const articles = require('./routes/articles');
app.use('/api/articles', articles);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
