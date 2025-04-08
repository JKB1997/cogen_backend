// backend/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const contactRoutes = require('./routes/Contact');
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Cogent Web Services Backend is Running');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
