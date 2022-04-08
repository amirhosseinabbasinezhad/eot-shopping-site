import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ProductBox(props) {
    return (<>
<div className="contentbox1"id={props.product.id} onClick={(e)=>{props.clickedproduct(e)}}>
      <header>
        <figure>
          <img src={props.product.imagesrc} id={props.product.id} alt="product"/>
          <h2 className="text"id={props.product.id}>{props.product.title}</h2>
        </figure>
      </header>
      <div className="pricebox" id={props.product.id}>
        {props.product.price}
      </div>
      <FontAwesomeIcon dkp="11226" className="addicon" icon={faCartPlus}size="3x" />
    </div>

    </>  );
}

export default ProductBox;