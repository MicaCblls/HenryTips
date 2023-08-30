require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { PGDATABASE, PGHOST, PORT, PGUSER, PGPASSWORD, PGPORT } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: PGDATABASE,
        dialect: "postgres",
        host: PGHOST,
        port: PGPORT,
        username: PGUSER,
        password: PGPASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
        logging: false,
      })
    : new Sequelize(`postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/herytips`, {
        logging: false,
        native: false,
      });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Puesto, Departamento, Localidad, Empleado } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
/* Localidad.belongsToMany(Departamento, { through: "LOCALIDADES_DEPARTAMENTOS" });
Departamento.belongsTo(Localidad);
Departamento.belongsToMany(Empleado, { through: "EMPLEADOS_DEPARTAMENTOS" });
Empleado.belongsTo(Departamento);
Puesto.belongsToMany(Empleado, { through: "PUESTOS_EMPLEADOS" });
Empleado.hasOne(Empleado); */

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  Op,
};
