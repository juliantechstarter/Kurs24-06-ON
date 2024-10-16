// Aufgabe 1: String Verkettung

let name = "Julian";
let alter = 31;
console.log("Hallo, " + name + ". Du bist " + alter + " Jahre alt.");



// Aufgabe 2: Template String

let vorname = "Julian";
let nachname = "Sänger";
let stadt = "Dortmund";
console.log(`Ich heiße ${vorname} ${nachname} und komme aus ${stadt}.`);



// Aufgabe 3: String-Methoden

let vollerName = "   Julian Sänger   ";
console.log(vollerName.toLowerCase()); // Ausgabe: "   julian sänger   "
console.log(vollerName.toUpperCase()); // Ausgabe: "   JULIAN SÄNGER   "
console.log(vollerName.trim()); // Ausgabe: "Julian Sänger" (ohne Leerzeichen am Anfang und Ende)


// Aufgabe 4: String-Interpolation in Funktionen

function begruesse(name) {
    return `Willkommen, ${name}!`;
}
console.log(begruesse("Julian")); 



// Aufgabe 5: Verwendung von replace()

let satz = "Julian kommt aus München.";
let neuerSatz = satz.replace("München", "Dortmund");
console.log(neuerSatz);

