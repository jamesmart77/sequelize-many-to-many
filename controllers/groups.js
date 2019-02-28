const Group = require('../server/models').Group;
const User = require('../server/models').User;

module.exports = {
  async create(req, res) {
    try {
        console.log("Body Params: ", req.body);
        let group = await Group.create({
            name: req.body.name,
        });

        let user = await User.findById(req.body.userId);

        //populate GroupUser join table
        await group.addUser(user);

        let usersGroups = await User.findById(req.body.userId,{
            include: [{
                model: Group,
                as: 'groups',
                attributes: ['id', 'name']
            }]
        })

        res.status(201).send(usersGroups);
    }
    catch (error) {
        console.error("Group creation server error: ", error);
        res.status(500).send(error)
    };
  }
};