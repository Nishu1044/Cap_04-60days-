import React, { useState } from "react"


 function MyForm(){

    const [form, setForm] = useState({
        Name:"",
        Mail:"",
        ismarried:false
    })
   

    function HandleChange(e){

    const upDateForm = {
        ...form,
        [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
    }
     setForm(upDateForm)
    //  console.log(upDateForm);
    }
  
    function Handlesubmit(e){
        e.preventDefault()
        console.log("form submit",form)
        
    }
 
    return(
        <>
       <form onSubmit={Handlesubmit}>

       <input 
        type=""
        placeholder="name"
        onChange={HandleChange}
        value={form.Name}
        name="Name"
        />

        <br />
        <input 
        type=""
        placeholder="email"
        onChange={HandleChange}
        value={form.Mail}
        name="Mail"

        />

        <input
        type="checkbox"
        checked={form.ismarried}
        onChange={HandleChange}
        name="ismarried"
        />

        <button>submit</button>

       </form>
        </>
    )
  
}

export default MyForm;