import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import { useLocation } from 'react-router-dom';

function Home() {
  const[display,setdisplay]=useState('block');
  const location=useLocation();
  useEffect(()=>{
    
        if(location.pathname==='/login'|| location.pathname==='/signup'||location.pathname==='/Recipes'){
            setdisplay('none');
        console.log(location.pathname);
      }
  },[location.pathname])
  

  return (
    <div style={{ display:display }}>
      <Navbar/>
    </div>
  );
}

export default Home;
