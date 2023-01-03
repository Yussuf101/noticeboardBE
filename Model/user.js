const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    "User",
    {
        id: {
            type:"INTEGER",
            autoIncrement: true,
            primaryKey: true,
        },
        user_name: {
            type: "STRING",
            allowNull: false,
            unique: true,
        },
        email: {
            type: "STRING",
            allowNull: false,
            unique: true,
        },
        password: {
            type: "STRING",
            allowNull: false,
        },
        name: {
            type: "STRING",
            allowNull: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
