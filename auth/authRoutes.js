const { Router } = require("express");

const { loginUser } = require("./authController");
const {
    checkPass,
    validPersistantToken,
} = require("../middleware/authentication");

const authRouter = Router();



authRouter.post("/auth", checkPass, loginUser);



authRouter.post(
    "/auth/checkToken",
    validPersistantToken
);

module.exports = authRouter;
