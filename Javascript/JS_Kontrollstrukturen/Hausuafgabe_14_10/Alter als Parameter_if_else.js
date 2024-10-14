function getAge() {
    // Ermittelt eine Zufallszahl zwischen 0 und 99 und rundet sie auf eine ganze Zahl ab.
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt den Wert aus der Funktion getAge().
    const age = getAge();
    console.log("Dein Alter ist: " + age);

    // Überprüft, ob die Person minderjährig, volljährig oder im Rentenalter ist.
    if (age >= 0 && age <= 12) {
        console.log("Kind");
    } else if (age >= 13 && age<= 17) {
        console.log("Jugendlicher");
    } else if (age >= 18 && age <= 64) {
        console.log("Erwachsener");
    } else {
        console.log("Senior");
    }
}

// Funktionsaufruf (Hiermit sehe die console.log-Befehle im Terminal!!)
checkAge();