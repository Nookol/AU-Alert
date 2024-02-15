const client = require('../util/db')

class MyReportsModel {
    constructor(reportid, userid, image, location, title, description) {
        this.reportid = reportid;
        this.userid = userid;
        this.image = image;
        this.location = location;
        this.title = title;
        this.description = description;
    }

    // static runGetReport() {
    //     return client.execute(`
    //     SELECT image, location, title, description
    //         FROM reports;`
    //     )
    // }
    testGetNewReport = () => {
        const query = client.query (`
        INSERT INTO reports (image, location, title, description)
        VALUES ('coffee spill', 'Stephens 103', 'coffee spill in stephens', 'small coffee spill');
        `).then(results => console.log(results))
    }
}

module.exports = MyReportsModel;
