function calcSum(array) {
    // var und let: Beide können zur Deklaration von Variablen verwendet werden.
    // Der Einsatz hängt vom Gültigkeitsbereich (Scope) ab.
    // var: Ist innerhalb der Funktion sichtbar, in der es deklariert wird, oder global, wenn es außerhalb einer Funktion deklariert wird.
    // let: Ist innerhalb eines Blocks { } gültig, in dem es deklariert wird.
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

// Deklaration des Arrays und Aufruf der Funktion
const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ergebnisSum = calcSum(zahlenArray);
console.log("Die Summe beträgt: " + ergebnisSum);
