const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Post = sequelize.define(
    "Post",
    {
        id: {
            type:  DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
        post_type: {
            type:  DataTypes.STRING,
        },
        post_content: {
            type:  DataTypes.STRING,
        },
        created_at: {
            type:  DataTypes.DATE,
        },
        updated_at: {
            type:  DataTypes.DATE,
        },
       
    },
    { timestamps: true }
);

module.exports = Post;
