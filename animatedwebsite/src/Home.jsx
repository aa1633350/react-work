import React from 'react';
import Common from './Common';
import Freelancer from "../src/images/Freelancer.svg"
const Home = () => {

    return (
        <>
            <Common 
                name="Grow your"
                imgsrc = {Freelancer}
                visit = "/service"
                btnName= "Get Started"
                id="1"
            />
        </>
    )
}

export default Home;