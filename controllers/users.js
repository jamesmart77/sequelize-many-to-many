const User = require('../server/models').User;
const Group = require('../server/models').Group;

module.exports = {
  async create(req, res) {
    try {
        let user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }, {
          include: [{
            model: Group,
            as: 'groups'
          }]
        });

        res.status(201).send(user);
    }
    catch (error) {
        res.status(500).send(error)
    };
  }
};