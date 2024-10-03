console.log("Sesión JS05 - Operadores");

// Tipos de operadores
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
const categorias = [
  "Aritméticos", 
  "Asignación", 
  "Comparación", 
  "Lógicos",
  "Incremento y decremento",
  "Ternarios"
];

const listItems = categorias.map( (categoria)=> `<li> ${categoria} </li>` );
const refCategorias = document.getElementById("categorias");
const stringListItems = listItems.join("");
refCategorias.innerHTML = stringListItems;

//===============================================
// ---------------- Opéradores aritméticos ----------------
/* 
   adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3
*/
// Se realiza una conversión implícita
console.log("3" *  "3"); // 9
console.log("5" - 4 ); // 1
console.log("10" / 2 ); // 5
console.log( "20" % 4 ); // 0
// Saber si 3 números terminan con el mis dígito
// Ejemplo 1098, 78,  8  -> true
//           77,  6, 23  -> false

const verificarUltimoDigitoUsandoString = (numA, numB, numC) =>{
  const strNumA = String( numA );
  const strNumB = String( numB );
  const strNumC = String( numC );

  const lastDigitNumA = strNumA[ strNumA.length - 1 ];
  const lastDigitNumB = strNumB[ strNumB.length - 1 ];
  const lastDigitNumC = strNumC[ strNumC.length - 1 ];

  const result =  lastDigitNumA === lastDigitNumB && lastDigitNumA === lastDigitNumC;
  return result;
}

const verificarUltimoDigitoUsandoResiduo = (numA, numB, numC) =>{
  const lastDigitNumA = numA % 10; 
  const lastDigitNumB = numB % 10; 
  const lastDigitNumC = numC % 10; 
  
  const result = lastDigitNumA === lastDigitNumB && lastDigitNumA === lastDigitNumC;
  return result;
}

console.log(verificarUltimoDigitoUsandoString( 1098, 78, 8 ) ); // true
console.log(verificarUltimoDigitoUsandoString( 77, 6, 23 ) ); // false

console.log(verificarUltimoDigitoUsandoResiduo( 1098, 78, 8 ) ); // true
console.log(verificarUltimoDigitoUsandoResiduo( 77, 6, 23 ) ); // false

// Uso de rest parameters ( ...restParameters )
const verificarUltimoDigitoDeVariosNumeros = ( name, ...numeros  ) =>{
  console.log( name, numeros );

}
console.log( verificarUltimoDigitoDeVariosNumeros("Eli", 2, 22 ) ); // true
console.log( verificarUltimoDigitoDeVariosNumeros("Eli", 2, 22, 52 ) ); // true
console.log( verificarUltimoDigitoDeVariosNumeros("Eli", 2, 22, 52, 44 ) ); // false

// Saber si un año es bisiesto, verificar solo si es divisible entre 4
// Ejemplo: 2024 fue bisiesto, febrero tuvo 29 días
//          2023 no fue bisiesto
//          2020 fue bisiesto

/*
const isLeapYear = ( year ) => {
  const theChosenYear = year % 4;
  return theChosenYear === 0;
} */

const isLeapYear = ( year ) => year % 4 === 0;

console.log( isLeapYear(2024) ); // true
console.log( isLeapYear(2023) ); // false
console.log( isLeapYear(2020) ); // true

//  Ejercios para aplicar la precedencia de operadores:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

console.log(  3 * 2 / 2  ); // 3

console.log(  3 / 2 * 2  ); // 3

console.log(  2 * 4 / 2**3 ); // 2 * 4 / (2^3) =   8 / 8 = 1

console.log(  3 ** 2 ** 3  ); // 3^( 2^3 ) = 3^8 = 6561

console.log( 20 / 4 + 3 * (2 + 3) - 4 ** 2 ); //  4
        //   20 / 4 + 3 *    5    -   16
        //      5   +    15       -   16
        //         20             -   16
        //                        4
      