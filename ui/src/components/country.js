import React,{useState} from 'react'

export const Country = ({setCountry}) => {
    // const [country,setCountry]= useState("in");
  function handleCountry(e){
    setCountry(e.target.value);
  }
  return (
    <div><select 
    class="form-control form-control-sm bg-dark outline-white text-light"
    onChange={handleCountry}>
      <option value="in">in</option>
      <option value="fr">fr</option>
      <option value="cn">cn</option>
      {/* <option>fg</option>
      <option>ji</option> */}
    </select></div>
  )
}
