//AUFGABE 1
// 1. Benutzerverwaltung Map erstellen
let benutzerVerwaltung = new Map();

// 2. Benutzer hinzufügen
benutzerVerwaltung.set('benutzer1', {email: 'benutzer1@example.com', rolle: 'Admin'});
benutzerVerwaltung.set('benutzer2', {email: 'benutzer2@example.com', rolle: 'User'});
benutzerVerwaltung.set('benutzer3', {email: 'benutzer3@example.com', rolle: 'Gast'});

// 3. Funktion zum Anzeigen aller Benutzer
function zeigeBenutzer() {
    benutzerVerwaltung.forEach((details, benutzername) => {
        console.log(`Benutzername: ${benutzername}, E-Mail: ${details.email}, Rolle: ${details.rolle}`);
    });
}

// Funktion aufrufen, um die Benutzer anzuzeigen
zeigeBenutzer();

//AUFGABE 2
// 1. Set für besuchte Seiten erstellen
let besuchteSeiten = new Set();

// 2. Seiten hinzufügen (mit Duplikaten)
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Startseite');  // Duplikat
besuchteSeiten.add('Hilfe');

// 3. Anzahl der eindeutigen Seiten anzeigen
console.log(`Anzahl eindeutiger besuchter Seiten: ${besuchteSeiten.size}`);

// 4. Funktion zum Anzeigen aller besuchten Seiten
function zeigeSeiten() {
    besuchteSeiten.forEach((seite) => {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

// Funktion aufrufen, um die Seiten anzuzeigen
zeigeSeiten();

