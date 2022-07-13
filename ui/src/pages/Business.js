import React, { useState, useEffect } from "react";
import News from "../components/News";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";

const Business = (props) => {
  const navigate = useNavigate();

  const callAuth = async () => {
    try { 
      const res = await fetch("/business", {
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
        navigate('/business')
      }
    } catch (err) {
      console.log(err); 
      navigate('/login');  
 
    }
  };
  useEffect(() => { 
    callAuth();
  });

  

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <LoadingBar height={3} color="#FFFFFF" progress={progress} />
      <News
        setProgress={setProgress}
        
        country={props.country}
        category="business"
      />
    </div>
  );
};

export default Business;
