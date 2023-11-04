import { useNavigate } from "react-router-dom";



const Navbar = ()=>{
    let navigate = useNavigate();
    return(
        <div className="navbar">
           <div className="left">
             <span onClick={()=>{navigate('/')}}>Shopping Cart</span>
           </div>

           <div className="right">
              <span onClick={()=>{navigate('/')}}>Home Page</span>
              <span onClick={()=>{navigate('/cart')}}>Cart Page</span>
           </div>
        </div>
    )
}

export default Navbar;