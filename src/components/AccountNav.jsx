import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyProfile from './MyProfile'
import axios from 'axios';
import { UserContext } from './UserContext';
function AccountNav() {
    const [redirect,setRedirect] = useState(null);
    const {ready,user,setUser} = useContext(UserContext);
    const navigate = useNavigate()
  
    async function logout() {
        await axios.post('/logout');
        navigate('/');
        setUser(null);
      }
  return (
    <div>
            <div className="d-flex flex-row justify-content-center mt-3">
        <Link to={'/account/myprofile'} className="btn btn-primary me-3">My profile</Link>
        <Link className="btn btn-primary me-3">My enquiries</Link>
        <Link className="btn btn-primary" onClick={logout}>Logout</Link>


      </div>

    </div>
  )
}

export default AccountNav
