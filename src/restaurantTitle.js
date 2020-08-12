import React from "react";
import './stylesheet.css';
import { db, auth } from './firebase'
import Restaurants from './restaurantBox'
import PartnerLogo1 from "./images/section_images/partner_logo_1.png";
import RestaurantTitle from './restaurantTitle'

const About = (props) => {

    console.log("about", props.location.aboutProps)
    return (

        <div>About Page</div>
    )
}


class RestaurantsTitle extends React.Component {
    state = {
        restaurants: null,
        restaurantsID: null
    }

    componentDidMount() {
        console.log('mounted')

        db.collection('restaurants')
            .get()
            .then(snapshot => {
                const restaurants = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    restaurants.push(data)
                })
                const restaurantsID = []
                snapshot.forEach(doc => {
                    const dataID = doc.id
                    restaurantsID.push(dataID)
                })
                this.setState({ restaurants: restaurants })
                this.setState({ restaurantsID: restaurantsID })
                console.log(restaurants)
                console.log(restaurantsID)
            })
            .catch(error => console.log(error))

        console.log(this.props.state)

    }

    render() {
        return (
            <div>
                {
                    this.state.restaurants &&
                    this.state.restaurants.map(restaurant => {
                        return (
                            <a>
                                <h2>{restaurant.name}</h2>
                                <p>{restaurant.city}, {restaurant.state}</p>
                                <p>Monday: {restaurant.hours.monday}</p>
                                <ul class="button-container">
                                    <li><a href="#">Hours</a></li>
                                    <li><a href="#">Nutrition</a></li>
                                    <li><a href="#">PDF Menu</a></li>
                                </ul>
                            </a>
                        )
                    })[0]
                }
            </div>
        )
    }
}


export default RestaurantsTitle;