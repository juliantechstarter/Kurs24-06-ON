const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Dateiname: ', (filename) => {
  rl.question('Nachricht: ', (message) => {
    fs.appendFile(filename, message + '\n', (err) => {
      if (err) throw err;
      console.log('Nachricht gespeichert.');
      rl.close();
    });
  });
});
