import React, { useContext } from 'react'
import './CSS/CategoryItem.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item/Item';


export const CategoryItem = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='Category-Item'>
      <div className='shopcategory-indexshort'>
        <p>
          <span> Showing 1-8  </span>out of 24 products

       
        </p>
       
       
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){

            return <Item key={i}
            id={item.id}
             name={item.name}
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}></Item>

          else{
            return null;
          }
        })}
      </div>

    </div>
  )
}

