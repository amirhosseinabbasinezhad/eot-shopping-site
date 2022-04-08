
//fontawsome
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//mycomponents
import TableProduct from "./TableProduct"
//fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function InfoBox(props) {
    function createContentText(content){
        return(
             <div key={content.key} ><h4 > {content.text} </h4><br/></div>
        )
    }

    return ( <>
    <h2 className='title'>{props.info.title}</h2><br />
            <hr></hr>
            <div className="rate">
                        <Row>
                        <Col xl={8}></Col>
                        <Col >
                        <h6>دیدگاه</h6>
                        <h6>12</h6>
                        </Col>
                        <Col >
                        <h6>پرسش</h6>
                        <h6>15</h6>
                        </Col>
                        <Col >
                        <Row>


                        <FontAwesomeIcon className="staricon" icon={faStar}size="lg" />
                        <h6>4.56/5</h6>
                        </Row>
                        </Col>
                        </Row>

                    </div>
            <hr></hr>
            <div className='contenttext'>{props.info.content.map(createContentText)}</div>

            <hr></hr>
            <TableProduct table={props.info.tableinfo}/>
            </> );
}

export default InfoBox;