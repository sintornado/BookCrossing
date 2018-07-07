const usersModel = require('./model');

class UsersController {
    get(req, res) {
        const id = Number(req.params.id);
        console.log('got request for one user with id ' + id);

        usersModel.getOneUser(id)
            .then(result => res.json(result))
            .catch(err => res.status(400).send())
    }
    
}
// console.log(usersModel.getOneUser(1));
module.exports = new UsersController;