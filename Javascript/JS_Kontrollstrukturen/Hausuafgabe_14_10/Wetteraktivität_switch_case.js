function getwetter() {
    // Ermittelt eine Zufallszahl zwischen 0 und 99 und rundet sie auf eine ganze Zahl ab.
    return Math.floor(Math.random() *"Sonnig"+"Regnerisch"+"Schnee"+"Windig");
}

function checkwetter() {
    // Holt den Wert aus der Funktion getAge().
    const wetter = getwetter();
    console.log("Es ist " + wetter); 

    // Verwendung der switch-Anweisung zur Altersüberprüfung
    switch (true) {
        case (wetter == Sonnig):
            console.log("Gehe spazieren");
            break;
        case (wetter == "Regnerisch"):
            console.log("Bleibe zu Hause und lese ein Buch");
            break;
        case (wetter =="am schneien"):
            console.log("Bleibe zu Hause und lese ein Buch");
            break;
        default:
            console.log("Fliege einen Drachen");      
    }
}

// Funktionsaufruf
checkwetter();