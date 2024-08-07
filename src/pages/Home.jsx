import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import homeimg from '../img/home.png'
import Procard from '../components/Procard'
import Viewpro from './Viewpro'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <Header/>
      <div className="container-fluid bg-light  my-6">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to FreeLo</small>
                        <h1 className="display-1 mb-4 animated bounceInDown">Find <span className="text-primary">Best</span>Professionals For Your Dream Day</h1>
                        <Link to={'/viewpro'} className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Explore</Link>
                        <Link to={'/about'} className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</Link>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <img src={homeimg} className="img-fluid rounded animated zoomIn" alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <About/>

        <Contact/>
        {/* <Footer/> */}

        <a href="#" class="btn btn-md-square btn-primary rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>   

       
    
    </div>
  )
}

export default Home
