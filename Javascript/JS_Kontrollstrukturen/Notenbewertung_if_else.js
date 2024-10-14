function getGrade() {
   // Erzeugt eine Zufallszahl zwischen 1 und 6 und gibt diese zurück
    return Math.floor(Math.random()*6) + 1;
}

function checkGrade() {
    // Holt den Wert aus der Funktion getAge().
    const grade = getGrade();
    console.log("Die Note ist: " + grade); 

    // Verwendung der switch-Anweisung zur Notenüberprüfung
        if (grade === 1) {
            console.log("Sehr gut!");
        } else if (grade === 2) {
            console.log("Gut!");
        } else if (grade === 3) {
            console.log("Befriedigend!");
        } else if (grade === 4) {
            console.log("Ausreichend!");
        } else if (grade === 5) {
            console.log("Mangelhaft!");
        } else (grade === 6) 
            console.log("Ungenuegend!");
    }


// Funktionsaufruf
checkGrade();