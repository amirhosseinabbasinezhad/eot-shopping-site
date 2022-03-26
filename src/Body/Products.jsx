import Product from "./Product";
import InfiniteCarousel from 'react-leaf-carousel';
function Products() {
    return (<div className="products-slide">
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
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      
    ]}
    dots={false}
    showSides={true}
    sidesOpacity={.5}
    sideSize={0.1}
    slidesToScroll={1}
    slidesToShow={6}
    scrollOnDevice={true}
  >
    <div>
    <Product />
    </div>
    <div>
    <Product />
    </div>
    <div>
    <Product />
    </div>
    <div>
    <Product />
    </div>
    <div>
    <Product />
    </div>
    <div>
    <Product />
    </div>
    <div>
    <Product />
    </div>
    <div>
    <Product />
    </div>
    <div>
    <Product />
    </div>
    </InfiniteCarousel>
    </div>
     );
}

export default Products;