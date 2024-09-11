// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Challenge example
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = function (Array) {
//   let min = 0;
//   let max = 0;

//   debugger;

//   for (let i = 0; i < Array.length; i++) {
//     if (Array[i] < min) min = Array[i];
//     if (Array[i] > max) max = Array[i];
//   }
//   return min;
// };

// const amplitude = calcAmplitude(temperatures);
// console.log(amplitude);

// Crear funcion llamada printForecast
// Dentro de la funcion, un array llamado arr

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}° in ${i + 1} days ...`);
  }
  console.log(`-------`);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 3];

printForecast(data1);
printForecast(data2);
