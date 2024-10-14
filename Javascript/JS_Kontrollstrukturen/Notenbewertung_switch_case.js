function getGrade() {
   // Erzeugt eine Zufallszahl zwischen 1 und 6 und gibt diese zurück
    return Math.floor(Math.random()*6) + 1;
}

function checkgrade() {
    // Holt den Wert aus der Funktion getAge().
    const grade = getGrade();
    console.log("Die Note ist: " + grade); 

    // Verwendung der switch-Anweisung zur Notenüberprüfung
    switch (true) {
        case (grade === 1):
            console.log("Gehe spazieren!");
            break;
        case (grade === 2):
            console.log("Gut!");
            break;
        case (grade === 3):
            console.log("Befriedigend!");
            break;
        case (grade === 4):
            console.log("Ausreichend!");
            break;
    }
}

// Funktionsaufruf
checkgrade();