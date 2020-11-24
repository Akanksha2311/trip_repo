import React from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom';
import Login from '../Login/Login';

const heading={
    marginLeft: '500px' ,
    marginTop: '20px'
}


export default function Register(){
    return (

     <div className="register" style={heading}>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center ">
            <h2 className=" text-danger text-center text-capitalize m-2 p-2">Register Page.</h2>
            <form>
            <div className="form-group text-left">
            <input type="text" 
                       className="form-control" 
                       id="name" 
                       aria-describedby="nameHelp" 
                       placeholder="Enter your name"
                />

                </div>
                <div className="form-group text-left">
                {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
               
               
                </div>
                <div className="form-group text-left">
                <input type="text" 
                       className="form-control" 
                       id="number" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter phone number"
                />
                </div>
                <div className="form-group text-left">
                    {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>

                <select className="form-control mt-2 dropdown form-group">
                        <option className="dropdown-item text-center ">Add A Favorite Place</option>
                        <option className="dropdown-item text-center ">Simla</option>
                        <option className="dropdown-item text-center">Goa</option>
                        <option className="dropdown-item text-center ">Puri</option>
                        <option className="dropdown-item text-center ">Manali</option>
                        <option className="dropdown-item text-center ">Ooty</option>
                    </select>
                 
                <input className="btn btn-primary text-center mt-3 d-block form-control" type="submit" value="Register"/> <br/>
                
            </form>
        </div>
</div> 

   
    )
}