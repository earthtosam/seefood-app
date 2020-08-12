import React from 'react';
import './stylesheet.css';
import HeroLogo from './images/sf_images/seefood_logo_red.png';
import Bubble from './images/sf_images/sf_bubble.png';
import AppConcept from './images/sf_images/seefood_app_concept.png';
import StoryImageOne from './images/section_images/sf_story_image_1.png';
import StoryImageTwo from './images/section_images/sf_story_image_2.png';

function Home() {
    return (
        <div>
            <section class="hero">
                <div class="hero-container">
                    <img src={HeroLogo} alt="" />
                    <h1>Eat With Your Eyes</h1>
                    <p>SeeFood helps create visual menus for restaurants and customers. See your food before ordering!</p>
                </div>
            </section>
            <section class="about">
                <div class="white-text-box">
                    <img src={Bubble} alt="" />
                    <h2>About</h2>
                    <p>SeeFood is a mobile website that helps you see pictures of food on the menu, instead of just reading
                    about it. No more risky decisions, bad surprises or disappointments when the food arrives. Know and see
                    your food before you order. Eat with your eyes.</p>
                </div>
            </section>
            <section class="how">
                <div class="white-text-box box-right">
                    <img src={Bubble} alt="" />
                    <h2>How to Use</h2>
                    <div class="how-sub">
                        <i class="fas fa-wifi"></i>
                        <p>Go to SeeFood.com</p>
                    </div>
                    <div class="how-sub">
                        <i class="fas fa-hamburger"></i>
                        <p>Choose a restaurant of your choice</p>
                    </div>
                    <div class="how-sub">
                        <i class="fas fa-utensils"></i>
                        <p>See pictures and info for dishes and more</p>
                    </div>
                </div>
            </section>
            <section class="info">
                <div class="more-info">
                    <img src={AppConcept} alt="" />
                    <div class="more-info-container col-lg-6 col-sm-10">
                        <ul class="button-container">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Partnerships</a></li>
                            <li><a href="#">It's Free!</a></li>
                        </ul>
                        <div class="info-container">
                            <i class="far fa-heart"></i>
                            <h2>We Know Restaurants</h2>
                            <p>We work closely with restaurants to have updated menus, pictures and info. Can’t find a
                            restaurant
                            you love? Let us know. We will add them!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="story">
                <div class="story-container">
                    <div class="image-container col-lg-6 ">
                        <img src={StoryImageOne} alt="" />
                        <img src={StoryImageTwo} alt="" />
                    </div>
                    <div class="text-container col-lg-6 col-sm-12">
                        <h2>Our Story</h2>
                        <p>The idea for SEEFOOD came a few years ago when I was out-of-town visiting a friend in Chico, CA. It
                        was my first time in the area and I had no idea what to eat. We ended up at a small authentic
                        Japanese restaurant where the menus were in a foreign language. Our group of friends was confused
                        and had no idea how we were going to figure out what to order. The waitress saw our confusion and
                        brought over a binder with photos of their dishes. This helped a bit but now had to wait for the
                        binder to make its way around the table. I was hungry and getting anxious.

                        It was in that moment that I realized how useful it would be to have photos and info for restaurant
                        menus through my mobile phone.

                        Soon after my trip i tried to find a solution for this problem, but I could not find one. I tried to
                        use sources like Yelp and TripAdvisor. Yelp was great for finding a new restaurant but that’s where
                        that ended. Yelp doesn’t have full menus, sometimes has pictures but they are not always good
                        quality and aren’t labeled with dish names or organized. TripAdvisor was similar but not consistent
                    either. And so SEEFOOD was born. </p>
                        <a href="/seefood-app/about">See Team</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;