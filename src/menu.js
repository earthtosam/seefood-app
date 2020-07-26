import React from 'react';
import './stylesheet.css';
import PartnerLogo1 from "./images/section_images/partner_logo_1.png";

function Menu() {
    return (
        <div>
            <section class="menu-hero">
                <div class="hero-container">
                    <img src={PartnerLogo1} alt="" />
                </div>
            </section>

            <div class="menu-restaurant-info">
                <h2>KalzBrgr Restaurant</h2>
                <p>SeeFood helps create visual menus for restaurants and customers. See your food before ordering!</p>
                <ul class="button-container">
                    <li><a href="#">Hours</a></li>
                    <li><a href="#">Nutrition</a></li>
                    <li><a href="#">PDF Menu</a></li>
                </ul>
            </div>

            <div class="menu-category-grid">
                <a href="/sub-menu">
                    <div class="menu-category">
                        <div class="menu-category-info">
                            <h3>Dinner Plates</h3>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                        </div>
                    </div>
                </a>
                <a href="/sub-menu">
                    <div class="menu-category">
                        <div class="menu-category-info">
                            <h3>Dinner Plates</h3>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                        </div>
                    </div>
                </a>
                <a href="/sub-menu">
                    <div class="menu-category">
                        <div class="menu-category-info">
                            <h3>Dinner Plates</h3>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                        </div>
                    </div>
                </a>
                <a href="/sub-menu">
                    <div class="menu-category">
                        <div class="menu-category-info">
                            <h3>Dinner Plates</h3>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                        </div>
                    </div>
                </a>
                <a href="/sub-menu">
                    <div class="menu-category">
                        <div class="menu-category-info">
                            <h3>Dinner Plates</h3>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                        </div>
                    </div>
                </a>
                <a href="/sub-menu">
                    <div class="menu-category">
                        <div class="menu-category-info">
                            <h3>Dinner Plates</h3>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                            <p>SeeFood is a mobile website that helps you see pictures.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div >
    );
}

export default Menu;