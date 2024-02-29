<<<<<<< Updated upstream
const express = require('express');
const cors = require('cors');
const AdminRouter = require('./routes/admin');
const UserRouter = require('./routes/user');
require('dotenv').config({path:__dirname+'/.env'})

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(express.json());
app.use(cors());

app.use(AdminRouter);
app.use(UserRouter);

app.listen(port, '0.0.0.0', () => {
    console.log(`Running on ${port}`);
});
=======
const express = require("express");
const cors = require("cors");
const MessageRouter = require("./routes/message");
const ReportRouter = require("./routes/report");
const RegistrationRouter = require("./routes/registration");
const app = express();
const port = process.env.PORT || 3000;
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./au-report-bbe7d-firebase-adminsdk-rm0f2-5424c5388d.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(express.json());
app.use(cors());
app.use(MessageRouter);
app.use(ReportRouter);
app.use(RegistrationRouter);

// Middleware to verify Firebase ID token
const verifyToken = (req, res, next) => {
  const idToken = req.headers.authorization;
  console.log(idToken);
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken; // Adding decoded user information to the request object
      next();
    })
    .catch((error) => {
      console.error("Error while verifying Firebase ID token:", error);
      res.status(403).send("Unauthorized");
    });
};

// Public route (does not require authentication)
app.get("/public", (req, res) => {
  res.send("This route is public and does not require authentication.");
});

// Private route (requires authentication)
app.get("/private", verifyToken, (req, res) => {
  // if verifyToken calls next(), this code will execute
  res.send(`Welcome user ${req.user.uid}, this route is protected.`);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Running on http://localhost:${port}`);
});
>>>>>>> Stashed changes
