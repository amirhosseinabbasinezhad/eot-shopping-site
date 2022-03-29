import InfiniteCarousel from 'react-leaf-carousel';
import googleHome1 from './images/googlehome.png';
import googleHome2 from './images/homegoogle.png';
import googleHome3 from './images/googleassistant.png';
import alexa from './images/alexa.png';
function ImgSlidr() {
  return (<div className="image-slide">
    <InfiniteCarousel
  dots={true}
  showSides={true}
  sidesOpacity={0}
  sideSize={0}
  slidesToScroll={1}
  slidesToShow={1}
  scrollOnDevice={true}
  autoCycle={true}
>
  <div>
    <img src={googleHome1} alt="" />
  </div>
  <div>
    <img src={googleHome2} alt="" />
  </div>
  <div>
    <img src={googleHome3} alt="" />
  </div>
  <div>
    <img src={alexa} alt="" />
  </div>
  </InfiniteCarousel>
  </div>
   );
}

export default ImgSlidr;