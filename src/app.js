import React from 'react';
import './stylesheet.css';
import Nav from './components/navBar';
import Footer from './components/footer';
import Home from './home';
import Restaurants from './restaurants';
import Menu from './menu';
import SubMenu from './sub-menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="https://earthtosam.github.io/seefood-app/" exact component={Home} />
                    <Route path="https://earthtosam.github.io/seefood-app/home" component={Home} />
                    <Route path="https://earthtosam.github.io/seefood-app/restaurants" component={Restaurants} />
                    <Route path="https://earthtosam.github.io/seefood-app/menu" component={Menu} />
                    <Route path="https://earthtosam.github.io/seefood-app/sub-menu" component={SubMenu} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;