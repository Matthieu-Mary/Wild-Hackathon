import React from 'react'
import RemoveButton from './RemoveButton'
import AddButton from './AddButton'

export default function Plat({plat, handleTotal}) {
  return (
    <div>
        <div>
            <h4>{plat.nom}</h4>
            <h2>{plat.prix} €</h2>
        </div>
        <div>
            <RemoveButton prix={plat.prix} handleTotal={handleTotal}/>
            <AddButton prix={plat.prix} handleTotal={handleTotal}/>
        </div>
    </div>
  )
}
