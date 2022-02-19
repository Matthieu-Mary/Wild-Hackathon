import React, { useState } from 'react'
import ListePlats from './ListePlats'
import TableNum from './TableNum';
import Total from './Total';
import Commande from './Commande';

export default function ContainerCarte() {

const carte = [
    {
        nom: "Asperges en vinaigrette",
        prix: 10
    },
    {
        nom: "Raclette",
        prix: 25
    },
    {
        nom: "Paris-Brest",
        prix: 8
    },
    {
        nom: "Chateau-Petrus",
        prix: 350
    }
]

const [total, setTotal]=useState(0);


const handleTotal = (prix) => {
    let newTotal = total + prix;
    if (newTotal <= 0){
        newTotal = 0 ;
    } 
    setTotal(newTotal);
}




  return (
    <div>
        <TableNum />
        <ListePlats carte={carte} handleTotal={handleTotal} />
        <Total total= {total} />
        <Commande />
    </div>
  )
}
