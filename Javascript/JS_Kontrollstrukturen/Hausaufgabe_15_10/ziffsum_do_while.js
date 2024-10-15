function sumOfDigits(number) {
    let sum = 0;

    // Die Schleife läuft, solange die Zahl größer als 0 ist
    do {
        sum += number % 10; // Addiere die letzte Ziffer zur Summe
        number = Math.floor(number / 10); // Entferne die letzte Ziffer
    } while (number > 0);

    return sum;
}

// Aufruf der Funktion mit der Zahl 248
console.log("Ziffernsumme von 248: " + sumOfDigits(248));
