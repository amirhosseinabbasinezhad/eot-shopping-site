
import ProductBoxes from "./Products";
import Servises from "./servises";
import ImgSlidr from './ImgSlider'
function Body() {
    return ( <>
    <div className="col-12 Main-Body">
        <ImgSlidr />
        <div className="Products">
        
        <ProductBoxes />
        </div>
        <div className="services">
        <Servises />
        </div>

    </div>
    </> );
}

export default Body;