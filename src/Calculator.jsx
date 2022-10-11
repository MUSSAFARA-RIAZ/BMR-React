import React from 'react';
import { useState } from 'react';
import './index.css';

export default function Calculator() {
 const genderoption=["male","female"];
 const [Height,SetHeight]=useState("");
 const [weight,SetWeight]=useState("");
 const [age,setAge]=useState("");




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

//  var Temp=0;
// const Gender2=()=>{
  
 
  

//   Temp = 665.1 + 4.35 * weight + 4.7 * heightinches - 4.7 * age;
//   // alert("Your gender is Female and your bmr is " + Temp);


// }

// const GenderFunc=()=>{
//   Temp = 66 + 6.2 *weight + 12.7 * heightinches - 6.76 * age;
  
// }



// const BMRcal=()=>{

//   if(){
//     alert("You are male");
//   }
//   else{
//     alert("You are female");

//   }
 
 


//  }
const GenderFunc=()=>{
  if(value=="male"){
    alert("You are male");
  }
  else{
    alert("You are female");
    
  }
}

 

  return (
    <div className='parent-div'>
     <h1>BMR and Daily Calorie Calculator</h1>
     <form action="">
      <label>Gender</label>
      {/* onChange={GenderFunc} */}
     <input type="radio" name="gender" id="male"  value="male" onChange={GenderFunc}/>{genderoption[0]}
        {/* onChange={Gender2} */}
   <input type="radio" name="gender" id="Female" value="Female" onChange={GenderFunc} />{genderoption[1]}
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
