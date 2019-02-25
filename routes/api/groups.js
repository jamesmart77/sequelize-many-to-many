const groupsController = require('../../controllers').groups;
const router = require("express").Router();

router.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Groups API!',
}));

router.post('/', groupsController.create);

module.exports = router;