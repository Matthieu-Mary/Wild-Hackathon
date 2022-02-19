import React from 'react'
import "./QrGenerator.css"

export default function QrForm({handleChange, handleSubmit, table}) {
  return (
    <form onSubmit={handleSubmit}>
        <label>Combien de tables avez-vous ?</label>
        <input type="text" name="tableNumber" value={table} onChange={handleChange}/>
        <input type="submit" value="Générer un QRCode"/>
    </form>
  )
}
