import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () =>{

    const [num,setNum] = useState();
    const [name,setName] = useState();
    const [move,setMove] = useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);  //backtick use kr rahe hai cause jo 1 hai last mai usko hum select box se update krenge
            // console.log(res);
            setName(res.data.name);
            var len = res.data.moves.length;
            const rndInt = Math.floor(Math.random() * len);
            // console.log(rndInt)
            setMove(res.data.moves[rndInt].move.name);
            // console.log("heloo");
        }

        getData();
        
    })

    const getValue = (event) =>{

        setNum(event.target.value);
    }
    return(
        <>
            <h1>Pokemon selected Value is {num}</h1>
            <h1>Pokemon selected by you is <span style={{color : 'red'}}> {name}  </span></h1>
            <h1><span style={{color : 'red'}}> {name} </span> has <span style={{color : 'red'}}> {move} move </span></h1>
            <select value={num} onChange={getValue}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
        </>
    )
}

export default App;