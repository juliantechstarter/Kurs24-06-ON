function calcSum(array) {
    // Deklariere die Summe, die auf 0 startet
    let sum = 0;
    // Initialisiere die Zählvariable für die while-Schleife
    let i = 0;

    // while-Schleife, die läuft, solange i kleiner ist als die Array-Länge
    while (i < array.length) {
        sum += array[i]; // Füge den aktuellen Wert von array[i] zur Summe hinzu
        i++; // Inkrementiere die Zählvariable
    }

    return sum; // Gib die berechnete Summe zurück
}

// Deklaration des Arrays und Aufruf der Funktion
const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ergebnisSum = calcSum(zahlenArray);
console.log("Die Summe beträgt: " + ergebnisSum);
