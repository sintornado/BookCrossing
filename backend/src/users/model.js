const dbConnection = require('../db');

class UsersModel{
    getOneUser(id){
        return new Promise((resolve, reject) => {
            dbConnection.query("SELECT * FROM users WHERE id=" + id , (err, result) => {
                err ? reject(err)
                    : resolve(result)
            });
        });
    };
};

module.exports = new UsersModel;