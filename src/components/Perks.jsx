import React from 'react'

function Perks({selected,onChange}) {
        const handlecbClick=(e)=>{
                console.log(e.target.name);
                // onChange([...selected,name])
                const {checked,name} = e.target
                if(checked){
                        onChange([...selected,name])
                }
                else{
                        onChange([...selected.filter(selectedName=>selectedName!==name)])
                }
        }
  return (
    <div>
                    <div class="row mt-2">
                <div class="col-12">
                    <p className='fw-bolder '>select all Perks</p>
<div className=''>
<div className='row d-flex flex-row justify-content-center align-items-center'>
    <label className='ms-3 border rounded p-2 col-lg-4'>
            <input type="checkbox" name="tcharge" onChange={handlecbClick}/>
            <span> Transportation charge</span>
        
    </label>
    <label className='ms-3 border rounded p-2 col-lg-5'>
            <input type="checkbox" name="notcharge" onChange={handlecbClick}/>
            <span> No Transportation charge</span>
        
    </label>
    
</div>
<div className='row d-flex flex-row justify-content-center align-items-center mt-2'>
    <label className='ms-3 border rounded p-2 col-lg-4'>
            <input type="checkbox" name="advance" onChange={handlecbClick}/>
            <span> Need Advance payment</span>
        
    </label>
    <label className='ms-3 border rounded p-2 col-lg-5'>
            <input type="checkbox" name="noadvance" onChange={handlecbClick}/>
            <span> No advance payment</span>
        
    </label>
    
</div>



</div>

                </div>
              </div>

    </div>
  )
}

export default Perks
