import React, { useState } from 'react'
import './Text.css';
function Text() {
      const [isVisible , setshowtext] = useState(false)
   
      
      const togglevisibilty = ()=>{
       
          setshowtext(prevState => !prevState)
        
      }
  return (
    <div>
      {/* <button id='details' onClick={togglevisibilty} >
        {isVisible ? "hide" :"show" } Details
        </button>
       {isVisible && <p id='para-details' >This is the text that can be shown or hidden!</p>}  */}
        <input id='Password-feild' type={isVisible ? "text" : "password"  } placeholder='Enter password' /> 
        <button  id='togglebutton' onClick={togglevisibilty} > {isVisible ? "hide" : "show" } password </button> 
       
    </div>
  )
}

export default Text 