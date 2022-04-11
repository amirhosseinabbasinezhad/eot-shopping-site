import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping ,faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import mylogo from './mylogo.svg'
import Menu from './Menu';
import SearchBar from "./SearchBar";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { useState ,useEffect} from "react";

function Heading(props) {
    const [menuShow,setMenuShow]=useState(true)
    const [lastScrollY,setLastScrollY]=useState(0)
    const controlMenu = () => {
        if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { 
            
            setMenuShow(false); 
          } else { 
            setMenuShow(true);  
          }
    

          setLastScrollY(window.scrollY); 
        }
    }
    
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlMenu);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlMenu);
      };
    }
  }, [lastScrollY]);

        
    return (<>
    <div className={`col-12 ${props.heading}`} >
        <div className="row fr col-12" style={{margin:'0px',padding:'0px', bsGutterX:" 0"}}>
            <div className="col-11">
                <div className="top row">
                    <div className=" left-icons col-3">
                        
                       
                         <FontAwesomeIcon onClick={props.showLogin} className="ficon" icon={faRightToBracket}size="2x"  />
                        
                        
                        <FontAwesomeIcon className="ficon" icon={faCartShopping}size="2x" />
                    </div>
                    <div className="col-2"></div>
                    <div className="searchbar col-5">
                        <SearchBar />
                    </div>
                </div>
                <div className="line-bottom-left" id="line-bottom-left"></div>
            </div>
            
            <div className="mainlogo col-1">
                <img src={mylogo} alt="React Logo" />
            </div>
            {menuShow &&
            <div className="row menu">
                 <Menu onClick={props.onClick}/> 
            </div>}
        </div>
    </div>
        
    </>  );
}

export default Heading;