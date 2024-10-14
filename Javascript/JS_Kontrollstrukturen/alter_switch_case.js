function getAge() {
    // Ermittelt eine Zufallszahl zwischen 0 und 99 und rundet sie auf eine ganze Zahl ab.
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt den Wert aus der Funktion getAge().
    const age = getAge();
    console.log("Dein Alter ist: " + age); 

    // Verwendung der switch-Anweisung zur Altersüberprüfung
    switch (true) {
        case (age < 18):
            console.log("Du bist minderjährig!");
            break;
    //    case (age >= 67):
    //        console.log("Du bist im Rentenalter!")
    //       break;
        case (age >= 67):
            console.log("Du bist im Rentenalter!");
            break;
        default:
            console.log("Du bist volljährig!");      
    }
}

// Funktionsaufruf
checkAge();