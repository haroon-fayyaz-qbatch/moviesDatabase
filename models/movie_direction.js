"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class movie_direction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            movie_direction.belongsTo(models.director, { foreignKey: 'dir_id' });
            movie_direction.belongsTo(models.movie, { foreignKey: 'mov_id' });
        }
    }
    movie_direction.init({
        dir_id: DataTypes.INTEGER,
        mov_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "movie_direction",
        underscored: true,
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    movie_direction.removeAttribute('id');
    return movie_direction;
};