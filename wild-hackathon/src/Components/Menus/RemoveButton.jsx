import React from 'react'

export default function RemoveButton({prix, handleTotal}) {

    const prixNeg= - prix;
  return (
    <button onClick={()=>handleTotal(prixNeg)}> Retirer </button>
  )
}
