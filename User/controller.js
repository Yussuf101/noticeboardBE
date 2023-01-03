// Crud operations for user using express and sequelize
const User = require("../Model/user");


const jwt = require("jsonwebtoken");

// create a new user
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(
            {
                user_name: req.body.user_name,
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                address: req.body.address,
            },
            {
                attributes: [
                    "id",
                    "user_name",
                    "email",
                    "name",
                    "address",
                ],
            }
        );

        // a new token is issued
        // token is issued with the id and username

        const token = await jwt.sign(
            {
                id: newUser.id,
            },
            process.env.SECRET
        );

        newUser.token = token;
        res.status(201).json({
            token: token,
            id: newUser.id,
            user_name: newUser.user_name,
            email: newUser.email,
            name: newUser.name,
            address: newUser.address,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


exports.readUser = async (req, res) => {
    try {
        const user = await User.findOne(
            // req.params.id,
            {
                where: {
                    id: req.params.id,
                },
            },
            {
                attributes: [
                    "id",
                    "user_name",
                    "email",
                    "name",
                    "address",
                ],
            }
        );
        if (!user) {
            res.status(200).json([]);
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(
            req.params.id,
            {
                attributes: [
                    "id",
                    "user_name",
                    "email",
                    "name",
                    "address",
                ],
            }
        );
        if (user) {
            await User.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });

            const UpdatedUser =
                await User.findByPk(
                    req.params.id,
                    {
                        attributes: [
                            "id",
                            "user_name",
                            "email",
                            "name",
                            "address",
                        ],
                    }
                );

            res.status(200).json(UpdatedUser);
        } else {
            res.status(404).json({
                message: "User not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(
            req.params.id
        );
        if (user) {
            await User.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json({
                message: "User deleted",
            });
        } else {
            res.status(404).json({
                message: "User not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};