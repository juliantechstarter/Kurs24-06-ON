// Importiere das readline-Modul für Benutzereingaben in Node.js.
const readline = require('readline');

// Erstelle eine readline-Schnittstelle.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function interpretiereWetter() {
    // Fordere den Benutzer zur Eingabe der Wetterlage auf.
    rl.question("Gib die Wetterlage ein (z.B. Sonnig, Regnerisch, Schnee, Windig): ", (wetterlage) => {
        // Verwende eine switch-case-Anweisung zur Vorschlag der Aktivität basierend auf der Wetterlage.
        switch (wetterlage) {
            case "Sonnig":
                console.log("Gehe spazieren");
                break;
            case "Regnerisch":
                console.log("Bleibe zu Hause und lese ein Buch");
                break;
            case "Schnee":
                console.log("Baue einen Schneemann");
                break;
            case "Windig":
                console.log("Fliege einen Drachen");
                break;
            default:
                console.log("Unbekannte Wetterlage. Bitte versuche es mit 'Sonnig', 'Regnerisch', 'Schnee' oder 'Windig'.");
        }

        // Schließe die readline-Schnittstelle.
        rl.close();
    });
}

// Funktionsaufruf
interpretiereWetter();
