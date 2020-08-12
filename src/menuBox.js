import React from 'react';
import './stylesheet.css';
import PartnerLogo1 from "./images/section_images/partner_logo_1.png";
import { db, auth } from './firebase';



class MenuBox extends React.Component {
    state = {
        category: null,
    }

    componentDidMount() {
        console.log('mounted')
        db.collection('restaurants').doc(`${this.props.id}`).collection("categories")
            .get()
            .then(snapshot => {
                const category = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    category.push(data)
                })
                this.setState({ category: category })
                console.log(category)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                {
                    this.state.category &&
                    this.state.category.flatMap(category => {
                        return (
                            <a href="/sub-menu">
                                <div class="menu-category">
                                    <div class="menu-category-info">
                                        <h3>{`${category.name}`}</h3>
                                        <p>{`${category.categories[0].items[0].name}`}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div >
        )
    }
}


export default MenuBox;





