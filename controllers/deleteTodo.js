// create todo will make entry in database
// import the title and description
const Todo = require("../models/Todo");
// define route handler
exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res
        .json({
            success:true,
           
            message:"Todo delted",
        })
    }catch(err){
        console.log("Error in the DeleteTodoController")
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
exports.deleteAllTodo = async(req,res)=>{
    try{
        
        await Todo.deleteMany({});
        res.json({
            success:true,
           
            message:"Todo deleted",
        })
    }catch(err){
        console.log("Error in the DeleteAllTodoController")
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}