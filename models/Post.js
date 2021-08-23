// Import sequelize, seq.model, and seq.datatypes
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Post extends Model {}


// post.init to create columns and datatypes for posts. 
Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },

// set up sequalize settings and modelName as "post" for lower case.
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

// export Post model

module.exports = Post;
