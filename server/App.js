const express = require('express');
const cors = require('cors');
const AdminRouter = require('./routes/admin');
const UserRouter = require('./routes/user');
const client = require("./util/db.js")
const UserModel = require("./models/user.js")

// require('dotenv').config({path:__dirname+'/.env'})
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '100mb'}));
app.use(express.json());
app.use(cors());

app.use(AdminRouter);
app.use(UserRouter);

const user = new UserModel();

app.get('/test', async (req, res) => {
    const query = await client.query(`SELECT * FROM users;`)
        .then(results => res.send((results["rows"])))
        .then(() => {
            console.log("Success")
        })
        .catch(e => {
            console.log(e.message)
        })
    // user.testCreateNewUser()
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Running on ${port}`);
});