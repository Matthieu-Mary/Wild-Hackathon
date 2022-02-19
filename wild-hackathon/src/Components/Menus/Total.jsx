import React from 'react'

export default function Total({total}) {
  return (
    <div className='total'>
      <h2>Total</h2>
      <h2>{total} €</h2>
    </div>
  )
}
