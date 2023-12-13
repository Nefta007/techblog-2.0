const Blog = require('./blog-models');
const User = require('./users-models');
const Comment = require('./comment-models');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Blog.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE',
});


Comment.belongsTo(Blog, {
    foreignKey: 'user_id',
});

module.exports = { User, Blog, Comment };