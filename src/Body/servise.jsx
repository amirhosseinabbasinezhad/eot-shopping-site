import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import service from './images/services.png'

function Servise() {
    return (<>
<div className="services">
        <img src={service} alt="" />
</div>
    </>  );
}

export default Servise;