import React from 'react';
import {Route , Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';
import Search from './Search';
const App = () =>{

    return(
        <>
        <Menu/>
            <Switch>
                <Route exact path='/' component={()=> <About name='About Aditya'/>}/> {/*calling component this way enables you to pass props in them */}
                <Route exact path='/contact' render={()=> <Contact name='Contact Aditya'/>}/>
                <Route exact path='/service' component={Service}/> {/*this is also a way to call the component but you cant pas props in this */}
                <Route exact path='/user/:xyz/:company' component={User}/>
                {/*agar tumko props pass nahi krna tho component ka use kro , aur agar prop pass krna hai tho render ka use kro tarika dono sahi hai but props ke case mai render better hai*/}
                <Route exact path='/search' component={Search}/>
                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;