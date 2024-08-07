import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import './Addpro.css'
// import Perks from './Perks'
import axios from 'axios'
import PhotosUploader from './PhotosUploader'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { addProfileResponseContext } from '../context/ContextShare'
import { addProfileApi } from '../services/allApi'
import Modal from 'react-bootstrap/Modal';
function AddPro() {
const {addprofileResponse,setAddprofileResponse}=useContext(addProfileResponseContext)

const [show, setShow] = useState(false);
const [token,setToken]= useState()

const handleClose = () => {
    setShow(false)
    setPreview("")
    setProfileDetails({
      name: "", profession: "", location: "", contacts: "", available: "", description: "", extrainfo: "",photo: "",social: ""
    })
    console.log(profileDetails);
}
const navigate = useNavigate();

const handleShow = () => {
  if (!token) {
    // Redirect to the login page
    alert('Please log in to your account before attempting to add a new profile. ')
    navigate('/login');
  } else {
    setShow(true);
  }
};

const [profileDetails, setProfileDetails] = useState({
    name: "", profession: "", location: "", contacts: "", available: "", description: "", extrainfo: "",photo: "",social: "",userId: ""
})

const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, profession, location, contacts, available, description, extrainfo, photo, social,userId } = profileDetails;

  if (!name || !profession || !location || !contacts || !available || !description || !extrainfo || !photo || !social || !userId) {
      alert('Please fill in all required fields.');
  } else {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("profession", profession);
      reqBody.append("location", location);
      reqBody.append("contacts", contacts);
      reqBody.append("available", available);
      reqBody.append("description", description);
      reqBody.append("extrainfo", extrainfo);
      reqBody.append("photo", photo);
      reqBody.append("social", social);
      reqBody.append("userId", userId);


      const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
      };

      try {
          const result = await addProfileApi(reqBody, reqHeader);

          if (result.status === 200) {
              alert(`${name} added successfully`);
              setPreview({
                  name: "",
                  profession: "",
                  location: "",
                  contacts: "",
                  available: "",
                  description: "",
                  extrainfo: "",
                  photo: "",
                  social: ""
              });
              setAddprofileResponse(result.data);
              handleClose();
              window.location.reload()
          } else {
              console.error(result.data);
              alert(`Failed to add profile: ${result.data}`);
          }

          console.log(result);
      } catch (error) {
          console.error('Error during profile submission:', error);
          alert('An error occurred during profile submission. Please try again.');
      }
  }
};
const [preview, setPreview] = useState("")
console.log(profileDetails);
useEffect(() => {
    if (localStorage.getItem("existingUser")&&sessionStorage.getItem("token")) {
        setProfileDetails({ ...profileDetails, userId: JSON.parse(localStorage.getItem("existingUser"))._id })
        setToken(sessionStorage.getItem("token"))
    }
}, [])

useEffect(() => {
    if (profileDetails.photo) {
        setPreview(URL.createObjectURL(profileDetails.photo))

    }
    
}, [profileDetails.photo])

    
  return (

<>
<button className='btn btn-primary rounded text-center'  onClick={handleShow}>
    Add Your Profile
</button>

<div className='row'>
  <Modal className='bg-transparent shadow col-lg-4'
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size='lg'
      centered
  >
      <Modal.Body className='bg-transparent shadow'>
            <form  class="" style={{borderRadius: "15px"}}>
              <div class="card-body p-4 p-md-5 ">
    <div className=''>
                    <h1 class="mb-2 pb-2 pb-md-0 mb-md-5 text-primary text-center" >Profile Details</h1>
        
    </div>            <form className=''>
    
                  <div class="row">
                    <div class="col-md-6 mb-2">
    
                      <div class="form-outline">
                        <input type="text" id="firstName" class="form-control form-control-lg shadow" placeholder='Name' value={profileDetails.name} onChange={(e) => setProfileDetails({ ...profileDetails, name: e.target.value })}  />
                      </div>
    
                    </div>
                    <div class="col-md-6 mb-2">
    
                      <div class="form-outline">
                        <input type="text" id="profession" class="form-control form-control-lg shadow" placeholder='Profession' value={profileDetails.profession} onChange={(e) => setProfileDetails({ ...profileDetails, profession: e.target.value })}/>
                      </div>
    
                    </div>
                  </div>
    
                  <div class="row">
                    <div class="col-md-6 mb-2 d-flex align-items-center">
    
                      <div class="form-outline datepicker w-100">
                        <input type="text" class="form-control form-control-lg shadow" id="location" placeholder='Location' value={profileDetails.location} onChange={(e) => setProfileDetails({ ...profileDetails, location: e.target.value })}/>
                      </div>
    
                    </div>
                  </div>
    
                  <div class="row">
                    <div class="col-md-6 mb-2 pb-2">
    
                      <div class="form-outline">
                        <input type="text" id="contacts" class="form-control form-control-lg shadow" placeholder='Contact info' value={profileDetails.contacts} onChange={(e) => setProfileDetails({ ...profileDetails, contacts: e.target.value })}/>
                      </div>
    
                    </div>
                    <div class="col-md-6 mb-2 pb-2">
    
                      <div class="form-outline">
                        <input type="text" id="available" class="form-control form-control-lg shadow" placeholder='Available during' value={profileDetails.available} onChange={(e) => setProfileDetails({ ...profileDetails, available: e.target.value })} />
                      </div>
    
                    </div>
                  </div>
                  <div class="col-md-6 mb-2 d-flex flex-row   justify-content-between">   
                      <div class="form-outline datepicker d-flex flex-row row justify-content-between">
<div className='col-lg-6'>
                          <input  class="form-control form-control-lg shadow"  placeholder='Location' onChange={(e) => setProfileDetails({ ...profileDetails, photo: e.target.files[0] })} id='profilepic' type="file" />
  
</div><div className='col-lg-6'>
                          <img width={'400px'} height={'200px'} src={preview ? preview : ""} alt="profile" />
  
</div> 
                     </div>
                    </div>

                  <div className="row mb-2">
                  <div class="form-outline">
                        <textarea type="textarea" id="description" class="form-control form-control-lg shadow" placeholder='Professional bio' value={profileDetails.description} onChange={(e) => setProfileDetails({ ...profileDetails, description: e.target.value })}/>
                      </div>
                  </div>
                  <div className="row mb-2">
                  <div class="form-outline">
                        <input type="text" id="extrainfo" class="form-control form-control-lg shadow" placeholder='Extra Information' value={profileDetails.extrainfo} onChange={(e) => setProfileDetails({ ...profileDetails, extrainfo: e.target.value })}/>
                      </div>
                  </div>
    
                  <div className="row mb-2">
                  <div class="form-outline">
                        <input type="text" id="social" class="form-control form-control-lg shadow" placeholder='Social Media Link' value={profileDetails.social} onChange={(e) => setProfileDetails({ ...profileDetails, social: e.target.value })}/>
                      </div>
                  </div>
    
    
    {/* <PhotosUploader photo={photo} onChange={setphoto}/>
    <Perks selected ={perks} onChange ={setPerks}/> */}
  <div className='d-flex flex-row justify-content-around'>
                      <div class="mt-4 pt-2 text-center">
                      <input class="btn btn-primary " type="submit" value="Cancel" onClick={handleClose}/>
                    </div>
    
      
                    <div class="mt-4 pt-2 text-center">
                      <input class="btn btn-primary" type="submit" value="Save" onClick={handleSubmit}/>
                    </div>
    
  </div>  
                </form>
              </div>
            </form>
  
      </Modal.Body>
  </Modal>
  
</div>
</>

  )
}

export default AddPro
