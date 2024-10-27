const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
require('./db');  // Conexão com MongoDB
const spaceships = require('./routes');
const duckobservation = require('./routes');


const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cors());

//INTEGRAÇÃO SWAGGER
const swaggerSetup = require('./swagger/swagger');


// ROUTES
app.use('/api', spaceships);
app.use('/api', duckobservation);

// CONFIGURATION SWAGGER
swaggerSetup(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
});


