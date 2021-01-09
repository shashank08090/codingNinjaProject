import React from 'react';
import fire from './config/fire';

//-------------------------



//-------------------------

export default function App() {
  
  function data(e){
    e.preventDefault();
    console.log("data clicked");
    console.log( e.target[0].value );
   // console.log( e.target.name.value );
  }
  return (
    <div>
      <input type="email" name="email" placeholder="enter your email" id="email" required >

      </input>
      <input type="text" name = "name" placeholder="your name"  id="name" required >

      </input>
      <button type="submit" onClick={data}  name="submit" id="submit" >Provide details</button> 
    </div>
  )
}
