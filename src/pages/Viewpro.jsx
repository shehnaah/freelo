import React, { useState,useEffect,useParams } from 'react'
import proimg from '../img/log1.png'
import './viewpro.css'
import Procard from '../components/Procard'
import Header from '../components/Header'
import { Link,  } from 'react-router-dom'
import axios from 'axios'
import AddPro from '../components/AddPro'
import { getAllProfilesApi } from '../services/allApi'
import { BASE_URL } from '../services/baseUrl'
function Viewpro() {
  const [error, setError] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [filters, setFilters] = useState({
    profession: '',
    location: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryMessage, setEnquiryMessage] = useState('');
  const handleEnquireClick = () => {
    setIsModalOpen(true);
  };

  const handleSendEnquiry = () => {
    // Perform actions with the enquiry message, e.g., send it to a server
    console.log(`Sending enquiry: ${enquiryMessage}`);

    // Close the modal
    setIsModalOpen(false);
  };

  const filteredProfiles = profiles?.filter(profile => {
    const professionMatch = !filters.profession || profile.profession.includes(filters.profession);
    const locationMatch = !filters.location || profile.location.includes(filters.location);
    return professionMatch && locationMatch;
  });

  const handleSearch = async () => {
    try {
      const response = await getAllProfilesApi('/allprofiles', filters);
      setProfiles(response.data);
    } catch (error) {
      console.error('Error fetching filtered profiles:', error);
      setError('Error fetching filtered profiles. Please try again later.');
    }
  };

  useEffect(() => {
    const getAllProfiles = async () => {
      try {
        const response = await getAllProfilesApi('/allprofiles');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
        setError('Error fetching profiles. Please try again later.');
      }
    };

    getAllProfiles();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="properties section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className=" text-center">
                <h2>Look for the best ONE</h2>
              </div>
              <div className='d-flex justify-content-center mt-2 mb-3'>
                <AddPro />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div>
                <div className="">
                  <div className='card shadow'>
                    <div className='d-flex  mt-3 fs-2 ms-3'>
                      <i className="fa-solid fa-filter text-primary mt-2 me-2"></i>Filter
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center mt-3 mb-4'>
                      <input
                        type="text"
                        placeholder="Profession"
                        className="me-2 mb-2 p-4"
                        style={{ width: "250px", borderRadius: "8px", height: " 10px", background: "transparent", border: ".2px solid gray" }}
                        value={filters.profession}
                        onChange={e => setFilters({ ...filters, profession: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        className="me-2 p-4 mb-2"
                        style={{ width: "250px", borderRadius: "8px", height: " 30px", background: "transparent", border: ".2px solid gray" }}
                        value={filters.location}
                        onChange={e => setFilters({ ...filters, location: e.target.value })}
                      />

                      <button className="btn-search btn btn-primary  me-4" onClick={handleSearch}>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 col-md-6" >
              <div>
                {filteredProfiles?.map(profile => (
                  <div key={profile._id} className="item card shadow d-flex flex-row">
                    <div className='d-flex flex-column'>
                      <img onError={() => console.error(`Failed to load image for ${profile.name}`)} src={`${BASE_URL}/uploads/${profile.photo}`} alt={profile.name} width={'80px'} height={'180px'} />
                      <span className="category text-center">{profile.profession}</span>
                    </div>
                    <div className='ms-4'>
                      <h6>{profile.price}</h6>
                      <span className="category text-center mb-2 ms-4">{profile.name}</span>

                      <ul className='d-flex flex-column'>
                      <li>Location: <span>{profile.location}</span></li>
                        <li>Bio: <span>{profile.description}</span></li>
                        <li>Extra Information: <span>{profile.extrainfo}</span></li>
                        <li>Availability: <span>{profile.available}</span></li>
                        <li>Contact Info: <span>{profile.contacts}</span></li>
                      </ul>
                      <div className='d-flex flex-row justify-content-around'>
                        <div className="main-button">
                          <a href='' onClick={handleEnquireClick}>Enquire for more</a>
                        </div>
                        <div className="main-button">
                          <a href="property-details.html">Gallery</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enquire for more</h2>
            <textarea
              rows="4"
              placeholder="Type your enquiry message here..."
              value={enquiryMessage}
              onChange={(e) => setEnquiryMessage(e.target.value)}
            />
            <div className="d-flex justify-content-end">
              <button onClick={handleSendEnquiry}>Send</button>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Viewpro;
