import React from 'react';
import './App.css';

function App() {
  // Definiere eine Begrüßung oder den aktuellen Tag
  const greeting = "Heute ist ein großartiger Tag, um React zu lernen!";

  // Berechnung (Addition)
  const sum = 5 + 3;

  return (
    <>
      {/* H1-Überschrift */}
      <h1>Willkommen zu meiner ersten React-App</h1>

      {/* H2 mit der Begrüßung */}
      <h2>{greeting}</h2>

      {/* H3 mit einer Berechnung */}
      <h3>Das Ergebnis der Berechnung 5 + 3 ist: {sum}</h3>
    </>
  );
}

export default App;
