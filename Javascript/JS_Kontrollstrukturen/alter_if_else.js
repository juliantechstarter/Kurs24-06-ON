function getAge() {
    // Ermittelt eine Zufallszahl zwischen 0 und 99 und rundet sie auf eine ganze Zahl ab.
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt den Wert aus der Funktion getAge().
    const age = getAge();
    console.log("Dein Alter ist: " + age);

    // Überprüft, ob die Person minderjährig, volljährig oder im Rentenalter ist.
    if (age < 18) {
        console.log("Du bist minderjährig!");
    } else if (age >= 67) {
        console.log("Du bist im Rentenalter!");
    } else {
        console.log("Du bist volljährig!");
    }
}

// Funktionsaufruf (Hiermit sehe die console.log-Befehle im Terminal!!)
checkAge();