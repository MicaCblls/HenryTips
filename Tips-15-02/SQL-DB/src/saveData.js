const { Empleado, Localidad, Puesto, Departamento, Op } = require("./db");
const data = require("../data.json");

const getDataFromDb = async () => {
  try {
    let empleadosData = await Empleado.findAll();
    let localidadesData = await Localidad.findAll();
    let puestoData = await Puesto.findAll();
    let departamentoData = await Departamento.findAll();

    console.log({
      empleados: empleadosData,
      localidades: localidadesData,
      puestos: puestoData,
      departamentos: departamentoData,
    });
    return {
      empleados: empleadosData,
      localidades: localidadesData,
      puestos: puestoData,
      departamentos: departamentoData,
    };
  } catch (error) {
    console.log(error);
  }
};

const saveDataInDB = async () => {
  console.log(
    data.localidades,
    data.puestos,
    data.empleados,
    data.departamentos
  );
  try {
    let dbData = await getDataFromDb();

    if (
      !dbData ||
      (!dbData?.departamentos?.length &&
        !dbData?.empleados?.length &&
        !dbData?.puestos?.length &&
        !dbData?.localidades?.length)
    ) {
      console.log("entre");
      await Puesto.bulkCreate(data.puestos, { validate: true });
      await Empleado.bulkCreate(data.empleados, { validate: true });
      await Departamento.bulkCreate(data.departamentos, { validate: true });
      await Localidad.bulkCreate(data.localidades, { validate: true });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveDataInDB };
