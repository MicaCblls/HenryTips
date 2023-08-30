const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "localidad",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      localidad: { type: DataTypes.STRING(80), allowNull: false },
    },
    { timestamps: false }
  );
};
