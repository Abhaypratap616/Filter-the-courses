
import './App.css';
import Carts from './component/Carts';
import Filter from './component/Filter';
import {filterData,apiUrl} from './Data';
import { useState,useEffect } from 'react';
function App() {
  const [dataab,setdataab] = useState([]);
  const [category,setcategory]= useState(filterData[0].title);
 async function getdata(){
  try{
    const response = await fetch(apiUrl);
    const datamn = await response.json();
    console.log(datamn);
    setdataab(datamn.data);
  }
  catch(error){
    console.log(error);
  }
 }

 useEffect(()=>{
  getdata();
 }
  ,[])
  return (
    <div>
      <div className='headingmain'>
        <h1 className='heading'>TOP COURSE</h1>
      </div>
      <Filter filterprops = {filterData} category={category} setcategory={setcategory} ></Filter>
      <Carts apiUrlprops ={dataab} category={category} setcategory={setcategory} ></Carts>
    </div>
  );
}

export default App;
