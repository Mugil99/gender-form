import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[str,setStr]=useState("");
  
  return (
    <div className='container'>
    <h2>Select your gender :</h2>
    
    <label htmlFor='male'><input type="radio" id="male" name="gender" onClick={(e)=>{setStr(e.target.id)}}></input>Male</label>
    
    <label htmlFor='female'><input type="radio" id='female' name="gender" onClick={(e)=>{setStr(e.target.id)}}></input>Female</label>
    {
      str=="male"?<><h3 className='males'>Select your shirt size</h3><select>
        <option>select</option>
        <option>S</option>
        <option>M</option>
        <option>L</option></select></>:str=="female"?<><h3 className='females'>Select your dress size</h3><select>
        <option>select</option>
        <option>2</option>
        <option>4</option>
        <option>6</option></select></>:""
    }
    </div>
  )
}

export default App;
