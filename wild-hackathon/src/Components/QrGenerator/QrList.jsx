import React from 'react'
import QrElement from "./QrElement"

export default function QrList({numberOfQr}) {

  const qrListArr = [];
  for (let i = 1; i < numberOfQr + 1; i++) {
   qrListArr.push(i)
  }

  console.log(qrListArr)

  return (
    <div className='container-list'>
        {qrListArr.map( index => <QrElement index={index} />)}     
    </div>
  )
}
