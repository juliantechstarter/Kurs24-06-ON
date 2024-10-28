const fs = require('fs'); // Importiert das fs-Modul, um mit Dateien zu arbeiten.
const content = 'Den Text habe ich einfügen lassen';

fs.writeFile('beispielTextdatei.txt', content, 'utf8', err => {
    if(err) {
        console.error('Es gab einen Fehler beim Schreiben der Datei', err);
        return;
    }
    console.log('Datei wurde erfolgreich beschrieben');
})

fs.readFile('beispiel.txt', 'utf8', (err, data) => {
    if (err) { // Überprüft, ob ein Fehler aufgetreten ist
        console.error("Fehler beim Lesen der Datei:", err); // Gibt eine Fehlermeldung aus, falls die Datei nicht gefunden wird oder ein anderer Fehler auftritt.
        return; // Beendet die Funktion, falls ein Fehler vorliegt.
    }
    console.log(data); // Gibt den Inhalt der Datei in der Konsole aus, falls kein Fehler auftritt.
});

