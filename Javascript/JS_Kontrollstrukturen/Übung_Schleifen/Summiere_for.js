function EvenNum() {
    let sum = 0; // Initialisiere die Summe

    // Durchlaufe alle Zahlen von 1 bis 100
    for (let i = 1; i <= 100; i++) {
        // Überprüfe, ob die Zahl gerade ist
        if (i % 2 === 0) {
            sum += i; // Addiere die gerade Zahl zur Summe
        }
    }

    return sum; // Gib die Summe zurück
}

// Aufruf der Funktion und Ausgabe des Ergebnisses
console.log("Summe der geraden Zahlen (for-Schleife): " + EvenNum());
