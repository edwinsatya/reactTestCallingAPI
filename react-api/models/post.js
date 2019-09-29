'use stict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Post extends Model {
    static showAll() {
      return this.findAll()
        .then(data => {
          return data;
        })
        .catch(err => {
          console.log(err);
        })
    }

  };

  Post.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post'
  })

  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};