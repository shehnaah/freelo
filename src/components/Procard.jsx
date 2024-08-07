import React, { useEffect, useState } from 'react'
import proimg from '../img/log1.png'
import axios from 'axios'
import { getAllProfilesApi } from '../services/allApi'
function Procard() {
    const [profiles,setProfiles] = useState([]);
    const [error,setError] = useState('')




    useEffect(() => {
      const getAllProfiles = async () => {
        try {
          const response = await getAllProfilesApi('/allprofiles');
          // Axios automatically parses JSON, so you can directly access data
          setProfiles(response.data);
        } catch (error) {
          console.error('Error fetching profiles:', error);
          setError('Error fetching profiles. Please try again later.');
        }
      };
  
      getAllProfiles();
    }, []);     
  return (
    <>

<div>
  {profiles.map(profile => (
    <div key={profile._id} className="item card shadow d-flex flex-row">
       <div className='d-flex flex-column'>
          <img onError={() => console.error(`Failed to load image for ${profile.name}`)} src={profile.photo} alt={profile.name} width={'80px'} height={'180px'} />
        <span className="category text-center">{profile.profession}</span>
       </div>
      <div className='ms-4'>
        <h6>{profile.price}</h6>
        <span className="category text-center mb-2 ms-4">{profile.name}</span>

        <ul className='d-flex flex-column'>
          <li>Bio: <span>{profile.description}</span></li>
          <li>Extra Information: <span>{profile.extrainfo}</span></li>
          <li>Availability: <span>{profile.available}</span></li>
          <li>Contact Info: <span>{profile.contacts}</span></li>
        </ul>
        <div className='d-flex flex-row justify-content-around'>
          <div className="main-button">
            <a href="property-details.html">Enquire for more</a>
          </div>
          <div className="main-button">
            <a href="property-details.html">Gallery</a>
          </div>
        </div>

      </div>
    </div>
  ))}
</div>
                     
                 

    </>
  )
}

export default Procard
