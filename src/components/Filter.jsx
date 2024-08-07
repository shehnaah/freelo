import React from 'react'

function Filter({handleInputChange,handleLocation}) {
  return (
    <div>
                    <div className="">
                    <div className='card shadow'>
                    <div className='d-flex  mt-3 fs-2 ms-3'>
                        <i class="fa-solid fa-filter text-primary mt-2 me-2"></i>Filter
</div>                    
<div className='d-flex flex-column justify-content-center align-items-center mt-3 mb-4'>
                        <input type="text" placeholder="Profession" className="me-2 mb-2 p-4" style={{width: "250px",borderRadius: "8px",height:" 10px",background: "transparent",border: ".2px solid gray"}} onChange={handleInputChange}/>
                        <input type="text" placeholder="Location" className="me-2 p-4 mb-2" style={{width: "250px",borderRadius: "8px",height:" 30px",background: "transparent",border: ".2px solid gray"}} onChange={handleLocation}/>

                            <button className="btn-search btn btn-primary  me-4 " >Search</button>
    
                    </div>
                    </div>
                </div>

    </div>
  )
}

export default Filter
