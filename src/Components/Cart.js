import Navbar from "./Navbar";
import { useSelector,useDispatch } from "react-redux";
import Product from "./Product";
import { resetCart } from "../redux/actions/cartAction";

const Cart =()=>{
    let state = useSelector(state=>state)
    let dispatch = useDispatch();
    
return (
    <div className="cart">
       <Navbar/>
       <h1 style={{textAlign:"center",margin:"10px"}}>My Cart</h1>
      <div className="cart-container">
      <div className="c-container">
            {state.arr.length>0 && state.arr.map((item,index)=>(
                    <Product dispatch={dispatch} key={index} type={"Remove From Cart"} data={item} />
            ))}
            
         </div>
        <div>
        <div className="checkout">
            <p id="heading">Checkout List</p>

            {state.arr.length>0 && state.arr.map((item,index)=>(
                  <div key={index} className="div"><p>1. {item.title}</p>
                  <p>${item.price}</p></div>
            ))}

            <hr/>

            <div className="div"><p id="total">Total</p>
            <p>${state.total}</p></div>

            <hr/>

            <div id="button"><button onClick={()=>{dispatch(resetCart())}} >Click To Checkout</button></div>
        </div>
        </div>
        
      </div>
    </div>
)
}

export default Cart;