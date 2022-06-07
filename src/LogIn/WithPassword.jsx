import React ,{useState} from "react";
import { Button } from "react-bootstrap";
function WithPassword(props) {
    const [userName,setUserName]=useState("");
    const [passWord,setPassWord]=useState("");
    const [localuser,setLocaluser]=useState("");
    async function checkUser(event) {
        if ((userName.length>4&&passWord.length>8)||(userName.includes("admin")&&passWord.includes("admin"))) {
        fetch(`http://localhost:3001/users?userName=${userName}&Password=${passWord}`)
        .then(res=>res.json())
        .then(res=>setLocaluser(res))
        }
        setTimeout(props.onHide,3000)
        event.preventDefault();
     }
    return ( <>
    
  <form>
  {localuser?<h3 style={{color:"green"}}>ورود موفق</h3> :<h6 style={{float:"right"}}>نام کاربری و رمز عبور درست را وارد کنید</h6>}
  <div className="form-group">
      <label>نام کاربری</label>
      <input type="text" className="form-control" placeholder="Username" onChange={(event)=>setUserName(event.target.value)} />
  </div>
  <div className="form-group">
      <label>رمز عبور</label>
      <input type="password" className="form-control" placeholder="password" onChange={(event)=>setPassWord(event.target.value)} />
  </div>
  <div className="form-group">
  </div>
  <button type="submit" className="modolebtn btn btn-primary btn-block" onClick={(event)=>checkUser(event)}>ورود</button>
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