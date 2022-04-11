import Heading from "./Heading/Heading";
import Side from "./SideBar/Side";
import Body from "./Body/Body";
import React, { useState } from 'react';
import './Heading/styleHeading.css';
import './SideBar/styleSidebar.css';
import './Body/SlidersPage/styleProduct.css';
import LogIn from "./LogIn/LogIn";
function Content() {
  //login
  const [logInPage,setLogInPage]=useState(false)
  const [userName,setUserName]=useState("");
  const [passWord,setPassWord]=useState("");
  const [localuser,setLocaluser]=useState("");
  async function checkUser(event) {
      if ((userName.length>4&&passWord.length>8)||(userName.includes("admin")&&passWord.includes("admin"))) {
      fetch(`http://localhost:3001/users?userName=${userName}&Password=${passWord}`)
      .then(res=>res.json())
      .then(res=>setLocaluser(res))
      }
      event.preventDefault();
   }
   function logIn(){
    setLogInPage(true)
    
  }
  function userinput(event){
    if(event.target.id==="username") setUserName(event.target.value)
    else if(event.target.id==="password") setPassWord(event.target.value)
  }
  //sdide
  const [showSide,setShowSide]=useState(false)
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

 
  return (
   <>
   <div className="col-12">
      {logInPage ? <LogIn userinput={(event)=>userinput(event)} checkUser={(event)=> checkUser(event)} show={logInPage} onHide={() => setLogInPage(false)} /> : <></>}
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
