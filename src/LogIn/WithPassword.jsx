import React ,{useState} from "react";
import { Button } from "react-bootstrap";
function WithPassword(props) {

    return ( <>
    
  <form>
  {{props.localuser}?<h3 style={{color:"green"}}>ورود موفق</h3> : <></>}
  <div className="form-group">
      <label>نام کاربری</label>
      <input type="text" className="form-control" placeholder="Username" id="username" onChange={(event)=>props.userinput(event)} />
  </div>
  <div className="form-group">
      <label>رمز عبور</label>
      <input type="password" className="form-control" placeholder="password" id="password" onChange={(event)=>props.userinput(event)} />
  </div>
  <div className="form-group">
  </div>
  <button type="submit" className="modolebtn btn btn-primary btn-block" onClick={(event)=>props.checkUser(event)}>ورود</button>
  <p className="forgot-password text-right">
      فراموشی <a onClick={props.fPass}href="#">رمزعبور؟</a>
  </p>
  <Button variant="secondary" onClick={props.onHide} >
Close
</Button>
<Button onClick={props.signup}variant="primary">ثبت نام</Button>
</form>
    </> );
}

export default WithPassword;