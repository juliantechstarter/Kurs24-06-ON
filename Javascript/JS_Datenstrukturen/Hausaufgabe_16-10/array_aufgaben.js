
// AUFGABE 1: Grundlegende Array-Operationen

// 1.1 Erstelle ein Array mit den Zahlen 1 bis 10.
let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1.2 Füge die Zahl 11 am Ende des Arrays hinzu.
zahlen.push(11);

// 1.3 Entferne die erste Zahl aus dem Array.
zahlen.shift();

// 1.4 Finde und gib die Position der Zahl 5 im Array aus.
let position = zahlen.indexOf(5);
console.log('Position von 5:', position);

// 1.5 Überprüfe, ob die Zahl 7 im Array enthalten ist.
let istSiebenEnthalten = zahlen.includes(7);
console.log('Enthält das Array die Zahl 7?', istSiebenEnthalten);

// AUFGABE 2: Arbeiten mit Schleifen und Arrays

// 2.1 Erstelle ein Array mit den Namen von fünf verschiedenen Städten.
let staedte = ['Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt'];

// 2.2 Iteriere über das Array und gib jede Stadt in Großbuchstaben aus.
staedte.forEach(stadt => {
    console.log(stadt.toUpperCase());
});

// 2.3 Erstelle ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert.
let buchstabenAnzahl = staedte.map(stadt => stadt.length);
console.log(buchstabenAnzahl);

// AUFGABE 3: Filterung und Extra

// 3.1 Erstelle ein Array mit zufälligen Zahlen zwischen 1 und 100 (mindestens 20 Zahlen).
let randomNumbers = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1);
console.log('Zufällige Zahlen:', randomNumbers);

// 3.2 Filtern Sie alle geraden Zahlen in einem neuen Array heraus.
let geradeZahlen = randomNumbers.filter(num => num % 2 === 0);
console.log('Gerade Zahlen:', geradeZahlen);

// 3.3 Berechne die Summe aller gefilterten geraden Zahlen.
let summeGeradeZahlen = geradeZahlen.reduce((sum, num) => sum + num, 0);
console.log('Summe der geraden Zahlen:', summeGeradeZahlen);

// AUFGABE 4: Zweidimensionale Arrays

// 4.1 Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert, die mit den Zahlen 1 bis 9 gefüllt ist.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 4.2 Schreibe eine Funktion, die die Diagonalsumme der Matrix (von oben links nach unten rechts) berechnet.
function diagonalsumme(matrix) {
    return matrix[0][0] + matrix[1][1] + matrix[2][2];
}
console.log('Diagonalsumme der Matrix:', diagonalsumme(matrix));

// 4.3 Verwandle die Matrix in eine 3x3 Matrix mit Nullen in den Ecken.
matrix[0][0] = 0;
matrix[0][2] = 0;
matrix[2][0] = 0;
matrix[2][2] = 0;
console.log('Matrix mit Nullen in den Ecken:', matrix);

// OPTIONAL! FREIWILLIG! NICHT PFLICHT!

// AUFGABE 5: Deep Dive mit Complex Array Methods

// 5.1 Erstelle ein Array von Objekten, das Informationen über mehrere Bücher enthält (Titel, Autor, Anzahl der Seiten).
let buecher = [
    { titel: 'Der Herr der Ringe', autor: 'J.R.R. Tolkien', seiten: 1178 },
    { titel: '1984', autor: 'George Orwell', seiten: 328 },
    { titel: 'Die Verwandlung', autor: 'Franz Kafka', seiten: 96 },
    { titel: 'Harry Potter und der Stein der Weisen', autor: 'J.K. Rowling', seiten: 309 }
];

// 5.2 Sortiere das Array basierend auf der Anzahl der Seiten von höchstens nach mindestens.
buecher.sort((a, b) => b.seiten - a.seiten);
console.log('Bücher sortiert nach Seitenanzahl:', buecher);

// 5.3 Erzeuge ein neues Array, das nur die Titel der Bücher enthält, die mehr als 300 Seiten haben.
let buecherMitMehrAls300Seiten = buecher
    .filter(buch => buch.seiten > 300)
    .map(buch => buch.titel);
console.log('Bücher mit mehr als 300 Seiten:', buecherMitMehrAls300Seiten);

// AUFGABE 6: Herausforderung - Spielkarte Implementierung

// 6.1 Erstelle ein Array, das ein Kartenspiel (52 Karten, 4 Farben, 13 Werte) simuliert.
let farben = ['Herz', 'Karo', 'Pik', 'Kreuz'];
let werte = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Bube', 'Dame', 'König', 'Ass'];
let kartendeck = [];

farben.forEach(farbe => {
    werte.forEach(wert => {
        kartendeck.push(`${wert} ${farbe}`);
    });
});
console.log('Kartendeck:', kartendeck);

// 6.2 Schreibe Funktionen zur:

// Mische die Karten zufällig.
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

shuffleDeck(kartendeck);
console.log('Gemischtes Deck:', kartendeck);

// Ziehe eine Karte aus dem Deck und gib ihren Wert zurück.
function drawCard(deck) {
    return deck.pop();
}

console.log('Gezogene Karte:', drawCard(kartendeck));

// Gib die Anzahl der verbleibenden Karten aus.
function remainingCards(deck) {
    return deck.length;
}

console.log('Verbleibende Karten im Deck:', remainingCards(kartendeck));
