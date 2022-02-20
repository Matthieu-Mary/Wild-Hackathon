import './App.css';
import NavBar from './Components/NavBar/NavBar'
import QrGenerator from "./Components/QrGenerator/QrGenetator"
import ContainerCarte from './Components/Menus/ContainerCarte';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<QrGenerator />}/>
        <Route path="/menu" element={<ContainerCarte />}/>
        <Route />
      </Routes>
      
      
      
    </div>
  )
}

export default App;
