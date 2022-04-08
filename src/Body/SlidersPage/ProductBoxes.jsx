import ProductBox from "./ProductBox";
import InfiniteCarousel from 'react-leaf-carousel';

function ProductBoxes(props) {
  function showProducts(product){
      return <div  key={product.id}><ProductBox clickedproduct={(e)=>{props.clickedProduct(e)}} product={product}/></div>
  }
    return (<div className="products-slidee">
      <h3>محصولات</h3>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
    dots={false}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={1}
    slidesToShow={5}
    scrollOnDevice={true}
  > 
      {props.products.map(showProducts)}
    </InfiniteCarousel>
    </div>
     );
}

export default ProductBoxes;