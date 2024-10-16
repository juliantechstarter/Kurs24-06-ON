//String_Manipulationen
// 1. String-Verkettung
name = "Ahmet";
greetings = "Hallo ";
console.log("Willkommen, " + name );
console.log("Willkommen " + name + " möchtest du " + greetings + "sagen");

//2. Template-Strings

name = "Ünal";
gruss = `Willommen Herr ${name}`;
console.log(gruss);
zahl1 = 5;
zahl2 = 7;
erg = (zahl1 + zahl2);
console.log(`Das Ergebnis ist ${erg}`);
console.log("Das Ergebnis ist " + erg)


// 3. String-Methoden
str1 = "        Hello World";
formattedStrL = str1.trim().toUpperCase();
console.log(formattedStrL);

str1 = "        Hallo Kurs TEILNEHMER";
formattedStrU = str1.trim().toLowerCase();
console.log(formattedStrU);

// 4. String-Interpolation in Funktionen
function mehrwertSteuerpreis(preis){
    const steuersatz = 0.19;
    gesamtpreis = preis * (1 + steuersatz);
    return `Der Gesamtpreis beträgt €${gesamtpreis.toFixed(2)}`; 
}
console.log(mehrwertSteuerpreis(799));

// 5. Verwendung von replace()
text = "Ich habe ein Haustier. Es ist ein Kater. Sein Name ist Gojo"
neuerText = text.replace("Gojo", "Baron");
console.log(neuerText);
