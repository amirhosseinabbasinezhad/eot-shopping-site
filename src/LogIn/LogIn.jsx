import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";
function LogIn(props) {
    const [hasAcc ,setHasAcc]=useState(true)
    function signUpMode(){
      setHasAcc(false)
    }
    function signInMode(){
      setHasAcc(true)
    }
    
    return (<>
    {hasAcc
     ? <SignIn show={props.show} onHide={props.onHide} signup={signUpMode}/>
     : <SignUp show={props.show} onHide={props.onHide} signin={signInMode} />}
     
    
    </>  );
}

export default LogIn;