import React from 'react'
import Plat from './Plat'

export default function ListePlats({carte, handleTotal}) {
  return (
    <div>
        {carte.map(plat => <Plat plat={plat} handleTotal={handleTotal}/>)}
    </div>
  )
}
