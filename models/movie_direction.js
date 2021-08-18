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
            movie_direction.belongsTo(models.director, { foreignKey: 'dir_id', constraints: false });
            movie_direction.belongsTo(models.movie, { foreignKey: 'mov_id', constraints: false });
        }
    }
    movie_direction.init({
        dir_id: DataTypes.INTEGER,
        mov_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "movie_direction",
        underscored: true,
        freezeTableName: true
    });
    return movie_direction;
};