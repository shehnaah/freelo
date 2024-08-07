import {useContext, useState} from "react";
import {UserContext} from "../components/UserContext";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import proimg from '../img/log1.png'
import Header from "../components/Header";
// import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav";

export default function ProfilePage() {
  const [redirect,setRedirect] = useState(null);
  const {ready,user,setUser} = useContext(UserContext);
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
   axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }
console.log(user);
//   if (!ready) {
//     return 'Loading...';
//   }

  if (ready && !user ) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
        <Header/>

        {/* <h1>account log in for {user?.name}</h1> */}
      <AccountNav />
      {/* {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )} */}
      {/* {subpage === 'places' && (
        <PlacesPage />
      )} */}
<div className="row  d-flex flex-row justify-cotent-center ">
    <div className="col-lg-1"></div>
              <div className="item card  d-flex flex-row shadow col-lg-5 me-3 mt-5 p-4" >
    <div className=''>
                    <a href="property-details.html"><img src={proimg} alt="" width={'80px'} height={'180px'}/></a>
                            <span className="category text-center">Glam Makeover</span>
                            </div>                    
                        <div className='ms-4'>
                            <h6>$2.264.000</h6>
                            <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                            <ul>
                              <li>Bedrooms: <span>8</span></li>
                              <li>Bathrooms: <span>8</span></li>
                              <li>Area: <span>545m2</span></li>
                              <li>Floor: <span>3</span></li>
                              <li>Parking: <span>6 spots</span></li>
                            </ul>
                            <div className="main-button">
                              <a href="property-details.html">Schedule a visit</a>
                            </div>
                        </div>
                      </div>
                      <div className="item card shadow d-flex flex-row col-lg-5  mt-5 p-4" >
    <div className=''>
                    <a href="property-details.html"><img src={proimg} alt="" width={'80px'} height={'180px'}/></a>
                            <span className="category text-center">Glam Makeover</span>
                            </div>                    
                        <div className='ms-4'>
                            <h6>$2.264.000</h6>
                            <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                            <ul>
                              <li>Bedrooms: <span>8</span></li>
                              <li>Bathrooms: <span>8</span></li>
                              <li>Area: <span>545m2</span></li>
                              <li>Floor: <span>3</span></li>
                              <li>Parking: <span>6 spots</span></li>
                            </ul>
                            <div className="main-button">
                              <a href="property-details.html">Schedule a visit</a>
                            </div>
                        </div>
                      </div>
    <div className="col-lg-1"></div>
</div>
    </div>
    
  );
}

