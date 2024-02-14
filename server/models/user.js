const client = require('../util/db')

class UserModel{
    constructor(email, passwordHash, firstName, lastName, createdAt) {
        this.email = email;
        this.passwordHash = passwordHash;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = createdAt;
    }

    testMessage = () => {
        const query = client.query(`
        INSERT INTO messages (email, passwordhash, firstname, lastname, createdat)
        VALUES ('Nick@blah.com', 'hashed_password', 'Nick', 'Albert', current_timestamp());
        `).then(results => console.log(results))
    }
}

module.exports = UserModel;

//const user1 = new User('user1@example.com', '[hashed_password_1]', 'John', 'Doe', new Date());
