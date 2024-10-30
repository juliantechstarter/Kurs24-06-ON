import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import catFacts from 'cat-facts';

// Benutzername abfragen
async function askForUsername() {
    const answers = await inquirer.prompt({
        type: 'input',
        name: 'username',
        message: 'Wie ist dein Name?',
    });
    return answers.username;
}

// Katzenfakt anzeigen
function showCatFact() {
    const fact = catFacts.random(); 
    const factBox = boxen(fact, { padding: 1, margin: 1, borderStyle: 'double' });
    console.log(factBox);
}

// Benutzerinteraktion für Katzenfakt
async function askForCatFact() {
    const response = await inquirer.prompt({
        type: 'confirm',
        name: 'showCatFact',
        message: 'Möchtest du einen Katzenfakt sehen?',
        default: true
    });

    if (response.showCatFact) {
        showCatFact();
    } else {
        console.log(chalk.blue('Vielleicht später!'));
    }
}

// Hauptfunktion
async function main() {
    const username = await askForUsername();
    console.log(chalk.green(`Hallo, ${username}!`));
    await askForCatFact();
}

// Starte die Hauptfunktion
main();
