const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./Routes/user");
const indexRoute = require("./Routes/index");
const authRoute = require("./auth/authRoutes");


// setting up database
require("dotenv").config();

const {connection} = require("./database/db");

// Middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// server config
const port = process.env.PORT || 5000;
const cors = require("cors");

const user = require("./model/user");
const test = require("./model/test");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());



app.use("/api/users", userRoute);
app.use("/api/index", indexRoute);
app.use("/api/auth", post)
app.use(authRoute);


// start server
app.listen(port, async () => {
    console.log("app is listening");
    connection.authenticate();
    await user.sync({alter: true});
    await test.sync({ alter: true }); // This creates/updates tables
    console.log("HTTP Server Started");
  });
