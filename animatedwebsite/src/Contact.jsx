import React, { useState } from 'react';

const Contact = () =>{

    const [data,setData] = useState({
        fullname : "",
        email : "",
        mess : "",
    })

    const inputEvent = (event) =>{

        const { name,value } = event.target;
        setData((preValue)=>{
            return{
                ...preValue,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`${data.fullname} ${data.email} ${data.mess}`);
    }

    return(
        <>
            <div className="my-3">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label  className="form-label">Name</label>
                                <input type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name ="fullname"
                                value = {data.fullname}
                                onChange ={inputEvent}
                                placeholder="Enter Your Name" />
                            </div>
                            
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input type="email"
                                 className="form-control" 
                                 id="exampleFormControlInput1" 
                                 name ="email"
                                 value = {data.email}
                                 onChange ={inputEvent}
                                 placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Comments</label>
                                <textarea 
                                className="form-control" 
                                id="exampleFormControl1" 
                                rows="3"
                                name ="mess"
                                value = {data.mess}
                                onChange ={inputEvent}
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" 
                                type="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact;