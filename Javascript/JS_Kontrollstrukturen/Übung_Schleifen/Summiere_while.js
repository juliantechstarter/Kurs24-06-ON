function EvenNum() {
    let sum = 0; // Initialisiere die Summe
    let i = 1;   // Initialisiere den Zähler

    // Solange i kleiner oder gleich 100 ist
    while (i <= 100) {
        // Überprüfe, ob die Zahl gerade ist
        if (i % 2 === 0) {
            sum += i; // Addiere die gerade Zahl zur Summe
        }
        i++; // Inkrementiere den Zähler
    }

    return sum; // Gib die Summe zurück
}

// Aufruf der Funktion und Ausgabe des Ergebnisses
console.log("Summe der geraden Zahlen (while-Schleife): " + EvenNum());
