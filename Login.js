import React from 'react';
import { Link } from 'react-router-dom';

const heading={
    marginLeft: '500px' ,
    marginTop: '20px'
}


export default function Login(){
    return (
        <div style={heading}>
            
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <h1 className=" text-danger text-center text-capitalize m-2 p-2">Login Here!!</h1>
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
               
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
               
                {/* <button 
                    type="submit" 
                    className="btn btn-primary text-center mt-3 d-block form-control"
                >
                    Login
                </button> */}

            <input className="btn btn-primary text-center mt-2  form-control" type="submit" value="Login"/> <br/>
            <br/>
            
                <Link to="/register">Pls Register First..</Link>
                <br/> <br/>
            </form>
        </div>
        </div>
    )
}

