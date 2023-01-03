require("dotenv").config();


exports.mongoose.connect(process.env.MONGO_URRL,
    {useNewUrlParser: true}, ()=>{
    console.log("Sever connected to MongoDB")
});
mongoose.set('strictQuery', false);