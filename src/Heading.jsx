import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser ,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import mylogo from './mylogo.svg'
import Menu from './Menu';
import SearchBar from "./SearchBar";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

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
                    <div className="col-2"></div>
                    <div className="searchbar col-5">
                        <SearchBar />
                    </div>
                </div>
                <div className="line-bottom-right" id="line-bottom-right"></div>
            </div>
            
            <div className="mainlogo col-1">
                <img src={mylogo} alt="React Logo" />
            </div>
            <div className="row menu">
                <Menu onClick={props.onClick}/>
            </div>
        </div>
    </div>
        
    </>  );
}

export default Heading;