const { Router } = require("express");

const {
    hashPass,
    validateToken,
} = require("../middleware/authentication");

const {
    validateNewUser,
} = require("../middleware/validation");

const {
    readUsers,
    readUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../User/controller");
const userRouter = Router();

userRouter.get(
    "/users",
    validateToken,
    readUsers
);


userRouter.get(
    "/user/:id",
    validateToken,
    readUser
);

userRouter.post(
    "/user",
    validateNewUser,
    hashPass,
    createUser
);


userRouter.put(
    "/user/:id",
    validateToken,
    hashPass,
    updateUser
);


userRouter.delete(
    "/user/:id",
    validateToken,
    deleteUser
);

module.exports = userRouter;
