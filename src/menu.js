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
                        <img src={this.props.location.state.logo_url} alt="" />
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