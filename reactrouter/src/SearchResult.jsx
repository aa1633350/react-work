import React from 'react';

const SearchResult = (props) =>{
    // console.log(props.result);
    let img1="";
    if(props.result !== ""){
        img1 = `https://source.unsplash.com/500x300/?${props.result}`;
    }
    return(
        <>
            <img src = {img1} alt = 'start typing'/>
            
        </>
    )
}

export default SearchResult;