const router = require('express').Router();

router.get('/', (req, res) => {
    return res.status(200).send('You made it to users!!');
});

module.exports = router;