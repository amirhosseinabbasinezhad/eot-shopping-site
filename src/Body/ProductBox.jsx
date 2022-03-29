import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import productone from './images/smart-socket.jpg'

function ProductBox() {
    return (<>
<div className="contentbox1">
      <header>
        <figure>
          <a href="#"><img src={productone} alt="one"/></a>
          <a href="#"><h2>پریز هوشمند</h2></a>
        </figure>
      </header>
      <div className="pricebox">
        250000 تومان
      </div>
      <FontAwesomeIcon className="addicon" icon={faCartPlus}size="3x" />
    </div>

    </>  );
}

export default ProductBox;