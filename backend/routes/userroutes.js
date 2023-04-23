const express = require("express");
const router = express.Router();
const user = require("../controller/user");

router.post ('/post',user.userpost)

router.get ('/get',user.userget)


module.exports = router;