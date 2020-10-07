module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [45]
        }
      },
      score: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          len: [45]
        }
      }
    });
  
    Score.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Score.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Score;
  };
  