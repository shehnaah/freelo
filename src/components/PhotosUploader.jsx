import axios from 'axios';
import React, { useState } from 'react'
function PhotosUploader({photo,onChange}) {
    const [photolink,setPhotolink] = useState('')

    async function addPhotoByLink(ev) {
        ev.preventDefault();
        const {data:filename} = await axios.post('/upload-by-link', {link: photolink});
        // onChange(prev => {
        //   return [...prev, filename];
        // });
        onChange(prev=>{
            return[...prev,filename]
        })
        console.log(filename);
        
        setPhotolink('')
        // console.log(photolink );
      }
    
      function uploadPhoto(ev) {
        const files = ev.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
          data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
          headers: {'Content-type':'multipart/form-data'}
        }).then(response => {
          const {data:filenames} = response;
          onChange(prev => {
            return [...prev, ...filenames];
          });
        })
      }

  return (
    <div>
                    <div class="row">
                <div className="col-md-6 mb-2">

                  <div className="form-outline">
                    <input type="text" id="phtolink" class="form-control form-control-lg shadow" placeholder='Add using a link' value={photolink} onChange={e=>setPhotolink(e.target.value)} />
                  </div>

                </div>
                <div className="col-md-6 mb-2">

                  <div className="form-outline">
                    <button  id="addphoto" className="form-control form-control-lg shadow btn btn-primary" onClick={addPhotoByLink}>Add Photo</button>
                  </div>

                </div>
              </div>
                  <div className=' border row row-cols-auto rounded shadow fs-5 text-center p-3 align-items-center'>
                    {photo.length > 0 && photo.map(link =>(
                        <div className='col-lg-3 mt-2' key={link}>
                            <img src={'http://localhost:4000/uploads/'+link} alt="" className='rounded '/>
                        </div>
                        
                        
                    ))}
<input type='file' multiple className='hidden rounded border col-lg-3 text-align-center mt-2 ms-2 btn btn-primary bg-primary' style={{height:"40px",borderRadius:'20px',overflow:'hidden'}} onChange={uploadPhoto}/>
<div className=''>
        <i class="fa-solid fa-cloud-arrow-up  p-1 "></i><span className=''>Browse</span>
    
</div>

   
</div>              

    </div>
  )
}

export default PhotosUploader
