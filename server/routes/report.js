const express = require('express');
const ReportRouter = express.Router();
// const Report = require ("../models/report")
const client = require ('../util/db')

ReportRouter.get( "/getreport", (req, res) => {
    // Report.runGetReport();
    console.log("in reports get request")
    const query = client.query (`
        INSERT INTO reports (image, location, title, description)
        VALUES ('coffee spill', 'Stephens 103', 'coffee spill in stephens', 'small coffee spill');
        `).then(results => console.log(results))

    res.send(JSON.stringify({s : "BLAH"}))
});

ReportRouter.post("/myreports", (req, res) => {
    console.log("in post report")

});

module.exports = ReportRouter;
