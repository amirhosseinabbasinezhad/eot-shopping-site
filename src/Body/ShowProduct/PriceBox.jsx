import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function PriceBox(props) {
    
    function addToCart(e) {
    
        localStorage.setItem("cart",JSON.stringify(e.target.id));
        
      }
    return (<>
            <Row>
                    <Col xl={11} lg={11}>
                    <h5>ارسال رایگان</h5>
                    <h5> یک سال گارانتی</h5>
                    <h5>یک هفته مهلت تست</h5>
                    </Col>
                    </Row>
                        <Row>
                            <Col xl={5} lg={5}>
                            <h3>{props.price}</h3>
                            </Col>
                            <Col xl={6} lg={6}>
                            <h3>قیمت</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xl={11} lg={11}>
                            <div className="d-grid gap-2">
                            <Button onClick={(e)=>addToCart(e)} id={props.id} className="addcartbtn"size="lg" variant="outline-danger"> افزودن به سبد خرید</Button>
                            </div>
                            </Col>
                        </Row>
    </>  );
}

export default PriceBox;