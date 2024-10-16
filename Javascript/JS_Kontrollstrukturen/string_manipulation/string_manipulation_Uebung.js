// Aufgabe 1: String Verkettung
// Speichere Name und Alter als Variablen und gebe eine Begrüßung aus

let name = "Julian";
let alter = 31;
console.log("Hallo, " + name + ". Du bist " + alter + " Jahre alt.");
// Ausgabe: Hallo, Julian. Du bist 31 Jahre alt.


// Aufgabe 2: Template String
// Speichere Vorname, Nachname und Stadt und gebe eine Vorstellung aus

let vorname = "Julian";
let nachname = "Sänger";
let stadt = "Dortmund";
console.log(`Ich heiße ${vorname} ${nachname} und komme aus ${stadt}.`);
// Ausgabe: Ich heiße Julian Sänger und komme aus Dortmund.


// Aufgabe 3: String-Methoden
// Gib den vollständigen Namen in Klein- und Großbuchstaben aus und entferne überflüssige Leerzeichen

let vollerName = "   Julian Sänger   ";
console.log(vollerName.toLowerCase()); // Ausgabe: "   julian sänger   "
console.log(vollerName.toUpperCase()); // Ausgabe: "   JULIAN SÄNGER   "
console.log(vollerName.trim()); // Ausgabe: "Julian Sänger" (ohne Leerzeichen am Anfang und Ende)


// Aufgabe 4: String-Interpolation in Funktionen
// Erstelle eine Funktion, die einen Namen als Parameter nimmt und eine Begrüßung zurückgibt

function begruesse(name) {
    return `Willkommen, ${name}!`;
}

console.log(begruesse("Julian")); 
// Ausgabe: Willkommen, Julian!


// Aufgabe 5: Verwendung von replace()
// Ersetze ein Wort in einem Satz

let satz = "Julian kommt aus München.";
let neuerSatz = satz.replace("München", "Dortmund");
console.log(neuerSatz);
// Ausgabe: Julian kommt aus Dortmund.
