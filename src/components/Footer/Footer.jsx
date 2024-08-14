import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>mfk frjn kmrt mrrng klds nrjj mgtjnjgtj bkmyuo</p>
                <div className="footer-social-icons">
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                        
                </div>
            </div>
            <div className="footer-content-center"></div>
            <div className="footer-content-right"></div>
        </div>

    </div>
  )
}

export default Footer