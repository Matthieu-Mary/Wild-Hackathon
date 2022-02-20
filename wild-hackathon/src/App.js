import './App.css';
import NavBar from './Components/NavBar/NavBar'
import QrGenerator from "./Components/QrGenerator/QrGenetator"
import ContainerCarte from './Components/Menus/ContainerCarte';

function App() {
  return (
    <div className="App">
      <NavBar />
      <QrGenerator />
      <ContainerCarte />
    </div>
  )
}

export default App;
