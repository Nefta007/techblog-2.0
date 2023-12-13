const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model { }

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    blog_body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blog_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    blogpost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blogPost',
            key: 'id',
        },
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);
module.exports = Comment;