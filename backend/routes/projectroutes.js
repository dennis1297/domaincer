const express = require("express");
const router = express.Router();
const project = require("../controller/project");

router.post ('/post',project.addpost)

router.get ('/get',project.get)

router.post ('/applies',project.applyproject)

module.exports = router;


