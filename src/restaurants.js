import React from 'react';
import './stylesheet.css';
import PartnerBubble from './images/section_images/sf_partner_bubbles.png';
import RestaurantBox from './restaurantBox'

function Restaurants() {
    return (
        <div>
            <section class="hero restaurants-hero">
                <div class="hero-container">
                    <img src={PartnerBubble} alt="" />
                    <h1>Find your next meal</h1>
                    <p>SeeFood helps create visual menus for restaurants and customers. See your food before ordering!</p>
                </div>
            </section>

            <div class="restaurants-grid">
                <RestaurantBox />
            </div>
        </div >
    );
}

export default Restaurants;