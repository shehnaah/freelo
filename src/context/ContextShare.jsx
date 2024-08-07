import React, { createContext, useState } from 'react'
export const addProfileResponseContext = createContext()
export const editProfileResponseContext = createContext()

function ContextShare({ children }) {
  const [addprofileResponse, setAddprofileResponse] = useState({})
  const [editprofileResponse, setEditprofileResponse] = useState({})
  return (
    <>
      <addProfileResponseContext.Provider value={{ addprofileResponse, setAddprofileResponse }}>
        <editProfileResponseContext.Provider value={{ editprofileResponse, setEditprofileResponse }}>
          {children}
        </editProfileResponseContext.Provider>
      </addProfileResponseContext.Provider>
    </>
  )
}

export default ContextShare