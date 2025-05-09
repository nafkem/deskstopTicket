const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Category = require('./Category');

const Article = sequelize.define('Article', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
}, {
  timestamps: true,
});

Article.belongsTo(User, { as: 'author_id' });
Article.belongsTo(Category);

module.exports = Article;
