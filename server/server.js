const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // If needed for CORS
const emailRoutes = require('./routes/sendEmail');

require('dotenv').config();  // Load environment variables

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable if you have frontend on a different domain

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
