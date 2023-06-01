const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./model/taskModel");
const taskRoute = require("./routes/taskRoutes")
const cors = require("cors")

const app = express();
connectDB();

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended : false}))
// const logger = (req,res,next) => {
//     console.log("Middleware ran");
//     next(); 
// } 
app.use(cors())

app.use("/api/tasks",taskRoute);

// Routes
app.get("/" , (req,res) => {
    res.send("Home Page");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}) 


/*/*//* Another method to connect to DB first and then start server

const startServer = async () => {
    try {
        await connectDB(); 
        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });
    }   
    catch(error)
    {
        console.log(error);
    }
};

startServer();

*/

