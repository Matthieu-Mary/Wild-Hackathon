import React from 'react'

export default function AddButton({prix, handleTotal}) {
  return (
    <button onClick={()=>handleTotal(prix)}> Ajouter </button>
  )
}
