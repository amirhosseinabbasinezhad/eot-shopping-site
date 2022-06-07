import Heading from "./Heading/Heading";
import Side from "./SideBar/Side";
import Body from "./Body/Body";
import React, { useState } from 'react';
import './Heading/styleHeading.css';
import './SideBar/styleSidebar.css';
import './Body/SlidersPage/styleProduct.css';
import LogIn from "./LogIn/LogIn";
function Content() {
  const [showSide,setShowSide]=useState(false)
  const [logInPage,setLogInPage]=useState(false)
  const [heading,setHeading]=useState("header")
  function openNav(){
      if (showSide===false) {
          setShowSide(true)
          setHeading("leftheder")
          document.getElementById("line-bottom-left").style.marginLeft = "480px";
          document.getElementById("main").style.marginRight = "250px";
          document.querySelector(".image-slide").style.marginTop = "0";
  
      }
      else if (showSide===true) {
          setShowSide(false)
          setHeading("header")
          document.getElementById("line-bottom-left").style.marginLeft = "701px";
          document.getElementById("main").style.marginRight = "0";
          document.querySelector(".image-slide").style.marginTop = "140px";
          
      }
  }
  function closeNav(){
    setShowSide(false)
    setHeading("header")
    document.getElementById("line-bottom-left").style.marginLeft = "701px";
    document.getElementById("main").style.marginRight = "0";
    document.querySelector(".image-slide").style.marginTop = "140px";
    
  }
  function logIn(){
    setLogInPage(true)
    
  }
 
  return (
   <>
   <div className="col-12">
      {logInPage ? <LogIn show={logInPage} onHide={() => setLogInPage(false)} /> : <></>}
      <div>
        <div id="main">
          
          <Heading heading={heading} onClick={openNav} showLogin={logIn} />
          
          <Body />
        </div>
        {showSide && <Side onClick={closeNav} />}
      </div>
   </div>
   </>
  );
}

export default Content;
