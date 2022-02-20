import React from 'react'
import "./NavBar.css"
import logoV2 from '../../Images/logoV2.png'
import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="nav">
            <img src={logoV2} alt='logo' className="nav--logo" />
            <ul className='nav--list'>
                <li><Link  to='/'>Générer QRCode</Link></li>
                <li><Link to="/menu">Commander</Link></li>
                <li><Link to="/cardedit">Editer la carte</Link></li>
            </ul> 
        </nav>
    )
} 
