// Wie haben wir bisher Arrays angelegt?


// Ein leeres Array
const leeresArray = [];

//Ein einfaches Zahlen-Array
// Array hat eine Laenge von 5
// Indizes: 0-4
const zahlenArray = [1, 2, 3, 4, 5];

//ein einfaches String-Array
const namen = ["ahmet", "brian", "steven", "merlin"];

console.log (namen [0]);
console.log (namen [1]); 
console.log (leeresArray[3]);

//Befüllen von Arrays
namen.push("marcel");
zahlenArray.push(6);
leeresArray.push("Hund");
namen.push("iman", "jeffrey", "rudi", "markus", "katharina");
console.log(namen);
console.log(zahlenArray);
console.log(leeresArray);

//Entfernen des letzten Elements aus einem Array
//Das letzte Element eines Arrays muss nicht angegeben werdem!
namen.pop();
zahlenArray.pop();
leeresArray.pop();

console.log(namen);
console.log(zahlenArray);
console.log(leeresArray);

//Splice kann Elemente in einem Array entfernen
//Es sollten immer Start- und Endwerte angegegben werden.
//namen.splice(2);
//console.log(namen);



//Unshift fuegt Elemente an den Anfangen eines Arrays hinzu.
namen.unshift("alper", "stefan", "patrick");
console.log(namen);

//Shift 
namen.shift();
console.log(namen);

// CALLBACKS
namen.forEach(namen => {
    console.log(namen);
}); 


// Manipulation von Arrays
let slicedNamen = namen.slice(2, 5);
console.log(slicedNamen);

