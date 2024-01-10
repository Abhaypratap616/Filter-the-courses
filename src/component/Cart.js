import React from 'react'
import '../component/Cart.css';

export default function Cart(props) {
  return (
   <div className='fullcart'>
    <div className='imgsize'>
      <img src={ props.cartprops.image.url} alt="" />
    </div>

<div className="title">
  <h4>{props.cartprops.title}</h4>
  <p>{props.cartprops.description}</p>
</div>

    </div>
  )
}
