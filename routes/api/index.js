const router = require("express").Router();
const userRoute = require("./users");
const groupRoute = require("./groups");

//routes
router.use("/users", userRoute);
router.use("/groups", groupRoute);

module.exports = router;
