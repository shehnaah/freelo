import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from "./UserContext.jsx";
function Header({query,handleInputChange}) {
const [name,setName] = useState('')
const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("existingUser")){
          setName(JSON.parse(localStorage.getItem("existingUser")).name)
        }
        console.log(name);
      },[])
    
      const handelLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("existingUser")
        localStorage.removeItem("Role")
        sessionStorage.removeItem("token")
        console.log('logout clicked');
        navigate('/')
      }
    
  return (
    <div>
        <div className="container-fluid nav-bar">
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-4">
                    <Link to={'/'} className="navbar-brand">
                        <h1 className="text-primary fw-bold mb-0">Free<span className="text-dark">Lo</span> </h1>
                    </Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to={'/'} className="nav-item nav-link active">Home</Link>
                            <Link to={'/about'} className="nav-item nav-link">About</Link>
                            {/* <a href="service.html" className="nav-item nav-link">Services</a> */}
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <input type="text" placeholder="Search" className="me-2 p-4" style={{width: "200px",borderRadius: "20px",height:" 30px",background: "transparent",border: ".2px solid gray"}} onChange={handleInputChange} value={query}/>
                        <button type='submit' className="btn-search btn btn-primary btn-md-square me-4 rounded-circle  d-lg-inline-flex" ><i className="fas fa-search"></i></button>
                        <Link to={name?'/account/myprofile':'/login'} className="btn btn-primary py-2 px-4  d-flex flex-row rounded-pill">
<div className='d-flex flex-row'> <i className="fa-solid fa-user me-2 mt-1"></i> <h6 className='mt-1'>{name}  </h6>
 </div>
                        </Link>
{name?
                            <button  className="btn btn-primary py-2 px-4  d-flex flex-row rounded-pill ms-2" onClick={handelLogout}>
    <div className='d-flex flex-row'> <i className="fa-solid fa-right-from-bracket me-2 mt-1"></i><h6 className='mt-1' >Logout </h6>
     </div>
                            </button>: <p></p>
    
}
                    </div>
                </nav>
            </div>
        </div>

    </div>
  )
}

export default Header
