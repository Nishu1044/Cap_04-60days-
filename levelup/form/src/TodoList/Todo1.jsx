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


<table>
        <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
        </thead>

            <tbody>
                {arr.map((data) => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.Name}</td>
                        <td>{data.Mail}</td>
                        <td>{data.Age}</td>
                    </tr>
                ))}
            </tbody>
</table>
</>

)

}

export default Todo;