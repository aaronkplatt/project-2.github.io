module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        }
    });

    Game.associate = function (models) {
        // We're saying that a Game should belong to an User
        // A Game can't be created without an User due to the foreign key constraint
        Game.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Game;
};
