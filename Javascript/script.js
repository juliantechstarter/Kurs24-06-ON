//JavaScript ist eine Programmiersprache, 
//die hauptsächlich verwendet wird, 
//Es ermöglicht Entwicklern, auf Ereignisse zu reagieren, 
//Inhalte zu verändern und Animationen zu erstellen. 
//JavaScript ist eine der Kerntechnologien des Webs neben HTML und CSS, 
//da es clientseitige Skripte ermöglicht, die auf Benutzeraktionen reagieren.

console.log("JavaScript läuft!");

var alter = 25;         // var - kann neu zugewiesen werden, aber ist global oder funktions-spezifisch
let name = "Julia";     // let - Block-scoped und kann neu zugewiesen werden
const beruf = "Lehrer"; // const - Konstante, kann nicht neu zugewiesen werden

console.log(alter, name, beruf);

let zahl = 100;               // Number
let text = "Hallo Welt";       // String
let wahr = true;               // Boolean
let obst = ["Apfel", "Banane"]; // Array
let person = {name: "Tom", alter: 30}; // Object

console.log(zahl, text, wahr, obst, person);

let num1 = 5;
let num2 = "5";

console.log(num1 == num2);  // true - nur Wert wird verglichen
console.log(num1 === num2); // false - Wert und Typ werden verglichen

let punktzahl = 85;

if (punktzahl >= 90) {
  console.log("Ausgezeichnet");
} else if (punktzahl >= 70) {
  console.log("Gut gemacht");
} else {
  console.log("Mehr Übung erforderlich");
}

// for-Schleife von 1 bis 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // while-Schleife von 0 bis 5
  let j = 0;
  while (j <= 5) {
    console.log(j);
    j++;
  }

  function begruessung(name) {
    return "Hallo, " + name + "!";
  }
  
  console.log(begruessung("Anna"));
  console.log(begruessung("Max"));

  
  