import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Content from './content';
function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <div><Content>hallo</Content></div>
      <footer>This is my footer</footer>
    </div>
  );
}

export default App;
