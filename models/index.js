const Blog = require('./blog-models');
const User = require('./users-models');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});