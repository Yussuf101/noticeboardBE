
const PostSchema = new mongoose.Schema(
    "Post",
    {
        id: {
            type: "INTEGER",
            primaryKey: true,
            autoIncrement: true,
        },
        post_type: {
            type: "INTEGER",
        },
        post_content: {
            type: "STRINg",
        },
        created_at: {
            type: "DATE",
        },
        updated_at: {
            type: "DATE",
        },
       
    },
    { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
