

//Components
import ProductBoxes from "../SlidersPage/ProductBoxes"

//style
import "./productpage.css";
//bootsrap

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PriceBox from "./PriceBox";
import InfoBox from "./InfoBox";
import ImgBox from "./ImgBox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
    return (<>
    <Container fluid>
    <div className="productBody Main-Body">
        
        <Row>
            <Col xl={3} lg={3}>
            <FontAwesomeIcon  className="backicon" icon={faArrowLeft}  size="2x"/>
                <div className="price">
                    <PriceBox id={props.product.id} price={props.product.price}/>
                </div>
            </Col>
            <Col xl={5} lg={5}>
                <InfoBox info={props.product}/>
            </Col>
            <Col xl={3}lg={3}><ImgBox image={props.product.imagesrc}/></Col>
            <Col xl={1} lg={1}> </Col>
        </Row>
        <Row>
        <hr></hr>
            <ProductBoxes clickedProduct={(e)=>props.clickedProduct(e)} products={props.Similarproducts}/>
        </Row>
    </div>
    </Container>

    
    </>  );
}

export default Product;