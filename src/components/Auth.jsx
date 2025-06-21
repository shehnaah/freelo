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
  <div className="container contact py-5">
    <div className="container mt-5" style={{ minHeight: "600px" }}>
      <div className="row card shadow border-primary bg-light py-5 px-3 justify-content-center align-items-center">

        {/* Form Column */}
        <div className="col-lg-6 col-md-10 col-sm-12 mb-4">
          <div className="card shadow p-4">
            <div className="text-center mb-4">
              {registerForm ? (
                <h1 className="display-6">SignUp to <span className="text-primary fw-bold">Free<span className="text-dark">Lo</span></span></h1>
              ) : (
                <h1 className="display-6">SignIn to <span className="text-primary fw-bold">Free<span className="text-dark">Lo</span></span></h1>
              )}
            </div>

            <form className="form">
              {registerForm && (
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-primary"
                    placeholder="Name"
                    onChange={e => setUserData({ ...userData, name: e.target.value })}
                    value={userData.name}
                  />
                </div>
              )}

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control border-primary"
                  placeholder="Email"
                  onChange={e => setUserData({ ...userData, email: e.target.value })}
                  value={userData.email}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control border-primary"
                  placeholder="Password"
                  onChange={e => setUserData({ ...userData, password: e.target.value })}
                  value={userData.password}
                />
              </div>

              {registerForm ? (
                <div className="text-center">
                  <button onClick={handleRegister} className="btn btn-primary px-5 py-2 rounded-pill" type="submit">Register</button>
                  <p className="mt-2">Already have an account? <Link to="/login" className="text-decoration-none">Login Here</Link></p>
                </div>
              ) : (
                <div className="text-center">
                  <button onClick={handleLogin} className="btn btn-primary px-5 py-2 rounded-pill" type="submit">Login</button>
                  <p className="mt-2">New User? <Link to="/register" className="text-decoration-none">Register Here</Link></p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-lg-4 col-md-8 col-sm-10 text-center">
          <img src={logimg} alt="login visual" className="img-fluid rounded" style={{ maxHeight: "400px" }} />
        </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default Auth
