import Heading from "./Heading";
import Side from "./Side";
import React, { useState} from 'react';

function Content() {
  const [showSide,setShowSide]=useState(false)
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
  return (
   <>
   <div className="col-12">
    <div id="main">
      <Heading onClick={openNav} />
    </div>
    {showSide && <Side onClick={closeNav} />}
   </div>
   </>
  );
}

export default Content;
