let GLOBAL = '--------------------';

// Values and Variables
let country = 'Spain';
let continent = 'Europa';
let population = 48000000;

console.log(country);
console.log(continent);
console.log(population);
console.log(GLOBAL);

// Data Types
let isIsland = false;
let languaje;

console.log(isIsland);
console.log(country);
console.log(continent);
console.log(population);
console.log(GLOBAL);

const year = 1996;
const completeName = `Arturo Sendra`

const fraseComplete = `Hola, soy ${completeName} y soy del ${year}`;

console.log(fraseComplete);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
} else {
    console.log(`John's BMI is higher than Mark's!`)
}

let day = 'Wednesday';

if(day === 'Monday'){
    console.log('Plan Course');
} else if (day === 'Tuesday'){
    console.log('Thursday');
} else if (day === 'Wednesday' || day === ('Thuersday')) {
    console.log('Write code examples');
} else {
    console.log('me la pela');
}

// Operador ternario
const bebida = 21>= 18 ? 'Hola bebe' : 'ris ras primo';
console.log(bebida) 