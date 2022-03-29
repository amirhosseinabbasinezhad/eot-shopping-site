import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import iothome from "./iothhh.jpg"

function SignUp(props) {
    return ( <>
     <Modal

show={props.show}
onHide={props.onHide}
size="lg"
backdrop="static"
keyboard={false}
>

<Modal.Header className="modalheder" closeButton>
  <Modal.Title><h3>Sign Up</h3></Modal.Title>
</Modal.Header>
<Modal.Body>

  <div className="d-flex justify-content-between">
  
    <form>
             <div className="form-group">
                 <label>نام</label>
                 <input type="text" className="form-control" placeholder="First name" />
             </div>
             <div className="form-group">
                 <label>نام خانوادگی</label>
                 <input type="text" className="form-control" placeholder="Last name" />
             </div>
             <div className="form-group">
                 <label>ایمیل</label>
                 <input type="email" className="form-control" placeholder="email" />
             </div>
             <div className="form-group">
                 <label>تلفن همراه</label>
                 <input type="number" className="form-control" placeholder="Number" />
             </div>
             <div className="form-group">
                 <label>رمز عبور</label>
                 <input type="password" className="form-control" placeholder="password" />
             </div>
             <button type="submit" className="modolebtn btn btn-primary btn-block">ثبت نام</button>
             <p className="forgot-password text-right">
                 در حال حاضر حسابی دارید <a onClick={props.signin}href="#">ورود؟</a>
             </p>
               <Button variant="secondary" onClick={props.onHide} >
                Close
                </Button>
        </form>
    <img className="modoleImage" src={iothome} alt="" />
  </div>
</Modal.Body>

</Modal>
    
    </> );
}

export default SignUp;