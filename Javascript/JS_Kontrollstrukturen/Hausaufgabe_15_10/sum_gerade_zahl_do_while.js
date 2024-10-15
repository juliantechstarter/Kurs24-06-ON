function EvenNum() {
    let sum = 0;
    let i = 1; // Zähler

    // Die Schleife läuft, bis der Zähler 100 erreicht
    do {
        // Prüfe, ob die Zahl gerade ist
        if (i % 2 === 0) {
            sum += i; // Füge die gerade Zahl zur Summe hinzu
        }
        i++; // Inkrementiere den Zähler
    } while (i <= 100);

    return sum;
}

// Aufruf der Funktion und Ausgabe des Ergebnisses
console.log("Summe der geraden Zahlen (do-while-Schleife): " + EvenNum());
