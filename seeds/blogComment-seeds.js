const { Comment } = require("../models");

const CommentData = [
    {
        id: 1,
        blog_body: "Good mornign everyone hope you are having a greate day!",
        user_id: 1,
        blogpost_id:1
    },
    {
        id: 2,
        blog_body: "It is currently 3 am",
        user_id:2,
        blogpost_id:2
    },
];

const seedComment =() => Comment.bulkCreate(CommentData);
module.exports = seedComment;