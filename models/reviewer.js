"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class reviewer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            reviewer.hasMany(models.rating, {
                foreignKey: 'rev_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        }
    }
    reviewer.init({
        rev_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        rev_name: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: "reviewer",
        underscored: true,
        freezeTableName: true
    });
    return reviewer;
};