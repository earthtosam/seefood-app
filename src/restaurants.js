import React from 'react';
import './stylesheet.css';
import PartnerBubble from './images/section_images/sf_partner_bubbles.png';
import PartnerLogo1 from './images/section_images/partner_logo_1.png';
import PartnerLogo2 from './images/section_images/partner_logo_2.png';
import PartnerLogo3 from './images/section_images/partner_logo_3.png';
import PartnerLogo4 from './images/section_images/partner_logo_4.png';
import PartnerLogo5 from './images/section_images/partner_logo_5.png';
import PartnerLogo6 from './images/section_images/partner_logo_6.png';

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

            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-main">
                            <div class="white-text-box">
                                <img src={PartnerLogo1} alt="" />
                                <h3>Burger Restaurant</h3>
                                <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                                about it. No more risky decisions, bad surprises or disappointments when the food arrives. Know and
                                see your food before you order. Eat with your eyes. </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-main">
                            <div class="white-text-box">
                                <img src={PartnerLogo2} alt="" />
                                <h3>Burger Restaurant</h3>
                                <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                                about it. No more risky decisions, bad surprises or disappointments when the food arrives. Know and
                                see your food before you order. Eat with your eyes. </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-main">
                            <div class="white-text-box">
                                <img src={PartnerLogo3} alt="" />
                                <h3>Burger Restaurant</h3>
                                <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                                about it. No more risky decisions, bad surprises or disappointments when the food arrives. Know and
                                see your food before you order. Eat with your eyes. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <div class="carousel-mini">
                        <i class="fas fa-chevron-left fa-2x"></i>
                    </div>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <div class="carousel-mini right">
                        <i class="fas fa-chevron-right fa-2x"></i>
                    </div>
                </a>
            </div>

            <div class="search-bar-container">
                <div class="search-box">
                    <i class="fas fa-map-marker-alt"></i>
                    <input type="text" placeholder="Search Restaurants.."></input>
                </div>
            </div>

            <div class="restaurants-grid">
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo1} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo2} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo3} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo4} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo5} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo6} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>

                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo1} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo2} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo3} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo4} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo5} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
                <a href="/menu">
                    <div class="restaurant-box">
                        <img src={PartnerLogo6} alt="" />
                        <h3>Burger Restaurant</h3>
                        <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                        about it.</p>
                        <span>Salinas, CA</span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Restaurants;