function factorialFor(n) {
    let result = 1; // Initialisiere das Ergebnis auf 1

    // Durchlaufe alle Zahlen von n bis 1
    for (let i = n; i > 0; i--) {
        result *= i; // Multipliziere das Ergebnis mit der aktuellen Zahl
    }

    return result; // Gib das Ergebnis zurück
}

// Aufruf der Funktion und Ausgabe des Ergebnisses für n=5
console.log("Fakultät (for-Schleife) von 5: " + factorialFor(5));
