import React from "react";
import { useState,useEffect } from "react";



function Timer() {
    const [count, setCount] = useState(10);
    const [isActive, setisActive]= useState(true)
  
  
  function handlePause(){
    setisActive(false)
  }
  function handleResume(){
    setisActive(true)
  }
  

  
  useEffect(function(){
    
    let TimerInterval 

    if(isActive){

        TimerInterval = setInterval(function(){
          
            setCount(function(PreCount){
                if(PreCount<=0){
                    setisActive(false)
                    return 0
                }
    
                return PreCount - 1
    
            })

        },1000)

        return ()=>{
            clearInterval(TimerInterval)
           }
    }

  },[isActive])
  
  
  
    return (
      <>
        <h1>Countdown: {count}</h1>
        <button onClick={handlePause}>Stop</button>
        <button onClick={handleResume}>Resume</button>
      </>
    );
  }

  
  export default Timer;