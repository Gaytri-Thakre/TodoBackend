// create todo will make entry in database
// import the title and description
const Todo = require("../models/Todo");
// define route handler
exports.updateTodo = async(req,res)=>{
    try{
        // get id first
        const {id} = req.params;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updateAt: Date.now()}
        )
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Updated Successfully",
        })

        
    }catch(err){
        console.log("Error in the UpdateTodoController")
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}