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