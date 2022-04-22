require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const farmerRoutes = require("./routes/farmer");
const restOwnerRoutes = require("./routes/rest_owner");
const healthRoute = require("./routes/health");
const accountRoutes = require("./routes/account");
const sessionRoutes = require("./routes/session");
const profileRoutes = require("./routes/profile");

// set up some configs for express.
const config = {
  name: "sample-express-app",
  port: 8000,
  host: "0.0.0.0",
};

// create the express.js object
const app = express();

// use body parser
app.use(bodyParser.json());

// include authentification middleware
const {
  authenticateJWT,
  authenticateWithClaims,
} = require("./middleware/auth");
// const {authenticateWithClaims} = require('./middleware/auth');

//include routes
app.use("/health", healthRoute);
app.use("/newaccount", accountRoutes);
app.use("/login", sessionRoutes);
app.use("/profile", authenticateJWT, profileRoutes);
app.use("/owners", authenticateWithClaims(["owner"]), restOwnerRoutes);
app.use("/farmers", authenticateWithClaims(["farmer"]), farmerRoutes);

// connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, () => {
  console.log(`This app is listening on port ${config.port}`);
});
