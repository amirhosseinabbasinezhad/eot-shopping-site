import Heading from "./Heading";
import Side from "./Side";
import React, { useState} from 'react';

function Content() {
  const [showSide,setShowSide]=useState(false)
  function openNav(){
      if (showSide===false) {
          setShowSide(true)

      }
      else if (showSide===true) {
          setShowSide(false)
      }
  }
  function closeNav(){
    setShowSide(false)
  }
  return (
   <>
   <div className="col-12">
   <Heading onClick={openNav}/>
   {showSide && <Side onClick={closeNav} />}
   </div>
   </>
  );
}

export default Content;
