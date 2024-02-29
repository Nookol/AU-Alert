const express = require('express');
const UserModel = require("../models/user");
const RegistrationRouter = express.Router();

RegistrationRouter.post("/register", async (req, res) => {

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

module.exports = RegistrationRouter;