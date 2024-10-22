import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ContentFooter from "./components/layout/ContentFooter";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <ContentFooter />
    </div>
  );
}

export default App;
