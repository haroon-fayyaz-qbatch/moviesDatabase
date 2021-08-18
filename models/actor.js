"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class actor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            actor.hasMany(models.movie_cast, {
                foreignKey: "act_id",
                onDelete: "cascade",
                onUpdate: "cascade",
            });
        }
    }
    actor.init({
        act_fname: DataTypes.STRING,
        act_lname: DataTypes.STRING,
        act_gender: DataTypes.CHAR,
    }, {
        sequelize,
        modelName: "actor",
        freezeTableName: true,

    });
    return actor;
};