import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import About from './AboutUs';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
const App = () =>{

    return(
        <>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                
                <Route exact path='/about' component={About}/>
                
                <Route exact path='/service' component={Service}/>
                
                <Route exact path='/contact' component={Contact}/>
                <Redirect to ="/" />
            </Switch>
        </>
    )
}

export default App;