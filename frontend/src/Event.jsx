import React from 'react'

function Event() {
    const handleClick =()=> {
        console.log("Login Button Clicked");
    }
  return (
    <>
    <button onClick={handleClick}>Login</button>

     <button onClick={()=>console.log("Register Button Clicked")}>Register</button>
    </>
  )
}

export default Event;