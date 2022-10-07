import React from 'react';
import { useState } from 'react';
import './index.css';

export default function Calculator() {
 const genderoption=["male","female"];
 const [Height,SetHeight]=useState("");
 const [weight,SetWeight]=useState("");
 const [age,setAge]=useState("");
 const [bmrTemp,setbmrTemp]=useState("");

//  const [bmr,setBMR]=useState("");


 const InputWeight=(event)=>{
  SetWeight(event.target.value);
 }
 const InputHeight=(event)=>{
  SetHeight(event.target.value);
 }
 const InputAge=(event)=>{
  setAge(event.target.value);

 }

const Gender2=()=>{
 alert("error");


  

}

const GenderFunc=()=>{
   

   var Temp = 66 + 6.2 * weight + 12.7 * Height - 6.76 * age;
    setbmrTemp(Temp);
  
}

const BMRcal=()=>{
  alert(bmrTemp);

 }


 

  return (
    <div className='parent-div'>
     <h1>BMR and Daily Calorie Calculator</h1>
     <form action="">
      <label>Gender</label>
     <input type="radio" name="gender" id="male" onChange={GenderFunc} value="male"/>Male
        
   <input type="radio" name="gender" id="Female" onChange={Gender2}/>Female
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
