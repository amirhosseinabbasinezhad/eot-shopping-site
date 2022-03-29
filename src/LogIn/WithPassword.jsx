
import { Button } from "react-bootstrap";
function WithPassword(props) {

    return ( <>
    
  <form>
  
  <div className="form-group">
      <label>نام کاربری</label>
      <input type="text" className="form-control" placeholder="Username" />
  </div>
  <div className="form-group">
      <label>رمز عبور</label>
      <input type="password" className="form-control" placeholder="password" />
  </div>
  <div className="form-group">
  </div>
  <button type="submit" className="modolebtn btn btn-primary btn-block">ورود</button>
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