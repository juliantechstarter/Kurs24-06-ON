function getTemperatur() {
    // Erzeugt eine zufällige Zahl zwischen -20 und 40 Grad Celsius
    return Math.floor(Math.random() * 61) - 20;
 }
 
 function checkTemperatur() {
     // Holt den Wert aus der Funktion getTemperatur().
     const grad = getTemperatur();
     console.log('Die Temperatur beträgt:' + grad + '°C');
 
     // Verwendung der switch-Anweisung zur Notenüberprüfung
         if (grad < 0) {
             console.log("Es ist sehr kalt");
        } else if (grad >= 0 && grad <= 15) {
             console.log("Es ist kühl");
        } else if (grad >= 16 && grad <= 25) {
             console.log("Es ist angenehm warm");
        } else {
             console.log("Es ist heiß");
     }
}
 
 // Funktionsaufruf
 checkTemperatur();