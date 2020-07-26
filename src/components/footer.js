import React from 'react';
import '../stylesheet.css';
import logo from '../images/sf_images/seefood_logo_dark.png';

function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-info col-lg-6 col-sm-12 col-12">
                    <img src={logo} alt="" />
                    <p>SeeFood takes advantage of the newest technologies to deliver restaurant content straight to your
                mobile cell phone.</p>
                    <p>Copyright SeeFood 2020 All Rights Reserved</p>
                </div>
                <div class="footer-contact col-lg-3 col-sm-6 col-12">
                    <h3>Contact</h3>
                    <ul>
                        <li>Roberto Guerrero</li>
                        <li>831-682-4586</li>
                        <li>roberto@seefoodapp.com</li>
                    </ul>
                </div>
                <div class="footer-nav col-lg-3 col-sm-6 col-12">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">App Store</a></li>
                        <li><a href="#">Play Store</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;