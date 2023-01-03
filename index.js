const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./Routes/user");
const indexRoute = require("./Routes/index");
const authRoute = require("./auth/authRoutes");


// setting up database
require("dotenv").config();

exports.mongoose.connect(process.env.MONGO_URRL,
    {useNewUrlParser: true}, ()=>{
    console.log("Sever connected to MongoDB")
});
mongoose.set('strictQuery', false);

// Middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// server config
const port = process.env.PORT || 5001;
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());



app.use("/api/users", userRoute);
app.use("/api/index", indexRoute);
app.use("/api/auth", post)
app.use(authRoute);


// start server
app.listen(5000,() =>{
    console.log("Backend server is running")
});
