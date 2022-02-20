import React from 'react'
import "./NavBar.css"
import logoV2 from '../../Images/logoV2.png'

export default function NavBar() {
    return (
        <nav className="nav">
        <img src={logoV2} alt='logo' className="nav--logo" />
          <ul className="nav--list">
            <li>Commander</li>
            <li>Générer QRCode</li>
            <li>Editer la carte</li>
         </ul>
        </nav>
    )
}