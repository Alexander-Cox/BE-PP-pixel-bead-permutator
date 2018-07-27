const Model = require('../model/users.model');

module.exports = {
    getAllUsers(req, res, next) {
        Model.getAllUsers()
        .then(users => res.status(200).send(users))
        .catch(next);
    },
    getUserByUserId(req, res, next) {
        const { user_id } = req.params;
        Model.getUserByUserId(user_id)
        .then(user => res.status(200).send(user))
        .catch(next); 
    },
    getUserByUsername(req, res, next) {
        const { username } = req.params;
        Model.getUserByUsername(username)
        .then(user => res.status(200).send(user))
        .catch(next); 
    },
    getFavouritesByUserID(req, res, next) {
        const { user_id } = req.params;
        Model.getFavouritesByUserID(user_id)
        .then(favourites => res.status(200).send(favourites))
        .catch(next);
    },
    postNewUser(req, res, next) {
        Model.postNewUser(req.body)
        .then(user => res.status(201).send(user))
        .catch(next);
    }
}