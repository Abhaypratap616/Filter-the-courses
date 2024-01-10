import React from 'react'
import '../component/Filter.css'
function Filter(props) {
   const anmol = props.filterprops;
   const category = props.category;
   const setcategory = props.setcategory;

   function handlerfunction(item){
    setcategory(item);
   }
  return (
    <div className='btnmain'>
      {
        anmol.map((item)=>{
          return(
            <button className='btn-1' onClick={()=>handlerfunction(item.title)}>{item.title}</button>
          )
        })
      }
    
      
    

     
    </div>
  )
}

export default Filter
