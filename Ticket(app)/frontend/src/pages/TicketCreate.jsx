
import {Container, Input,Textarea,Select, Button} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// src/pages/Contact.jsx
export default function TicketCreate(){

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [assignee, setAssignee] = useState("")
  const [status, setStatus] = useState("")
  const [ priority, setPriority] = useState("")
  const navigate = useNavigate()

  
   async function HandleCreate(){

    try {
      const newTicket = {
        
        title: title,
        description:description,
        assignee: assignee,
        status:status,
        priority:priority,
      };

      let res = await axios({
        method:"post",
        url: `http://localhost:3000/tickets?`,
        data: newTicket,
      })

      if(res.status === 201){
        alert("Ticket created sucessfully")
        navigate(`/tickets`)
      }
       
      console.log(res);

    } catch (error) {
      console.log(error);
    }
  }





  return(
    <Container>

      <Input placeholder="Enter Title" size="lg"  marginY={4} value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }}/>

      <Textarea placeholder='Enter Description' size="lg" value={description} onChange={(e)=>{
         setDescription(e.target.value)
      }}/>

     <Select placeholder='Assignee' size='lg'marginY={4} value={assignee} onChange={(e)=>{
      setAssignee(e.target.value)
     }}> 
     <option value='Alex'>Alex</option>
     <option value='sam'>Sam</option>
     <option value='Nishu'>Nishu</option>
     <option value='Morgan'>Morgan</option>
     <option value='Jamie'>Jamie</option>
     
     </Select>

     <Select placeholder='Status' size='lg'marginY={4} value={status} onChange={(e)=>{
      setStatus(e.target.value)
     }}> 
     <option value='in-progress'>In-Progress</option>
     <option value='pending'>Pending</option>
     <option value='completed'>Completed</option>
     </Select>

     <Select placeholder='Priority' size='lg'marginY={4} value={priority} onChange={(e)=>{
      setPriority(Number(e.target.value))
     }}> 
     <option value={1}>1</option>
     <option value={2}>2</option>
     <option value={3}>3</option>
     <option value={4}>4</option>
     <option value={5}>5</option>
     <option value={6}>6</option>
     <option value={7}>7</option>
     <option value={8}>8</option>
     <option value={9}>9</option>
     <option value={10}>10</option>
     <option value={11}>11</option>     
     </Select>

     <Button variant="outline" color="red.400" onClick={HandleCreate} >
      Create Ticket
     </Button>

    </Container>
  )
}
