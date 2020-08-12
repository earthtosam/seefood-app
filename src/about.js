import React from 'react';
import './stylesheet.css';
import HeroLogo from './images/sf_images/seefood_logo_red.png';
import empty from './images/team_images/empty.png'
import gurpreet from './images/team_images/gurpreet.png'
import luis from './images/team_images/luis.png'
import satvik from './images/team_images/satvik.png'
import vaibhav from './images/team_images/vaibhav.png'
import kyle from './images/team_images/kyle.png'
import frank from './images/team_images/frank.png'
import joseph from './images/team_images/joseph.png'
import robert from './images/team_images/robert.png'

function About() {
    return (
        <div>
            <section class="hero about-hero">
                <div class="hero-container">
                    <h1>Meet the Team</h1>
                    <p>The SeeFood Team is filled with talented individuals. See for yourself.</p>
                </div>
            </section>

            <div class="team-grid">
                <div class="team-box">
                    <img src={empty} alt="" />
                    <div class="team-box-info">
                        <h3>Carlos Alvarez</h3>
                        <p>Senior Photographer</p>
                        <p>Carlos is from the Monterey Bay area. Photography started as a hobby and over time turned into something more. Macro shots are his favorite style of shooting pictures. He also loves sports and is a car enthusiast.</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={empty} alt="" />
                    <div class="team-box-info">
                        <h3>Elbert Ramos</h3>
                        <p>Videographer</p>
                        <p>My name is Elbert I was born and raised in LA but have been living in Salinas for 4 years now. I developed a love for video at a very young age which eventually turned into my passion. Happy and blessed to be part of the seefood team. I get to create meaningful and exciting content, looking forward to the future of SeeFood!</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={gurpreet} alt="" />
                    <div class="team-box-info">
                        <h3>Gurpreet</h3>
                        <p>Backend Developer</p>
                        <p>Hey there, I'm Gurpreet. A little about me: I am a newly minted Software Engineer and Computer Scientist, excited to make my way into the world. I've also worked for the better part of the last decade as a Pharmacy Tech. I am an avid fan of the Science Fiction and Fantasy genre, print or screen.. it doesn't matter! I'm an aspiring writer myself and a sometimes graphic artist. You could say I wear many hats, but usually it's just a beanie.</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={luis} alt="" />
                    <div class="team-box-info">
                        <h3>Luis Saldana</h3>
                        <p>Intern- Android Development</p>
                        <p>Hello my name is Luis Saldaña Torres, I am currently interning at SeeFood as an Android Developer and a rising senior at CSU Stanislaus majoring in Business Administration with an emphasis in Computer Information Systems. Through  application and website development, and natural curiosity I have made it my goal to create stepping stones in technology for generations to come. Ultimately I strive to explore the intersection of technology and our daily lives by using the skills I have developed inside the classroom, through multiple projects, and through self taught courses to facilitate daily life activities. I thrive in an environment where creativity is essential for customer satisfaction while working part time as a home remodeler, and in my free time I enjoy exploring Mother Nature and the breathtaking landscapes it has to offer.</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={empty} alt="" />
                    <div class="team-box-info">
                        <h3>Sam Ramirez</h3>
                        <p>Lead Web Design and Development </p>
                        <p>I’m a simple guy who loves to swipe through Pinterest all day. I’ve always had a keen interest in design, but I never knew what UX stood for. But lucky, I figured it out. Now I continue to work on web development projects as well as graphic design!</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={satvik} alt="" />
                    <div class="team-box-info">
                        <h3>Satvik</h3>
                        <p>Intern- Web Development </p>
                        <p>My name is Satvik Khopkar and I am a 4th year Computer Science student at California State University, Monterey Bay. I am from India and I came to the United States in 2018. I'm passionate about front end development, because I’m driven to make life better, and I’m fascinated by how technology can be used to achieve that. During my spare time, I love to watch soccer and movies. On weekends, you will most probably find me playing soccer with my friends.</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={vaibhav} alt="" />
                    <div class="team-box-info">
                        <h3>Vaibhav</h3>
                        <p>Intern- Web Development</p>
                        <p>Hey guys!! I am interning at Seefood as a Web Developer. Also, I am a Senior at California State University Monterey Bay majoring in Computer Science with a concentration of Software Engineering. Apart from that, I like to play soccer in my free time. Also I am a wildlife photographer.</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={kyle} alt="" />
                    <div class="team-box-info">
                        <h3>Kyle Contreras</h3>
                        <p>Lead Photographer</p>
                        <p>Kyle has a degree in business administration in concentration in accounting from Cal state Monterey bay. However, his passion has been photography.  He switched his interests from adventure photography to food photography ever since joining Seefood. Other things he is passionate about is his family, friends, and the art of becoming a better than he was the day prior.</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={frank} alt="" />
                    <div class="team-box-info">
                        <h3>Frank Duenez</h3>
                        <p>Intern- Android Development</p>
                        <p>I am interning at SeeFood as an Android developer, and I am a recent undergraduate from California State University, Monterey Bay. In my spare time, I like to go out hiking with my friends and going to restaurants I have never been to before.</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={joseph} alt="" />
                    <div class="team-box-info">
                        <h3>Joseph Molina</h3>
                        <p>Co-Founder and Lead Android Development</p>
                        <p>“It’s up to you to make each day a good day!” That is a quote I live by every day. I learned early on that there is no such thing as a “bad day”. You can always have a good day if you have the right mindset! I am a first-generation college graduate and Software Engineer. I love building things that help the world. I joined SeeFood because I believe it will change the way people dine in and improve the dining experience. I’m excited to implement features that will help people of different languages!</p>
                        <div>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                    </div>
                </div>
                <div class="team-box">
                    <img src={robert} alt="" />
                    <div class="team-box-info">
                        <h3>Roberto Guerrero Jr </h3>
                        <p>Founder</p>
                        <p>I believe that experiences are what make life enjoyable. I have been fortunate enough to learn what my passion is and what motivates me. My passion is technology and I am motivated to build product that helps create experiences for people.  Some of my fondest memories have centered around the experience of dinning out and enjoying a meal with friends and family. I started SeeFood because I believe we can help make this experience even better.</p>
                        <div>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;