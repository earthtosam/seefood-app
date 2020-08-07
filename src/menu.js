import React from 'react';
import './stylesheet.css';
import PartnerLogo1 from "./images/section_images/partner_logo_1.png";
import { db, auth } from './firebase';
import MenuBox from './menuBox'



class Menu extends React.Component {

    render() {
        return (
            <div>

                <section class="menu-hero">
                    <div class="hero-container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/seefoodapp-eb81d.appspot.com/o/restaurants%2FgmsvxfhzpZpR4DqRov80%2Flogo%2FVilla%20Azteca%20Logo.png?alt=media&token=cb6953b1-ca69-4676-80e9-ff0eb8e9f665" alt="" />
                    </div>
                </section>

                <div class="menu-restaurant-info">
                    <a>
                        <h2>{this.props.location.state.name}</h2>
                        <p>{this.props.location.state.street}, {this.props.location.state.zip}</p>
                        <p>{this.props.location.state.city}, {this.props.location.state.state}</p>
                        <p>{this.props.location.state.phone}</p>
                    </a>
                </div>

                <div class="menu-category-grid">
                    <MenuBox id={this.props.location.state.id} />
                </div>
            </div >
        )
    }
}


export default Menu;