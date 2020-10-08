module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the user model a name of type STRING
      name: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45]
      },
      password: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [45]
      }
    });
  
    User.associate = function(models) {
      // Associating User with scores
      // When an User is deleted, also delete any associated Users
      User.hasMany(models.Scores);
    };
  
    return User;
  };
  