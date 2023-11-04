
import { addToCart,removeFromCart} from '../redux/actions/cartAction';


const Product = ({dispatch,type,data})=>{
    
  function HandleCart(){
      if(type==="Add To Cart"){
       dispatch(addToCart(data));
      }
      else{
        dispatch(removeFromCart(data));
      }
       //console.log(state)
  }

    return (
        <div className="product" id={data.id}>
        <img src={data.thumbnail} alt='img'/>
        <p>Title : {data.title}</p>
        <p>Price : ${data.price}</p>
        <button onClick={HandleCart}>{type}</button>
      </div>
    )
}

export default Product;