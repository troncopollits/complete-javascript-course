// // "use strict";

// // // Function declaration
// // function calcAge1(birtYear) {
// //   return 2034 - birtYear;
// // }

// // const age1 = calcAge1(1996);

// // // Function expression
// // const calcAge2 = function (birthYear) {
// //   return 2032 - birthYear;
// // };

// // const age2 = calcAge2(1991);
// // console.log(age1, age2);

// // const calcAge3 = (birtYear) => 2035 - birtYear;

// // const age3 = calcAge3(1999);
// // console.log(age3);

// // console.log("-----------------------------");
// // console.log("Funciones dentro de funciones");
// // console.log("-----------------------------");

// // //Vamos a ver como llamar a funciones detro de funciones
// // const cutPieces = function (fruit) {
// //   return fruit * 4;
// // };

// // const fruitProcessor = function (apples, oranges) {
// //   const applePieces = cutPieces(apples);
// //   const orangePieces = cutPieces(oranges);

// //   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
// //   return juice;
// // };

// // console.log(fruitProcessor(9, 8));

// // console.log("-----------------------------");
// // console.log("-----------------------------");
// // console.log("-----------------------------");

// // // Calculate the Average
// // const calcAverage = (scored1, scored2, scored3) => {
// //   let average = (scored1 + scored2 + scored3) / 3;
// //   return average;
// // };

// // function checkWinner(scoreDolphins, scoreKoalas) {
// //   let multiplicateScoreDolphins = scoreDolphins * 2;
// //   let multiplicatecoreKoalas = scoreKoalas * 2;

// //   if (scoreDolphins > multiplicatecoreKoalas)
// //     return console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas})`);

// //   if (scoreKoalas > multiplicateScoreDolphins)
// //     return console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`);

// //     else return console.log(`No team wins...`);
// // }

// // let scoreDolphins = calcAverage(44, 23, 71); //46
// // let scoreKoalas = calcAverage(65, 54, 49); //56

// // let scoreDolphins2 = calcAverage(85, 54, 41); //60
// // let scoreKoalas2 = calcAverage(23, 34, 27); //28

// // checkWinner(scoreDolphins, scoreKoalas);
// // checkWinner(scoreDolphins2, scoreKoalas2);

// //Exercises
// // 1. Write a Javascript function to print the 'helloWord' message
// const helloWord = function (frase) {
//   console.log(`Esto es lo que me pasaron => ${frase}`);
// };

// helloWord("Viva Hitler");

// // 2. Write a function that returns the square of a number
// const square = (number) => console.log(`Esto es lo que hay ${number * number}`);
// square(9);

// // Arrays
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const years = [1980, 1996, 2000, 1949, 1965];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[3]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(`Años => ${age1}, ${age2}, ${age3}`);

// const ages = [calcAge(years[2]), calcAge(years[0]), calcAge(years[3])];
// console.log(ages);

// // CHALLENGE #2
// function calcTip(valor) {
//   const quince = 15;
//   const veinte = 20;
//   let cuenta;
//   if (valor > 50 && valor < 300) {
//     cuenta = (valor * quince) / 100;
//   } else {
//     cuenta = (valor * veinte) / 100;
//   }
//   return cuenta;
// }

// console.log(`La propina es de: ${calcTip(100)}€`);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips);
// console.log(totals);

// // Challenge
// // 'Jonas has 3 friends, and his best friend is called Michael

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schaftfdment",
//   age: 2024 - 1991,
//   bestFriends: ["Michael", "Steven", "Peter"],
// };

// console.log(
//   `${jonas.firstName} has ${jonas.bestFriends.length} friends, and his best friend is called ${jonas.bestFriends[0]}`
// );

// // Create function inside object
// const pepe = {
//   firstName: "Pepe",
//   lastName: "Leches",
//   birthYear: 1923,
//   bestFriends: ["Michael", "Steven", "Peter"],
//   hasDriversLicense: false,

//   age: function () {
//     return 2024 - this.birthYear;
//   },

//   frase: function () {
//     let edad = this.age();
//     let cadenaResultado;
//     if (this.hasDriversLicense == true) {
//       cadenaResultado = `${this.firstName} is a ${edad}-year old, and he has a driver's license`;
//     } else {
//       cadenaResultado = `${this.firstName} is a ${edad}-year old, and he has not a driver's license. Sorry beibi`;
//     }

//     return cadenaResultado;
//   },
// };

// console.log(pepe.age());
// console.log(pepe.frase());

// // ======= CHALLENGE #3 ========
// // Declarate objects
// const mark = {
//   fullName: "Mark Miller's",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith's",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// john.calcBMI();
// mark.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }

// Bucle FOR
// const jonasArray = [
//   "Jonas",
//   "Sendra",
//   2037 - 1991,
//   "web developer",
//   ["Pepe", "Gotera", "Otilio"],
//   false,
// ];

// const nuevoArray = [];
// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i]);
//   nuevoArray.push(typeof jonasArray[i]);
//   console.log(nuevoArray);
// }

// const years = [1990, 1987, 2000, 1996];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   const year = 2024;
//   const newYear = years[i];
//   ages.push(year - newYear);
//   console.log(ages);
// }

// const jonasArray = [
//   "Jonas",
//   "Garcia",
//   2037 - 1991,
//   "web developer",
//   ["Pepe", "Gotera", "Otilio"],
// ];

// // Hacer un for que empieze por el final del objeto en cuestión
// // lo importante en el for inverso está en la declaración de la variable, ya que siempre hay que restarle uno
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(jonasArray[i]);
//   console.log(i);
// }

// Bucle For anidado
// const exercises = 3;
// const repetitions = 5;
// for (let i = 1; i <= exercises; i++) {
//   console.log(`=========== Ejercicio ${i} ===========`);
//   for (let j = 1; j <= repetitions; j++) {
//     console.log(`-- Repeticion ${j}`);
//   }
// }

// Bucle while
let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weights repetition ${rep}`);
  rep++;
}

// Ejemplo de dado rodando con número aleatorio
// Math.trunc es para quitar los decimales
let dado = Math.trunc(Math.random() * 6) + 1;
console.log(dado);

// CHALLENGE 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++){
  
  calcTip(bills[i]);

  function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      let tip = bill * 0.15;
      tips.push(Math.trunc(tip));
      let total = bill + tip;
      totals.push(Math.trunc(total));
    } else {
      let tip = bill * 0.30;
      tips.push(Math.trunc(tip));
      let total = bill + tip;
      totals.push(Math.trunc(total));
    }
  }
  console.log(`Propinas => ${tips}`);
  console.log(`Cuenta total => ${totals}`);
  console.log(`----------------`)
  
}

calcAverage(totals);

function calcAverage(Array) {
  let sumaTotal = 0;
  let contadorArray = Array.length;
  for(let i = 0; i < contadorArray; i++){
    sumaTotal = sumaTotal + Array[i];
  }
  let average = sumaTotal / contadorArray;
  console.log(average);
}


// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // CHALLENGE #2
// function calcTip(valor) {
//   const quince = 15;
//   const veinte = 20;
//   let cuenta;
//   if (valor > 50 && valor < 300) {
//     cuenta = (valor * quince) / 100;
//   } else {
//     cuenta = (valor * veinte) / 100;
//   }
//   return cuenta;
// }
