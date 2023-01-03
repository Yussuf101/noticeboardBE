
const { DataTypes } = require("mongoose");

const { Mongoose } = require("../db");

const Test = Mongoose.define("test", {
    name: { type: DataTypes.STRING, allowNull: false }
}, {});

const main = async () => {
    try {
        await Test.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
};

main();

module.exports = Test;