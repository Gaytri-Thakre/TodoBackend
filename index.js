// Flow of work:\
// Server is created
const express = require("express");
const app = express();
// load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000
// middleware is needed to pass json request body
app.use(express.json());
// import routes
const todoRoutes = require("./routes/Todo")
// Mounting all the routes
app.use("/api/v1",todoRoutes);
// start server
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT} `)
})
// db connection
const dbConnect = require("./config/database");
dbConnect();

// default route:
app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`)
})