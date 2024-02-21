const express = require("express");
const cors = require("cors");
const MessageRouter = require("./routes/message");
const ReportRouter = require("./routes/report");
const client = require("./util/db.js");
const UserModel = require("./models/user.js");
const MyReportsModel = require("./models/report");
const app = express();
const port = process.env.PORT || 3000;
const admin = require("firebase-admin");
const locationTest = require('../components/Reporting/locations')

// Initialize Firebase Admin SDK
const serviceAccount = require("./au-report-bbe7d-firebase-adminsdk-rm0f2-5424c5388d.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "100mb"}));
app.use(express.json());
app.use(cors());

app.use(MessageRouter);
app.use(ReportRouter);

app.get('/location/:id', (req, res) => {
    const LOCATIONS = [
        {
            id: 1,
            name: 'Stephens Hall',
            code: 'stph'
        },
        {
            id: 2,
            name: 'Dunham Hall',
            code: 'dunh'
        }
    ];
    const id = req.params.id
    const send = LOCATIONS.filter(e => e.id === id )
    res.send(JSON.stringify(send))
})

// Middleware to verify Firebase ID token
const verifyToken = (req, res, next) => {
    const idToken = req.headers.authorization;

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

app.post("/register", async (req, res) => {
    const email = req.body.email;
    const first = req.body.fName;
    const last = req.body.lName;
    const phone = req.body.phone;
    const token = req.body.token;
    const user = new UserModel(email, first, last, phone, token);

    try {
        await user.registerNewUser();
        console.log("New User Created!");
        res.sendStatus(200);
    } catch (error) {
        console.error("Error registering user:", error);
        res.sendStatus(400);
    }
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Running on ${port}`);
});
