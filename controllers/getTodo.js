const Todo = require("../models/Todo");
exports.getTodo = async(req,res) =>{
    try{
        // fetch all Todo items from database
        const response = await Todo.find({});
        // response
        res.status(200)
        .json(
            {
                success:true,
                data:response,
                message:'Entire Todo is fetch Successfull'
            }
        );
    }catch(err){
        console.error(err);
        res.status(500)
        .json(
            {
                success:false,
                error:err.message,
                message:'error in fetching Todo'
            }
        );
    }
}

exports.getTodoById = async(req,res) =>{
    try{

        const id = req.params.id;
        const todo = await Todo.findById({_id:id})
        // data not found
        if(!todo){
            return res.status(404)
            .json({
                success:false,
                message:"No data found for given Id",
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:todo,
                message:`Todo ${id} data successfully fetched`
            })
        }
    }catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        });
    }
}