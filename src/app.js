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
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/restaurants" component={Restaurants} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/sub-menu" component={SubMenu} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;