function ImgSlidr() {
    return ( <>
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    </> );
}

export default ImgSlidr;