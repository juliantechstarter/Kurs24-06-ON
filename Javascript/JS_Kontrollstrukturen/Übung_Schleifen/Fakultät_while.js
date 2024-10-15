function factorialWhile(n) {
    let result = 1; // Initialisiere das Ergebnis auf 1
    let i = n;      // Initialisiere den Zähler mit n

    // Solange i größer als 0 ist
    while (i > 0) {
        result *= i; // Multipliziere das Ergebnis mit der aktuellen Zahl
        i--;         // Verringere den Zähler
    }

    return result; // Gib das Ergebnis zurück
}

// Aufruf der Funktion und Ausgabe des Ergebnisses für n=5
console.log("Fakultät (while-Schleife) von 5: " + factorialWhile(5));
