import React from 'react';
import {useParams , useLocation, useHistory} from 'react-router-dom';
const User = () =>{

    const {xyz, company} = useParams();  //curly brace ke andar add hoga coz multiple values return kr sakta hai
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    return(
        <>
            <h1>This is {xyz} User working at {company}</h1>
            <p>My Current Location is {location.pathname}</p>
            {
                location.pathname === `/user/aditya/oracle` ? (<button onClick={()=> history.goBack()}>Go Back</button>) : null 
            }
        </>
    )
}

export default User;