import { faUser ,faCartShopping,faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleHeading.css';
function Heading(props) {
    return (<>
        <div className="row">   
            <div className="col-3 user-cart">
                <FontAwesomeIcon className="ficon" icon={faUser}size="2x" />
                <FontAwesomeIcon className="ficon" icon={faCartShopping}size="2x" />
                <div class="searchbar">
                <form>
                    <input type="text" name="search" value="" placeholder="مثلا : قاب آیفون"/>
                    <button type="button" name="button"><i class="fas fa-search"></i></button>
                </form>
                </div>
            </div>
            <div className="col-3 storename">my store</div>
            <div className="col-3">
                <button className="openbtn" onClick={props.onClick}>
                <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    </>  );
}

export default Heading;