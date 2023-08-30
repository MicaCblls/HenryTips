// 1 - Crear un algoritmo que muestre los números impares entre el 0 y el 10.

/* const unevenNumbers = () => {
  let uneven = [];

  for (let i = 0; i < 100; i++) {
    i % 2 !== 0 ? uneven.push(i) : null;
  }
  return uneven;
};

console.log(unevenNumbers()); */

/* -------------------------------------------------------------------------------------------------------- */

// 2 - Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. Definir otros dos metodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)

/* class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  print() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  
  isOlder() {
    this.age < 18
    ? console.log(`${this.name} is underage.`)
    : console.log(`${this.name} is an adult.`);
  }
}

const studen1 = new Student("Gabriel", 16);
const studen2 = new Student("Lucas", 18);
studen1.print();
studen2.print();
studen1.isOlder();
studen2.isOlder(); */

/* -------------------------------------------------------------------------------------------------------- */

// 3 - JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código. const x = ["n", "bro", "c", "|"]; const y = ["d", "n", "l", "bro", "g"];

/* const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

const getSingleValues = (arr1, arr2) => {
  return arr2.filter((elem) => !arr1.includes(elem));
};
console.log(getSingleValues(x, y)); */

/* -------------------------------------------------------------------------------------------------------- */

// 4 - Dada la siguiente base de datos relacional: RESUELVA LAS SIGUIENTES CONSULTAS EN SQL:

//Primera consulta: Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)

//QUERY: SELECT nombres FROM empleados ORDER BY nombres DESC

//Segunda consulta: Seleccionar el nombre, puesto y la localidad donde trabajan los empleados con puesto de‘Soporte’.

//QUERY: SELECT EMPLEADOS.NOMBRES, PUESTOS.PUESTO, LOCALIDADS.LOCALIDAD  FROM EMPLEADOS JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID JOIN LOCALIDADS ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADS.ID JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID WHERE PUESTOS.PUESTO = 'Soporte'

//Tercera consulta: Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.

//QUERY: SELECT NOMBRES FROM EMPLEADOS WHERE NOMBRES LIKE '%o'

//Cuarta consulta: Seleccionar el nombre, puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.

//QUERY: SELECT EMPLEADOS.NOMBRES, PUESTOS.PUESTO, EMPLEADOS.SUELDO FROM EMPLEADOS JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID JOIN LOCALIDADS ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADS.ID JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID WHERE DEPARTAMENTOS.DENOMINACION = 'Carlos Paz'

//Quinta consulta: Seleccionar el nombre, sueldo y localidad donde trabajan los empleados que tengan un sueldo entre 10000 y 13000.

//query: SELECT EMPLEADOS.NOMBRES, LOCALIDADS.LOCALIDAD, PUESTOS.PUESTO, EMPLEADOS.SUELDO FROM EMPLEADOS JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID JOIN LOCALIDADS ON DEPARTAMENTOS LOCALIDAD_ID = LOCALIDADS.ID JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID WHERE EMPLEADOS.SUELDO BETWEEN 10000 AND 13000

//Sexta consulta: Visualizar los departamentos con más de 5 empleados.

//QUERY: SELECT DEPARTAMENTOS.DENOMINACION FROM DEPARTAMENTOS JOIN EMPLEADOS ON DEPARTAMENTOS.ID = EMPLEADOS.DEPARTAMENTO_ID GROUP BY DEPARTAMENTOS.DENOMINACION HAVING count(EMPLEADOS.NOMBRES)>5

//Septima consulta: Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’  o ‘Programador’.

//QUERY: SELECT EMPLEADOS.NOMBRES FROM EMPLEADOS JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID JOIN LOCALIDADS ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADS.ID JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID WHERE LOCALIDADS.LOCALIDAD = 'Cordoba' AND PUESTOS.PUESTO = 'Programador' OR LOCALIDADS.LOCALIDAD = 'Cordoba' AND PUESTOS.PUESTO = 'Analista'

//Octava consulta: Calcula el sueldo medio de todos los empleados.

//QUERY: SELECT avg(EMPLEADOS.SUELDO) AS SUELDO_MEDIO FROM EMPLEADOS

//Novena consulta: ¿Cuál es el máximo sueldo de los empleados del departamento 2?

//QUERY: SELECT MAX(EMPLEADOS.SUELDO) AS SUELDO_MAXIMO FROM EMPLEADOS JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID JOIN LOCALIDADS ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADS.ID JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID WHERE EMPLEADOS.DEPARTAMENTO_ID = 2

//Decima consulta: Calcula el sueldo mínimo de los empleados cuyo puesto sea ‘Soporte’.

//QUERY: SELECT MIN(EMPLEADOS.SUELDO) AS SUELDO_MINIMO FROM EMPLEADOS JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID JOIN LOCALIDADS ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADS.ID JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID WHERE PUESTOS.PUESTO = 'Soporte'

//Undécima consulta: Para cada puesto obtener la suma de sueldos.

//QUERY: SELECT PUESTOS.PUESTO, SUM(SUELDO) FROM EMPLEADOS JOIN PUESTOS ON PUESTOS.ID = EMPLEADOS.PUESTO_ID GROUP BY PUESTOS.PUESTO
