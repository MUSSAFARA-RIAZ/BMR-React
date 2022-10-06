import React from 'react';
import './index.css';

export default function Calculator() {
 const genderoption=["male","female"];
 

  return (
    <div className='parent-div'>
     <h1>BMR and Daily Calorie Calculator</h1>
     <form action="">
      <label>Gender</label>
     <input type="radio" name="gender" id="male"/>Male
        
   <input type="radio" name="gender" id="Female"/>Female
   <label htmlFor="weight">Weight</label>
   <input type="text" placeholder='Enter your weight' onChange={InputWeight} />
   <label htmlFor="height">Height</label>
   <input type="text" placeholder='Enter Your height'  onChange={InputHeight} />

    
    

       
      



      
      
      
      
      

     
      
     </form>

      
    </div>
  )
}
