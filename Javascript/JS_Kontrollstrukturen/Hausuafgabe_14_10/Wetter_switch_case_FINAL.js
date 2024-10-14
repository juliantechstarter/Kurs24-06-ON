// Importiere das readline-Modul für Benutzereingaben in Node.js.
const readline = require('readline');

// Erstelle eine readline-Schnittstelle.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funktion zum schrittweisen Ausgeben eines Textes.
function typeText(text, callback) {
    let index = 0;
    const interval = setInterval(() => {
        process.stdout.write(text[index]);
        index++;
        if (index === text.length) {
            clearInterval(interval);
            console.log(); // Um die Ausgabe mit einem Zeilenumbruch abzuschließen.
            callback();
        }
    }, 50); // 50 Millisekunden Verzögerung pro Buchstabe
}

function interpretiereWetter() {
    // Fordere den Benutzer zur Eingabe der Wetterlage auf.
    rl.question("\nGib die Wetterlage ein (z.B. Sonnig, Regnerisch, Schnee, Windig) oder 'bye' zum Beenden: ", (wetterlage) => {
        // Überprüfe, ob der Benutzer 'bye' eingegeben hat.
        if (wetterlage.toLowerCase() === 'bye') {
            console.log("Auf Wiedersehen!");
            rl.close();
        } else {
            // Verwende eine switch-case-Anweisung zur Ausgabe des ASCII-Bilds und der verzögerten Nachricht.
            switch (wetterlage) {
                case "Sonnig":
                    console.log(`
   \\   |   /
     .-*-.
  ---(o o)---
     '-*-'
   /   |   \\
                    `);
                    setTimeout(() => {
                        typeText("Gehe spazieren", () => {
                            // Die Funktion wartet auf die nächste Eingabe, der Text bleibt sichtbar.
                            interpretiereWetter();
                        });
                    }, 500);
                    break;
                case "Regnerisch":
                    console.log(`
     .-.
    (   ).
   (___(__)
   ' ' ' ' ' ' ' ' ' '
  ' ' ' ' ' ' ' ' ' ' 
                    `);
                    setTimeout(() => {
                        typeText("Bleibe zu Hause und lese ein Buch", () => {
                            interpretiereWetter();
                        });
                    }, 500);
                    break;
                case "Schnee":
                    console.log(`
      *
    * . *
  * * * * *
    * * *
      *
                    `);
                    setTimeout(() => {
                        typeText("Baue einen Schneemann", () => {
                            interpretiereWetter();
                        });
                    }, 500);
                    break;
                case "Windig":
                    console.log(`
    ~~~~~~~
 ~~~~~~~~~~~
  ~~~~~~~~~~
   ~~~~~~~~
    ~~~~~~
                    `);
                    setTimeout(() => {
                        typeText("Fliege einen Drachen", () => {
                            interpretiereWetter();
                        });
                    }, 500);
                    break;
                default:
                    console.log("Unbekannte Wetterlage. Bitte versuche es mit 'Sonnig', 'Regnerisch', 'Schnee' oder 'Windig'.");
                    interpretiereWetter();
            }
        }
    });
}

// Funktionsaufruf
interpretiereWetter();
