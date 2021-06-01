import React, { useState } from 'react';
import SearchResult from './SearchResult';
const Search = () =>{
    const [img, setImg] = useState("");
    const imgSearch = (event) =>{
        const data = event.target.value;
        setImg(data);
    }
    return(
        <>
            <div className='searchbar'>
                <h1>This is Aditya Search</h1>
                <input type='text'
                    placeholder="Search anything"
                    value={img}
                    onChange={imgSearch}

                />
                <SearchResult result={img}/>
            </div>
        </>
    )
}

export default Search;