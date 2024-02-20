const { Router } = require("express");
const { getInfo, postInfo } = require("./Controller")

const router = Router();

router.get('/',getInfo);
router.post("/", postInfo);

module.exports = router;