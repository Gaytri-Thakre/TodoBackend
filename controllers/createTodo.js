// create todo will make entry in database
// import the title and description
const Todo = require("../models/Todo");
// define route handler
exports.createTodo = async(req,res)=>{
    try{
        // extract title and description from request body
        const {title,description}=req.body;
        // create New Object and insert in DB
        const response = await Todo.create({title,description});
        // send data
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfull'
            }
        );
    }catch(err){
        console.log("Error in the CreateTodoController")
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}