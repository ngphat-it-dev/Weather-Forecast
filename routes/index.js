var express = require("express");
const {data, getData} = require("../controllers/indexController");
var router = express.Router();

/* GET home page. */
router.get("/",data);

router.post("/",getData);

module.exports = router;
