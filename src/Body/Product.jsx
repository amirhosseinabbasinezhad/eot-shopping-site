import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col'

import productone from './smart-socket.jpg'

function Product() {
    return (<>
<div class="contentbox1">
      <header>
        <figure>
          <a href="#"><img src={productone} alt="one"/></a>
          <a href="#"><h2>پریز هوشمند</h2></a>
        </figure>
      </header>
      <div class="pricebox">
        250000 تومان
      </div>
      <a href="#" class="add_to_cart"><i class="fas fa-shopping-cart"></i></a>
    </div>

    </>  );
}

export default Product;