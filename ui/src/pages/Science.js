import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";import News from '../components/News';
import LoadingBar from 'react-top-loading-bar'

const Science = ({country}) => {
  const navigate =useNavigate();

  const callAuth = async () => {
    try { 
      const res = await fetch("/science", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      const data = await res.json();
      console.log(data);
      if(!res.status === 200){
        const error = new Error(res.error)
        throw error;
      }else{
        navigate('/health')
      }
    } catch (err) {
      console.log(err);
      navigate('/login');  
 
    }
  };
  useEffect(() => { 
    callAuth();
  });
  const pageSize = 5;
  const [progress, setProgress] = useState(0)
  
  return (
    <div>
      <LoadingBar
        height={3}
        color='#FFFFFF'
        progress={progress} 
      />
      <News setProgress={setProgress} key="science" pageSize={pageSize} country={country}category="science"/>
    </div>
  )
}

export default Science
