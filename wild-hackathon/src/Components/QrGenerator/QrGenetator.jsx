import React, {useState} from 'react'
import NavBar from "../Navbar/NavBar"
import QrForm from "./QrForm"
import QrList from "./QrList"
import "./QrGenerator.css"

export default function QrGenetator() {

    const [table, setTable] = useState()
    const [numberOfQr, setNumberOfQr] = useState([])

    const handleChange = (e) => {
      const tableNumber = parseInt(e.target.value)
      // console.log(tableNumber)
      setTable(tableNumber)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setNumberOfQr(table)
      // console.log(numberOfQr)
    }

  return (
    <div>
        <NavBar />       
        <div className="container-QrGenerator">
            <QrForm handleChange={handleChange} handleSubmit={handleSubmit}/>
            <QrList numberOfQr={numberOfQr}/> 
        </div>   
    </div>
  )
}
