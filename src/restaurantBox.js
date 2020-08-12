import React from "react";
import './stylesheet.css';
import PartnerLogo1 from './images/section_images/partner_logo_1.png';
import { db, auth, storageRef } from './firebase';
import { Link } from 'react-router-dom';

class Restaurants extends React.Component {

    state = {
        restaurants: null,
    }

    componentDidMount() {
        console.log('mounted')
        db.collection('restaurants')
            .get()
            .then(snapshot => {
                const restaurants = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    data["id"] = doc.id
                    data["categories"] = doc.id.categories
                    restaurants.push(data)
                })
                this.setState({ restaurants: restaurants })
                console.log(restaurants)
            })
            .catch(error => console.log(error))
    }

    render() {

        return (
            <div className="App">
                {
                    this.state.restaurants &&
                    this.state.restaurants.map(restaurant => {
                        return (
                            <a>
                                <Link to={{
                                    pathname: `/restaurants/${restaurant.id}`,
                                    state: {
                                        name: `${restaurant.name}`,
                                        city: `${restaurant.city}`,
                                        state: `${restaurant.state}`,
                                        cuisine: `${restaurant.cuisine}`,
                                        street: `${restaurant.street}`,
                                        zip: `${restaurant.zip}`,
                                        phone: `${restaurant.phone}`,
                                        id: `${restaurant.id}`,
                                        logo_url: `${restaurant.logo_url}`
                                    }
                                }}>
                                    <div class="restaurant-box">
                                        <img src={restaurant.logo_url} alt="" />
                                        <h3>{restaurant.name}</h3>
                                        <p>{restaurant.cuisine}</p>
                                        <p>SeeFood is a mobile website that helps you see pictures
                                        of food on the menu, instead of just reading about it.</p>
                                        <span>{restaurant.city}, {restaurant.state}</span>
                                    </div>
                                </Link>
                            </a>
                        )
                    })
                }
            </div >
        )
    }

    async loadRestaurantLogo(restaurant_id, restaurant_name) {
        storageRef.child('/restaurants/' + restaurant_id + '/logo/' + restaurant_name + ' Logo.png').getDownloadURL().then(function (url) {
            var img = document.getElementById(restaurant_name + '.png');
            var returnVal = url;
            //console.log(restaurant_name + " -> " + returnVal);
            return returnVal;
        }).catch(function (error) {
            //console.log(error)
            //console.log("Broken ---->" + restaurant_id + " -------> " + restaurant_name)
        });
    }


}



// <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>

// <Link to={`/seefood-app/restaurants/${restaurant.name}`} params={{ restaurants: `${restaurant.name}` }}></Link>


export default Restaurants;