// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
     
   
   
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        // If the count reaches 1, clear the interval to stop the timer
        if (prevCount > 8) {
          clearInterval(intervalId);
        }
        // Return the updated count
        return prevCount + 1;
      });
    }, 1000);

    function cleanupFunction() {
      clearInterval(intervalId);
    }
    return cleanupFunction;

  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
