
//AUFGABE 1

let autos = ['BMW', 'Audi', 'Mercedes']; // Ein einfaches Array von Autos
console.log(autos[1]); // Ausgabe: Audi
autos.push('Volkwagen'); // Eine weiteres Auto hinzufügen

// Über das Array iterieren und jedes Element ausgeben
for (let i = 0; i < autos.length; i++) {
console.log(autos[i]);
}

// Über das Array iterieren und jedes Element ausgeben
autos.forEach(auto => {
    console.log(auto.toUpperCase());
});


//AUFGABE 2
let stadtMap = new Map();
stadtMap.set('Berlin', 'Deutschland');
stadtMap.set('Paris', 'Frankreich');
console.log(stadtMap.get('Berlin')); 
console.log(stadtMap.has('Paris')); 
console.log(stadtMap.has('Rom')); 

//AUFGABE 3
stadtMap.set('Rom', 'Italien');
stadtMap.forEach((land, stadt) => {
    console.log(`Stadt: ${stadt}, Land: ${land}`);
});

//AUFGABE 4
let buchstabenSet = new Set();
buchstabenSet.add('A');
buchstabenSet.add('B');
buchstabenSet.add('C');
console.log(buchstabenSet.has('D')); 
console.log(buchstabenSet.size);

//AUFGABE 5
let farbenSet = new Set(['Gelb', 'Grün', 'Blau']);
for (let farbe of farbenSet) {
    console.log(farbe);
}

//AUFGABE 6
let buecherMap = new Map();
buecherMap.set('Der Alchemist', {autor: 'Paulo Coelho', seiten: 198});
buecherMap.set('1984', {autor: 'George Orwell', seiten: 328});
buecherMap.set('The Catcher in the Rye', {autor: 'J.D. Salinger', seiten: 278});
console.log(buecherMap.get('Der Alchemist').seiten);
let buecher = ['Der Alchemist', 'George Orwell', 'J.D. Salinger'];
buecherMap.forEach((buchDetails, titel) => {
console.log(`Buch: ${titel}, Autor ${buchDetails.autor}, Seiten: ${buchDetails.seiten}`);
});

//AUFGABE 7
