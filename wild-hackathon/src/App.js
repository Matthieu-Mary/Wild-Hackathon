import './App.css';
import NavBar from './Components/NavBar/NavBar'
import { Link } from "react-router-dom";
import QrGenerator from "./Components/QrGenerator/QrGenetator"


function App() {
  return (
    <div className="App">
      <NavBar />
      <QrGenerator />
    </div>
  )
}

export default App;
