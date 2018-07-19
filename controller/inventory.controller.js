const Model = require('../model/inventory.model');

module.exports = {
    getAllInventoryItems(req, res, next) {
        Model.getAllInventoryItems()
            .then(items => res.status(200).send(items))
            .catch(next);
    },
    getInventoryItemsByUserID(req, res, next) {
        const { user_id } = req.params;
        Model.getInventoryBeadsByUserID(user_id)
            .then(beads => res.status(200).send(beads))
            .catch(next);
    },
    putIncOrDecBeadsByInvID(req, res, next) {
        const { decrement, amount } = req.query;
        const { inv_id } = req.params;
        if (decrement === 'true') {
            return Model.putDecrementInventoryQuantity(inv_id, amount)
                .then(item => res.status(201).send(item))
                .catch(next);
        } else {
            return Model.putIncrementInventoryQuantity(inv_id, amount)
                .then(item => res.status(201).send(item))
                .catch(next);
        }
    },
    postInventoryItemByUserID(req, res, next) {
        Model.postNewIntentoryItem(req.body)
            .then(item => res.status(201).send(item))
            .catch(next);
    }
}