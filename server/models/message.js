const client = require('../util/db')

class MessageModel{
    constructor(messageid, userid, message, timestamp) {
        this.messageid = messageid;
        this.userid = userid;
        this.message = message;
        this.timestamp = timestamp;
    }

    testCreateNewMessage = () => {
        const query = client.query(`
        INSERT INTO messages (userid, message)
            VALUES (1, 'This is a sample message'); `);
    }

    
}

module.exports = MessageModel;