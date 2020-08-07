import React from "react";
import './stylesheet.css';
import PartnerLogo1 from './images/section_images/partner_logo_1.png';
import { db, auth } from './firebase';
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
                                    pathname: `/seefood-app/restaurants/${restaurant.id}`,
                                    state: {
                                        name: `${restaurant.name}`,
                                        city: `${restaurant.city}`,
                                        state: `${restaurant.state}`,
                                        cuisine: `${restaurant.cuisine}`,
                                        street: `${restaurant.street}`,
                                        zip: `${restaurant.zip}`,
                                        phone: `${restaurant.phone}`,
                                        id: `${restaurant.id}`,
                                    }
                                }}>
                                    <div class="restaurant-box">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/seefoodapp-eb81d.appspot.com/o/restaurants%2FgmsvxfhzpZpR4DqRov80%2Flogo%2FVilla%20Azteca%20Logo.png?alt=media&token=cb6953b1-ca69-4676-80e9-ff0eb8e9f665" alt="" />
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


}



// <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>

// <Link to={`/seefood-app/restaurants/${restaurant.name}`} params={{ restaurants: `${restaurant.name}` }}></Link>


export default Restaurants;