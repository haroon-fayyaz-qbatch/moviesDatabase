"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class movie_cast extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            movie_cast.belongsTo(models.actor);
            movie_cast.belongsTo(models.movie);
        }
    }
    movie_cast.init({
        role: DataTypes.STRING,
        act_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: { model: "actor", key: "act_id" },
        },
        mov_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: { model: "movie", key: "mov_id" },
        },
    }, {
        sequelize,
        modelName: "movie_cast",
        freezeTableName: true,
    });
    return movie_cast;
};