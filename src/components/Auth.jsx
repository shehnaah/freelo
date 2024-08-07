import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi'
import logimg from '../img/log.png'

function Auth({register}) {
    const registerForm = register ? true : false
    const [userData,setUserData]=useState({
        name:"",email:"",password:""
    })
    const navigate=useNavigate()

    const handleRegister=async(e)=>{
        e.preventDefault()
        const {name,email,password}=userData
        if(!name||!email||!password){
            alert('Please fill the form completely')
        }else{
            // api call
            const res =await registerApi(userData)
            console.log(res);
            if(res.status===200){
                alert(`${res.data.name} has successfully registered`)
                // reset state
                setUserData({
                    name:"",email:"",password:""
                })
                navigate('/login')
            }else{
                alert(res.response.data)
            }
        }

    }

    const handleLogin=async(e)=>{
        e.preventDefault()
        const {email,password}=userData
        if(!email||!password){
            alert('Please fill the form completely')
        }else{
            // api call
            const res =await loginApi({email,password})
            console.log(res);
            if(res.status===200){
                // save res
                localStorage.setItem("existingUser",JSON.stringify(res.data.existingUser))
                localStorage.setItem("Role",res.data.role)
                sessionStorage.setItem("token",res.data.token)
                // reset state
                setUserData({
                    email:"",password:""
                })
                navigate('/')
            }else{
                alert(res.response.data)
            }
        }

    }
    
    console.log(userData);


  return (
    <div>
                    <div className="container contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container mt-5" style={{height: "600px"}}>
                        <div className="row g-4 card shadow border-primary bg-light py-5 px-4 d-flex flex-row justify-content-center align-items-center">
                           

                            <div className="col-lg-6  card shadow w-50 ">
                            <div className="text-center mt-5">
                            {registerForm ? (
  <h1 className="display-5 mb-5">SignUp to <span className="text-primary fw-bold mb-0">Free<span className="text-dark">Lo</span> </span></h1>
) : (
  <h1 className="display-5 mb-5">SignIn to <span className="text-primary fw-bold mb-0">Free<span className="text-dark">Lo</span> </span></h1>
)}
                                    {/* <h1 className="display-5 mb-5">SignUp to <span className="text-primary fw-bold mb-0">Free<span className="text-dark">Lo</span> </span></h1> */}
                                </div>
                                <form className="form d-flex flex-column justify-content-center align-items-center" >
                                {registerForm &&
                                    <div className="row g-1">
                                        <div className=" ">
                                            <input type="text" className="form-control border-primary p-2" style={{width:'450px'}} placeholder="Name"  onChange={e=>setUserData({...userData,name:e.target.value})} value={userData.name}/>
                                        </div>
                                        
                                    </div>}
                                    <div className=" mt-2 ">
                                        <input type="email" className="form-control border-primary p-2" placeholder="Email" style={{width:'450px'}}  onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email}/>
                                    </div>
                                    <div className="row g-1 mt-1">
                                       
                                        <div  className="">
                                            <input type="password" className="form-control border-primary p-2" placeholder="Password" style={{width:'450px'}} onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}/>
                                        </div>
                                    </div>                                    

                                {
                                        registerForm?
                                        <div className="col-12 text-center mt-3 mb-5">
                                            <button onClick={handleRegister}  className="btn btn-primary px-5 py-3 rounded-pill" type='submit' size='lg'> Register </button>
                                            <p>Already have an account ? <Link style={{textDecoration:'none'}} to={'/login'}>Login Here</Link></p>
                                        </div>:
                                        <div className="col-12 text-center mt-3 mb-5">
                                        <button onClick={handleLogin} className="btn btn-primary px-5 py-3 rounded-pill"  type='submit' size='lg'> Login </button>
                                        <p>New User ? <Link style={{textDecoration:'none'}} to={'/register'}>Register Here</Link></p>
                                    </div>
                                    }

                                </form>
                            </div>
                           <div className="col-lg-4" style={{borderRadius: "25px"}}>
                                    <img src={logimg} alt="" width="300px" height="400px"/>
                                </div> 
                                

                        </div>
                   
                
            </div>
        </div>


    </div>
  )
}

export default Auth
