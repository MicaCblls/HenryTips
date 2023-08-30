const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "empleado",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      comision: { type: DataTypes.DOUBLE, allowNull: false },
      edad: { type: DataTypes.INTEGER, allowNull: false },
      fechaalta: { type: DataTypes.DATE, allowNull: false },
      nombres: { type: DataTypes.STRING, allowNull: false },
      sueldo: { type: DataTypes.DOUBLE, allowNull: false },
      puesto_id: { type: DataTypes.INTEGER, allowNull: false },
      departamento_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { timestamps: false }
  );
};
