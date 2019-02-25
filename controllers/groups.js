const Group = require('../server/models').Group;
const User = require('../server/models').User;
const GroupUser = require('../server/models').GroupUser;

module.exports = {
  async create(req, res) {
    try {
        console.log("Body Params: ", req.body);
        let group = await Group.create({
            name: req.body.name,
        });

        let groupUser = await GroupUser.create({
            userId: req.body.userId,
            groupId: group.id
        })

        let usersGroups = await User.findOne({
            where: { 
                id: req.body.userId
            },
            include: [{
                model: Group,
                as: 'groups',
                attributes: ['id', 'name']
            }]
        })

        console.log("NEW GROUP: ", group);
        console.log("NEW GROUPUSER: ", groupUser);

        res.status(201).send(usersGroups);
    }
    catch (error) {
        console.error("Group creation server error: ", error);
        res.status(500).send(error)
    };
  }
};