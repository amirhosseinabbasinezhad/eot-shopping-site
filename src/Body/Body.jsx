
import ProductBoxes from "./SlidersPage/ProductBoxes";
import Servises from "./servises";
import ImgSlidr from './SlidersPage/ImgSlider'
import Product from "./ShowProduct/product";
import React ,{useState,useEffect} from "react";
function Body() {
    const [curentProduct ,setCurentProduct]=useState(0)
    const [products ,setProducts]=useState([]);
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    },[curentProduct])
    useEffect(()=>{
   
        fetch("http://localhost:8000/products")
        .then(res=>res.json())
        .then(response=>{setProducts(response)})
       
    },[])

    const showcurentproduct=async (e)=>{
        setCurentProduct(e.target.id)
    }
    return ( <>
        {!products.length ?
        <h4>loading ...</h4> :
        <div className="col-12 Main-Body">
        {curentProduct===0 ? <>
            <ImgSlidr />
        <div className="Products">
        
        <ProductBoxes clickedProduct={(e)=>showcurentproduct(e)} products={products} />
        </div>
        <div className="services">
        <Servises />
        </div></> :
        <Product clickedProduct={(e)=>setCurentProduct(e.target.id)} Similarproducts={products} product={products[curentProduct-1]}/>}

    </div>}
    </> );
}

export default Body;