import React from 'react';
import Common from './Common';
import Team from "../src/images/team_spirit.svg"
const AboutUs = () =>{

    return(
        <>
            <Common
                name="Welcome to About Page"
                imgsrc = {Team}
                visit = "/contact"
                btnName= "Contact Now"
                id="2"
            />
        </>
    )
}

export default AboutUs;