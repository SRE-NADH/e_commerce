import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { useSelector,useDispatch } from "react-redux";



const Home=()=>{

    let dispatch = useDispatch();
    
    let state = useSelector(state=>state);
   
    console.log(state)

    const [Products,setProducts] = useState([]);

    async function fetchProduct(){
        try{
        let response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setProducts(response.data.products);
        }
        catch(error){
            window.alert(error.message);
        }
    }

useEffect(()=>{
    fetchProduct();
    console.log(1);
},[])


    return( 
        <div className="home">
           <Navbar/>
           <h1 style={{textAlign:"center",margin:"10px"}}>All Items</h1>
           <div className="container">
            {Products.length>0 && Products.map((item,index)=>(
                    <Product dispatch={dispatch} state={state} key={index} type={"Add To Cart"} data={item} />
            ))}
            
           </div>
        </div>
    )
}


export default Home;