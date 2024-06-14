
import React, { useState } from "react";

function StopWatch(){
    const[count, setCount] = useState(1)


function OnCHANGE(){
  
setCount(function(currentvalue){
    return currentvalue + 1
   
})

console.log(currentvalue);

    
}

    return(
        <>
        <h1>stopwatch , count = {count}</h1>
        <button onClick={OnCHANGE}>submit</button>
        </>
    )
}

export default StopWatch;