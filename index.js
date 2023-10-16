import express from "express";
import mongoose from 'mongoose';
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

//http://localhost:5000/api/user/logon



mongoose.connect('mongodb+srv://anandrajei19:q93AJc8udwNp0v8K@cluster0.e5uthmh.mongodb.net/BlogApp?retryWrites=true&w=majority')
                .then(()=> app.listen(5000))
                .then(()=> console.log("Connected to database and Listening on port 5000"))
                .catch((err)=> console.log(err))


console.log("Hello");


