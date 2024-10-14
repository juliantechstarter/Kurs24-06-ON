function getGrade() {
   // Erzeugt eine Zufallszahl zwischen 1 und 6 und gibt diese zurück
    return Math.floor(Math.random()*6) + 1;
}

function checkGrade() {
    // Holt den Wert aus der Funktion getAge().
    const grade = getGrade();
    console.log("Die Note ist: " + grade); 

    // Verwendung der switch-Anweisung zur Notenüberprüfung
    switch (true) {
        case (grade === 1):
            console.log("Sehr gut!");
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
        case (grade === 5):
            console.log("Mangelhaft!");
            break;
        case (grade === 6):
            console.log("Ungenuegend!");
            break;  
    }
}

// Funktionsaufruf
checkGrade();