"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class director extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            director.hasMany(models.movie_direction, {
                foreignKey: "dir_id",
                onDelete: "cascade",
                onUpdate: "cascade",
            });
        }
    }
    director.init({
        dir_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        dir_fname: DataTypes.STRING,
        dir_lname: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "director",
        underscored: true,
        freezeTableName: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return director;
};