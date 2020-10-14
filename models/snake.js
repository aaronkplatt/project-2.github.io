module.exports = function(sequelize, DataTypes) {
  var Snake = sequelize.define("Snake", {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    }
  });
  Snake.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Snake.belongsTo(models.User, { //this generates UserId
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Snake;
};