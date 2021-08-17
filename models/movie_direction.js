'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie_direction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  movie_direction.init({
    dir_id: DataTypes.INTEGER,
    mov_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie_direction',
    underscored: true,
  });
  return movie_direction;
};