import React from 'react';
import Card from "./Card";
import Sdata from './Sdata';
const Service = () => {

    return (
        <>
            <div className="my-3">
                <h1 className="text-center p-2 ">Our Services</h1>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    Sdata.map((val,index)=>{
                                        return <Card
                                            key = {index}
                                            src = {val.imgsrc}
                                            title = {val.title}
                                            desc = {val.desc}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;