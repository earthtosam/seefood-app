import React from 'react';
import './stylesheet.css';
import Nav from './components/navBar';
import Footer from './components/footer';
import Home from './home';
import Restaurants from './restaurants';
import About from './about';
import Menu from './menu';
import SubMenu from './sub-menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DatabaseTest from './DatabaseTest';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
                    <Route path={process.env.PUBLIC_URL + '/home'} component={Home} />
                    <Route path={process.env.PUBLIC_URL + '/restaurants'} exact component={Restaurants} />
                    <Route path={process.env.PUBLIC_URL + '/about'} exact component={About} />
                    <Route path={process.env.PUBLIC_URL + '/menu'} component={Menu} />
                    <Route path={process.env.PUBLIC_URL + '/sub-menu'} component={SubMenu} />
                    <Route path={process.env.PUBLIC_URL + '/restaurants/:name'} component={Menu} />
                </Switch>
                <Footer />
                <DatabaseTest />
            </div>
        </Router>
    );
}

export default App;