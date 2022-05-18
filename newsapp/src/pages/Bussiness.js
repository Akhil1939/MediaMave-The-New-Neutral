import React, { useState, useEffect } from "react";
import News from "../components/News";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";

const Business = () => {
  const navigate =useNavigate();

  const callBusiness = async () => {
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
      }
    } catch (err) {
      console.log(err);
      navigate('/login'); 

    }
  };
  useEffect(() => { 
    callBusiness();
  });
  const pageSize = 5;
  const apiKey = "0f5bcd1c91354866a22117a901c670bc";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <LoadingBar height={3} color="#FFFFFF" progress={progress} />
      <News
        setProgress={setProgress}
        apiKey={apiKey}
        key="business"
        pageSize={pageSize}
        country="in"
        category="business"
      />
    </div>
  );
};

export default Business;
