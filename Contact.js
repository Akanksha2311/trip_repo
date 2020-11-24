import React from 'react';
//import './myStyles.css'
import './Contact.css'

const heading={
    width: '20rem',
    border: '50%',
    alignItems: 'center',
    marginLeft: '500px' ,
    marginTop: '20px'
}



export default function Contact(){
    return (
        <div >
             {/* <h1 className=" text-dark  text-capitalize m-2 p-2">Contact Us</h1> */}
                <div class="card text-center" style={heading} >
                <h1 className=" text-dark text-center text-capitalize m-2 p-2">Contact Us</h1>
                    <img style={{borderRadius:'50%'}} src="https://wallpaperaccess.com/full/2489630.jpg" class="card-img-top" alt="hello"/>
                        <div class="card-body text-center">
                            <legend>
                                <p class="card-text">Name : Akanksha Gupta</p>
                                <p class="card-text">Contact: 9876543210</p>
                                <p class="card-text">Address:BTM 2nd stage Banguluru </p>
                            </legend>
                        </div>
                </div>
        </div>
    )
}