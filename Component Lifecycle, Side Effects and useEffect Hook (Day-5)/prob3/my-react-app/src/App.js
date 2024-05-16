import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {

const[count,setCount]=React.useState(0)

function handleincrement(){
  setCount(count+1)
}


  return (
    <div className="App">
      
      <p>count:{count}</p>
      <button onClick={()=>handleincrement()}>click</button>
    </div>
  );
}

export default App;
