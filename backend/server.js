require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const healthRoute = require("./routes/health");
const accountRoutes = require("./routes/account");
const sessionRoutes = require("./routes/session");
const profileRoutes = require("./routes/profile");
const searchRoutes = require("./routes/search");
const orderRoutes = require("./routes/order");
const savedRoutes = require("./routes/saved");
const reviewFarmerRoutes = require('./routes/review_farmer');
const reviewProductRoutes = require('./routes/review_product');

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
app.use(cors());
// include authentification middleware
const {
  authenticateJWT,
  authenticateWithClaims,
} = require("./middleware/auth");

//include routes
app.use("/health", healthRoute);
app.use("/newaccount", accountRoutes);
app.use("/login", sessionRoutes);
app.use("/search", searchRoutes);
app.use("/order", authenticateWithClaims(['owner']), orderRoutes);
app.use("/profile", profileRoutes); // authenticateJWT,
app.use("/saved", authenticateWithClaims(['owner']), savedRoutes);
app.use('/reviewFarmer', authenticateWithClaims(['owner']), reviewFarmerRoutes);
app.use('/reviewProduct', authenticateWithClaims(['owner']), reviewProductRoutes);


// connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, () => {
  console.log(`This app is listening on port ${config.port}`);
});
