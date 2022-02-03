import React, { useState } from 'react';

export default function UpdateText() {
function handleChange(e:any){
   const change= e.currentTarget.value;
   console.log("change",change)
   setChangeVal(change)
   //return change;
}
const [changeVal, setChangeVal]= useState();
  return (
  <>

    <label htmlFor="name">Name</label>
    <input onChange={handleChange} name='name'/>
    <label  htmlFor="test">Test</label>
    <input value={changeVal} name='test'/>
  
  </>
    )}
