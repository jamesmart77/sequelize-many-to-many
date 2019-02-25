const usersController = require('../../controllers').users;
const router = require("express").Router();

router.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
}));

router.post('/', usersController.create);

module.exports = router;