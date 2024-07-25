import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import shopbag from '../Assets/shopbag.png'
import cartIcon from '../Assets/cart-icon.png'

export const Navbar = () => {
    const[menu,setMenu]=useState("buy");
  return (
    <div className='navbar'>
        <div className='navbag'>
            <img src={shopbag} alt="" className='shopbag'/>
            <p>GO SHOP NOW</p>
        </div>
        
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("buy")}}><Link style={{textDecoration:'none'}} to='/'>Buy</Link> {menu==="buy"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
    
<div className='nav-cart'>
<Link to='/login'><button>Login</button></Link>
<Link to='/cart'><img src={cartIcon} alt="" className='cartIcon'/></Link>
    <div className='nav-cart-count'>0</div>

</div>
    </div>
  );
};
