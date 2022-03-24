import { faUser ,faCartShopping,faBars } from "@fortawesome/free-solid-svg-icons";
import mylogo from './mylogo.svg'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './styleHeading.css';
function Heading(props) {
    return (<>
    <div className="header col-12" >
        <div className="row fr col-12" style={{margin:'0px',padding:'0px', bsGutterX:" 0"}}>
            <div className="col-11">
                <div className="top row">
                    <div className=" left-icons col-2">
                        <FontAwesomeIcon className="ficon" icon={faUser}size="2x" />
                        <FontAwesomeIcon className="ficon" icon={faCartShopping}size="2x" />
                    </div>
                    <div className="searchbar col-8">
                        <form action="#">
                            <input type="text" />
                            <Button variant="primary">Primary</Button>
                        </form>
                    </div>
                </div>
                <div className="line-bottom-right"></div>
            </div>
            
            <div className="mainlogo col-1">
                <img src={mylogo} alt="React Logo" />
            </div>
            <div className="row menu">
                <div className="col-11">
                    <ul>
                        <li>صفحه اصلی</li>
                        <li>صفحه اصلی</li>
                        <li>صفحه اصلی</li>
                        <li>صفحه اصلی</li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="openbtn" onClick={props.onClick}>
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </>  );
}

export default Heading;