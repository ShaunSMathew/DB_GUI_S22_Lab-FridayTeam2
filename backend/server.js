require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const farmerRoutes = require('./routes/farmer');
const restOwnerRoutes = require('./routes/rest_owner');
const healthRoute = require('./routes/health');
const userRoutes = require('./routes/users');
const sessionRoutes = require('./routes/session');

// set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

// create the express.js object
const app = express();

// use body parser
app.use(bodyParser.json());

// include authentification middleware
//const { authenticateJWT, authenticateWithClaims } = require('./middleware/auth');
const {authenticateWithClaims} = require('./middleware/auth');

//include routes
app.use('/health', healthRoute);
app.use('/session', sessionRoutes);
app.use('/owners', authenticateWithClaims(['owner']), restOwnerRoutes);
app.use('/farmers', authenticateWithClaims(['farmer']), farmerRoutes);
app.use('/users', userRoutes);

// connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, () => {
  console.log(`This app is listening on port ${config.port}`);
});
