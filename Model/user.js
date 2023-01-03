const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");


const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_name: {
            type:  DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type:  DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type:  DataTypes.STRING,
            allowNull: true,
        },
    },
    { timestamps: true }
);

module.exports = User;
