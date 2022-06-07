import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import React,{useState,useEffect} from 'react';
  function ProductBox(props){
    return (<>
<div className="contentbox1"id={props.product.id} >
      <header>
        <figure>
          <img src={props.product.imagesrc} id={props.product.id} alt="product" onClick={(e)=>{props.clickedproduct(e)}}/>
          <h2 className="text"id={props.product.id} onClick={(e)=>{props.clickedproduct(e)}}>{props.product.title} </h2>
        </figure>
      </header>
      <div className="pricebox" id={props.product.id}>
        {props.product.price}
      </div>
      
    </div>

    </>  );
}

export default ProductBox;