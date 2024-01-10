
import Cart from '../component/Cart';
import React from 'react';

export default function Carts(props) {
  let dataabhay = props.apiUrlprops
  console.log(dataabhay);

  
  function getdata(){
    if(props.category === 'All'){
      let newarray = [];
      Object.values(dataabhay).forEach(array=>{
        array.forEach(mmarray=>{
          newarray.push(mmarray);
          console.log(newarray);
        })
      })
      return newarray;
    }
    else{
      return dataabhay[props.category];
    }
    
  }
  return (
    <div>
     {
      getdata().map((item)=>{
        return(
          <Cart key={item.id} cartprops={item}></Cart>
         
        )
      })
     }
     
    </div>
  )
}
