import React from 'react';
import '../stylesheet.css';
import logo from '../images/sf_images/seefood_logo_dark.png';

function Nav() {
    return (
        <nav class="navbar-expand-lg">
            <div class="navbar">
                <ul class="nav-left">
                    <li><img src={logo} alt="" /></li>
                    <li><a href="/home">home</a></li>
                    <li><a href="/restaurants">restaurants</a></li>
                </ul>
                <button class="navbar-toggler col-sm-12" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto nav-right">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                english
                        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Spanish</a>
                                <a class="dropdown-item" href="#">Chinese</a>
                                <a class="dropdown-item" href="#">Korean</a>
                            </div>
                        </li>
                        <ul>
                            <li class="nav-item dropdown"><a href="https://twitter.com/SeeFood_app" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li class="nav-item dropdown"><a href="https://www.facebook.com/SeeFoodApplication/" target="_blank"><i
                                class="fab fa-facebook"></i></a></li>
                            <li class="nav-item dropdown"><a href="https://www.instagram.com/seefood_app/?hl=en" target="_blank"><i
                                class="fab fa-instagram"></i></a></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;