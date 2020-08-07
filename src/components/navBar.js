import React from 'react';
import '../stylesheet.css';
import logo from '../images/sf_images/seefood_logo_dark.png';

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <img src={logo} alt="" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/seefood-app/home">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/seefood-app/restaurants">Restaurants</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/seefood-app/about">About</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <ul>
                        <li>Follow Us:</li>
                        <li class="nav-item dropdown"><a href="https://twitter.com/SeeFood_app" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li class="nav-item dropdown"><a href="https://www.facebook.com/SeeFoodApplication/" target="_blank"><i
                            class="fab fa-facebook"></i></a></li>
                        <li class="nav-item dropdown"><a href="https://www.instagram.com/seefood_app/?hl=en" target="_blank"><i
                            class="fab fa-instagram"></i></a></li>
                    </ul>
                </span>
            </div>
        </nav>
    );
}

export default Nav;
