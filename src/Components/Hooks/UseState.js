import React, { useEffect, useState } from "react";

const UseState = () => {


    const [state,setState]=useState({name:"sai",age:0})

    const {name,age}=state;


    useEffect(()=>{
        console.log("first useEffect");
    },[])

    useEffect(()=>{
        console.log("Second useEffect");
    },[age])

    return ( 
       
        <>
          Use State {name}-{age}
          <button type="button" onClick={()=>setState({...state,age:age+1})} >add age</button>
        </>

       

     );
}
 
export default UseState;