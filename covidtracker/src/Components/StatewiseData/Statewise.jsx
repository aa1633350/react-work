import React, { useEffect, useState } from 'react';
import './Statewise.css';
const Statewise = () =>{

    const [data,setData] = useState([]);
    const getCovidData = async () =>{
       const res = await fetch('https://api.covid19india.org/data.json');
       const actualData = await res.json()
       setData(actualData.statewise);
    }

    useEffect(()=>{
        getCovidData();
    },[]);

    return (
        <>
            
            <div className='container'>
                <div className='main-heading'>
                    <h1>India Covid 19 Dashboard</h1>
                </div>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                            {
                                data.map((currEle,index) =>{
                                    return(
                                        <tr key={index}>
                                            <td>{currEle.state}</td>
                                            <td>{currEle.confirmed}</td>
                                            <td>{currEle.recovered}</td>
                                            <td>{currEle.deaths}</td>
                                            <td>{currEle.active}</td>
                                            <td>{currEle.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </thead>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Statewise;