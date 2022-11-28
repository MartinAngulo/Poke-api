const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Types = sequelize.define(
    "Types",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Types.associate = function (models) {
    Types.belongsToMany(models.Pokemon, {
      through: "poke-types",
      foreignKey: "typeId",
    });
  };

  return Types;
};
