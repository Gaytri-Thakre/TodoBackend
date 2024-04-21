// mapping routes to controller
const express = require("express");
const router = express.Router();
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo,deleteAllTodo} = require("../controllers/deleteTodo");
// define APi:
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
router.delete("/deleteAllTodo",deleteAllTodo);
module.exports = router;