"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rating.belongsTo(models.movie, { foreignKey: "mov_id" });
      rating.belongsTo(models.reviewer, { foreignKey: "rev_id" });
    }
  }
  rating.init(
    {
      mov_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: "movie", key: "mov_id" },
      },
      rev_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: "reviewer", key: "rev_id" },
      },
      rev_stars: DataTypes.DOUBLE(4),
      num_o_ratings: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "rating",
      underscored: true,
      freezeTableName: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  rating.removeAttribute("id");
  return rating;
};
