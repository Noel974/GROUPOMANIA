import React from 'react'
import '../Styles/footer.css'
import Logo from '../Assets/Images/icon-above-font.png'

export default function Footer() {
    return (
        <footer className="footer-container">
            <img className="logo-footer" src={Logo} alt='logo-groupomania' />
        </footer>
    )
}