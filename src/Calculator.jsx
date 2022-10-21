import React from 'react';
import { useState } from 'react';
import './index.css';

export default function Calculator() {
 const genderoption=["male","female"];
 const [Height,SetHeight]=useState("");
 const [weight,SetWeight]=useState("");
 const [age,setAge]=useState("");
 const[gender,setGender]=useState("Female");
let heightinches=((Height * 30.48) + (Height *2.54));
 const InputWeight=(event)=>{
  SetWeight(event.target.value);
 }
 const InputHeight=(event)=>{
  SetHeight(event.target.value);
 }
 const InputAge=(event)=>{
  setAge(event.target.value);
 }
const BMRcal=()=>{
  alert(heightinches*weight*age);
  
}
  return (
    <div className='parent-div'>
     <h1>BMR and Daily Calorie Calculator</h1>
     <form action="">
      <label>gender</label>
     {genderoption.map((index,value)=>{
      <>
      return(
        <label>
        <span>
          <input type="text" key={index} value={value} 
          onChange={(e)=>setGender(e.target.value)}
           />       
          {value}</span>
        </label>
      )
      </>
     })}
   <label htmlFor="weight">Weight</label>
   <input type="text" placeholder='Enter your weight'onChange={InputWeight} />
   <label htmlFor="height">Height</label>
   <input type="text" placeholder='Enter Your height' onChange={InputHeight}/>    
   <label htmlFor="">Age</label>
   <input type="text" placeholder='Enter age' onChange={InputAge} />

   <button onClick={BMRcal}>Calculate BMR</button>
   
     </form>

      
    </div>
  )
}
