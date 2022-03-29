import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import iothome from "./iothome2.jpg"
import WithPassword from "./WithPassword";
import PasswordForget from "./PasswordForget"
function SignIn(props) {
  const [forgetpass ,setForgetPass]=useState(false);
  function forgetPass (){
    setForgetPass(true)
  }
    return ( <>
     <Modal

onHide={props.onHide}
show={props.show}
size="lg"
backdrop="static"
keyboard={false}
>

<Modal.Header className="modalheder" closeButton>
  <Modal.Title><h3>Sign In</h3></Modal.Title>
</Modal.Header>
<Modal.Body>

  <div className="d-flex justify-content-between">
      {forgetpass ? <PasswordForget onHide={props.onHide} /> : <WithPassword onHide={props.onHide} signup={props.signup} fPass={forgetPass}/>}
      
      
    <img className="modoleImage" src={iothome} alt="" />
  </div>
</Modal.Body>

</Modal>
    
    </> );
}

export default SignIn;