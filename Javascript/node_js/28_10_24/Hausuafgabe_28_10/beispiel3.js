const fs = require('fs');  

async function readAndWrite() {
    try{
     // 1. Lesen der Datei
        const data = fs.readFileSync('beispielTextdatei.txt', 'utf8');
        // 2. Inhalt ändern
        const modifiedData = data.replace(data, 'neuer Text');
        // 3. geänderte Inhalte in die Datei geschrieben wird
        fs.writeFileSync('beispielTextdatei.txt', modifiedData, 'utf8');
        console.log('Datei wurde erfolgreich beschrieben');
   
    } catch(err) {
        console.error('Es gab einen Fehler beim Bearbeiten der Datei', err);
    }
};

readAndWrite();