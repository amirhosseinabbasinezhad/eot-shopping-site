
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars } from "@fortawesome/free-solid-svg-icons";
function Menu(props) {
    return ( <>
        <div className="col-11">
            <ul>
            <li><a href="#">صفحه اصلی</a></li>
            <li><a href="#">صفحه اصلی</a></li>
            <li><a href="#">صفحه اصلی</a></li>
            <li><a href="#">صفحه اصلی</a></li>
            </ul>
        </div>
        <div className="col-1">
            <div className="openbtn" onClick={props.onClick}>
                <FontAwesomeIcon icon={faBars} size="xl" />
            </div>
        </div>
    
    </> );
}

export default Menu;