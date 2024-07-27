import React from 'react'
import './Item.css'

const  Item = (props) => {
<<<<<<< HEAD
  
=======
>>>>>>> 72af270e7e7491f6b368eab073373b4bf4ffc4e9
  return (
    <div className='item'>
    <img src={props.image} alt='' className='image'></img>
    <p>{props.name}</p>
    <div className='item-prices'>
      <div className='item-price-new'>
${props.new_price}
      </div>
    </div>
    <div className='item-price-old'>
${props.old_price}
    </div>
    
    </div>
  )
}
export default Item