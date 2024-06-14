import React, { useState } from "react";

function Todo(){
    // extra part
const[arr, setArr]=useState([])


 const [form, setForm] = useState({
    Name:"",
    Mail:"",
    Age:"",
 })


 function HandleChange(e){
   
    const updateTodo = {
        ...form,
        [e.target.name]:e.target.type === "number" ?  Number(e.target.value):e.target.value
    }
    setForm(updateTodo)
    
 }

 function HandleSubmit(e){
 e.preventDefault()
 console.log(form);


//  extra part
const dataArr = [...arr,form]
console.log(dataArr);
setArr(dataArr)
 }


return(
<>
<form onSubmit={HandleSubmit}>

<input 
type="text"
placeholder="name"
value={form.Name}
onChange={HandleChange}
name="Name"
/>
<br />

<input 
type="text"
placeholder="mail"
value={form.Mail}
onChange={HandleChange}
name="Mail"
/>
<br />
<input 
type="number"
placeholder="age"
value={form.Age}
onChange={HandleChange}
name="Age"
/>
<button>submit</button>
</form>



{/* extra part */}
{
    arr.map((data,id)=>{
        return <div key={data.id}>
        
        <p>{data.Name}</p>
        <h3>{data.Age}</h3>
        <h4>{data.Mail}</h4>

        </div>
        

    })
}
</>

)

}

export default Todo;