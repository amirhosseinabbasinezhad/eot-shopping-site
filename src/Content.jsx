import Heading from "./Heading/Heading";
import Side from "./SideBar/Side";
import Body from "./Body/Body";
import React, { useState } from 'react';
import './Heading/styleHeading.css';
import './SideBar/styleSidebar.css';
import './Body/styleProduct.css';
import LogIn from "./LogIn/LogIn";
function Content() {
  const [showSide,setShowSide]=useState(false)
  const [logInPage,setLogInPage]=useState(false)
  const [logedin,setLogedin]=useState(false)
  
  function openNav(){
      if (showSide===false) {
          setShowSide(true)
          document.getElementById("line-bottom-right").style.marginLeft = "480px";
          document.getElementById("main").style.marginRight = "250px";
      }
      else if (showSide===true) {
          setShowSide(false)
          document.getElementById("line-bottom-right").style.marginLeft = "712px";
          document.getElementById("main").style.marginRight = "0";
      }
  }
  function closeNav(){
    setShowSide(false)
    document.getElementById("line-bottom-right").style.marginLeft = "712px";
    document.getElementById("main").style.marginRight = "0";
  }
  function logIn(){
    setLogInPage(true)
    
  }
  return (
   <>
   <div className="col-12">
      {logInPage ? <LogIn  show={logInPage} onHide={() => setLogInPage(false)} /> : <></>}
      <div>
        <div id="main">
          <Heading onClick={openNav} showLogin={logIn} logedin={logedin} />
          <Body />
        </div>
        {showSide && <Side onClick={closeNav} />}
      </div>
   </div>
   </>
  );
}

export default Content;
