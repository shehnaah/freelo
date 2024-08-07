import React from 'react'
import { Link } from 'react-router-dom'
import logimg from '../img/log.png'
import {useState} from "react";
import axios from "axios";


function Register() {
  
  return (
    <div>
              {/* <div className="container contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container mt-5" style={{height: "600px"}}>
                        <div className="row g-4 card shadow border-primary bg-light py-5 px-4 d-flex flex-row justify-content-center align-items-center">
                           

                            <div className="col-lg-6  card shadow w-50 ">
                            <div className="text-center mt-5">
                                    <h1 className="display-5 mb-5">SignUp to <span className="text-primary fw-bold mb-0">Free<span className="text-dark">Lo</span> </span></h1>
                                </div>
                                <form className="form d-flex flex-column justify-content-center align-items-center" onSubmit={registerUser}>
                                    <div className="row g-1">
                                        <div className=" ">
                                            <input type="text" className="form-control border-primary p-2" style={{width:'450px'}} placeholder="Name"  value={name}
                 onChange={e => setName(e.target.value)}/>
                                        </div>
                                        
                                    </div>
                                    <div className=" mt-2 ">
                                        <input type="email" className="form-control border-primary p-2" placeholder="Email" style={{width:'450px'}}  value={email}
                 onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="row g-1 mt-1">
                                       
                                        <div  className="">
                                            <input type="password" className="form-control border-primary p-2" placeholder="Password" style={{width:'450px'}} value={password}
                 onChange={e=> setPassword(e.target.value)}/>
                                        </div>
                                    </div>                                    
                                    <div className="col-12 text-center mt-3 mb-5">
                                        <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">Register</button>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <h6>Already have an account? </h6><h6><Link to={'/login'} > Log In</Link></h6>
                                    </div>
                                </form>
                            </div>
                           <div className="col-lg-4" style={{borderRadius: "25px"}}>
                                    <img src={logimg} alt="" width="300px" height="400px"/>
                                </div> 
                                

                        </div>
                   
                
            </div>
        </div>
 */}
 register
    </div>
  )
}

export default Register
