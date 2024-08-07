import React, { useEffect, useState } from 'react'
import proimg from '../img/log1.png'
import Header from './Header'
import '../myprofile.css'
import { updateProfileAPI } from '../services/allApi'
function MyProfile() {
  const [userProfile,setProfile]=useState({
    _id:JSON.parse(localStorage.getItem("existingUser"))._id,username:JSON.parse(localStorage.getItem("existingUser")).name,
    email:JSON.parse(localStorage.getItem("existingUser")).email,password:JSON.parse(localStorage.getItem("existingUser")).password,
    profession:"",location: "", contacts: "", available: "", description: "", extrainfo: "",photo: "",social: ""
})
console.log(userProfile);
const [UpdateProfile,setUpadateProfile]=useState()
const [preview,setPreview]=useState("")
useEffect(()=>{
    if(userProfile.photo){
        setPreview(URL.createObjectURL(userProfile.photo))
    }else{
        setPreview("")
    }
},[userProfile.ProfileImage])

const handleUpdate=async(e)=>{
    e.preventDefault()
    const {_id,name, profession,location,contacts,available,
      description,  extrainfo,photo,social }=userProfile
    if(!_id||!name || !profession || !location || !contacts || !available || !description || !extrainfo || !photo||  !social){
        alert('please fill the form')
        
    }else{
        const reqBody=new FormData()
        reqBody.append("name", name)
        reqBody.append("profession", profession)
        reqBody.append("location", location)
        reqBody.append("contacts", contacts)
        reqBody.append("available", available)
        reqBody.append("description", description)
        reqBody.append("extrainfo", extrainfo)
        reqBody.append("profileImage", photo)
        reqBody.append("social", social)
        const token=sessionStorage.getItem("token")
        if(photo){
            const reqHeader={
                "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}`

            }
            const result=await updateProfileAPI(reqBody,reqHeader)
            setProfile({
                _id:result.data._id,name:result.data.name,
                email:result.data.email,password:result.data.password,
                profession:result.data.profession,location:result.data.location,contacts:result.data.contacts,available:result.data.available,description:result.data.description,extrainfo:result.data.extrainfo,photo:result.data.photo,social:result.data.social
            })
        }else{
            const reqHeader={
                "Content-Type": "application/json", "Authorization": `Bearer ${token}`

            }
        }

        
    }
}
return (
    <div className=''>
            <div  class="row" style={{borderRadius: "15px"}}>
              <div className="col-lg-4"></div>
              <div class="card-body p-4 mt-5 row d-flex justify-content-center align-items-center col-lg-4 border rounded shadow">
      <h1 class="mb-2 pb-2 pb-md-0 mb-md-5 text-light text-center" >Profile Details</h1>
        
<div className=' d-flex justify-content-center '>
            <form className=''>
      
                    <div class="row">
                      <div class="col-md-6 mb-2">
      
                        <div class="form-outline">
                          <input type="text" id="firstName" class="form-control form-control-lg shadow" placeholder='Name' value={userProfile.name} onChange={(e)=>setProfile({...userProfile,name:e.target.value})}  />
                        </div>
      
                      </div>
                      <div class="col-md-6 mb-2">
      
                        <div class="form-outline">
                          <input type="text" id="profession" class="form-control form-control-lg shadow" placeholder='Profession' value={userProfile.profession} onChange={(e) => setProfile({ ...userProfile, profession: e.target.value })}/>
                        </div>
      
                      </div>
                    </div>
      
                    <div class="row">
                      <div class="col-md-6 mb-2 d-flex align-items-center">
      
                        <div class="form-outline datepicker w-100">
                          <input type="text" class="form-control form-control-lg shadow" id="location" placeholder='Location' value={userProfile.location} onChange={(e) => setProfile({ ...userProfile, location: e.target.value })}/>
                        </div>
      
                      </div>
                    </div>
      
                    <div class="row">
                      <div class="col-md-6 mb-2 pb-2">
      
                        <div class="form-outline">
                          <input type="text" id="contacts" class="form-control form-control-lg shadow" placeholder='Contact info' value={userProfile.contacts} onChange={(e) => setProfile({ ...userProfile, contacts: e.target.value })}/>
                        </div>
      
                      </div>
                      <div class="col-md-6 mb-2 pb-2">
      
                        <div class="form-outline">
                          <input type="text" id="available" class="form-control form-control-lg shadow" placeholder='Available during' value={userProfile.available} onChange={(e) => setProfile({ ...userProfile, available: e.target.value })} />
                        </div>
      
                      </div>
                    </div>
                    <div class="col-md-6 mb-2 d-flex flex-row   justify-content-between">   
                        <div class="form-outline datepicker d-flex flex-row row justify-content-between">
  <div className='col-lg-6'>
                            <input  class="form-control form-control-lg shadow"  placeholder='Location' onChange={(e) => setProfile({ ...userProfile, photo: e.target.files[0] })} id='profilepic' type="file" />
    
  </div><div className='col-lg-6'>
                            <img width={'400px'} height={'200px'} src={preview ? preview : ""} alt="profile" />
    
  </div> 
                       </div>
                      </div>
  
                    <div className="row mb-2">
                    <div class="form-outline">
                          <textarea type="textarea" id="description" class="form-control form-control-lg shadow" placeholder='Professional bio' value={userProfile.description} onChange={(e) => setProfile({ ...userProfile, description: e.target.value })}/>
                        </div>
                    </div>
                    <div className="row mb-2">
                    <div class="form-outline">
                          <input type="text" id="extrainfo" class="form-control form-control-lg shadow" placeholder='Extra Information' value={userProfile.extrainfo} onChange={(e) => setProfile({ ...userProfile, extrainfo: e.target.value })}/>
                        </div>
                    </div>
      
                    <div className="row mb-2">
                    <div class="form-outline">
                          <input type="text" id="social" class="form-control form-control-lg shadow" placeholder='Social Media Link' value={userProfile.social} onChange={(e) => setProfile({ ...userProfile, social: e.target.value })}/>
                        </div>
                    </div>
      
      
      {/* <PhotosUploader photo={photo} onChange={setphoto}/>
      <Perks selected ={perks} onChange ={setPerks}/> */}
    <div className='d-flex flex-row justify-content-around'>
                        <div class="mt-4 pt-2 text-center">
                        <input class="btn btn-danger " type="submit" value="Cancel" />
                      </div>
      
        
                      <div class="mt-4 pt-2 text-center">
                        <input class="btn btn-success" type="submit" value="Save" />
                      </div>
      
    </div>  
                  </form>
  
</div>              </div>
<div className="col-lg-4"></div>
            </div>

    </div>
)
}

export default MyProfile
