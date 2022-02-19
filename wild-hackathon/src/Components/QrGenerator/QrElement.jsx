import React from 'react'

export default function QrElement({index}) {

  return (
    <div className='container-elements'>
      <p>table n° {index}</p>
      <img src='https://media.istockphoto.com/vectors/code-illustration-vector-id828088276?k=20&m=828088276&s=612x612&w=0&h=JnX2DFXVGyTe-wDXdXhTG9p7yPmbd-jO3qWRfCQnHgE=' alt="qr-code" />
      <button>Imprimer</button>
    </div>
  )
}


