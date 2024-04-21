// mapping routes to controller
const express = require("express");
const router = express.Router();
const {createTodo} = require("../controllers/createTodo");
// define APi:
router.post("/createTodo",createTodo);
module.exports = router;