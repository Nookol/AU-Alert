const express = require('express');
const messageRouter = express.Router();
const messageModel = require('./../models/message');

messageRouter.get("/data", (req,res) => {
    
    const data = new messageModel();
    data.testCreateNewMessage();
    
    
});


module.exports = messageRouter