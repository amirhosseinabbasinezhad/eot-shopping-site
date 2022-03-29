
import { Button } from "react-bootstrap";
function PasswordForget(props) {

    return ( <>
    
  <form>
  
  <div className="form-group">
      <label>تلفن همراه</label>
      <input type="number" className="form-control" placeholder="Phone Number" />
  </div>
  <div className="form-group">
      <label>رمز عبور جدید</label>
      <input type="password" className="form-control" placeholder="New password" />
  </div>
  <div className="form-group">
  </div>
  <button type="submit" className="modolebtn btn btn-primary btn-block">ورود</button>

  <Button className="modolebtn" variant="secondary" onClick={props.onHide} >
Close
</Button>
</form>
    </> );
}

export default PasswordForget;