require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pricingRoutes = require('./routes/pricingRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api', pricingRoutes);
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
