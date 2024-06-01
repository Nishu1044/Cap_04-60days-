import React from 'react';
import {useParams} from "react-router-dom"
import {useState , useEffect} from 'react';
import axios from 'axios';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import { useNavigate } from 'react-router-dom';
import {Container, Input,Textarea,Select, Button} from "@chakra-ui/react";



const TicketEdit = () => {

  const [loading, setLoading] = useState(false)
  const [ticket,setTicket] = useState({})
  const [error , setError] = useState(false)
  const {id} = useParams();
  const navigate = useNavigate()


  async function fetchAandDisplayData(id){

    setLoading(true)
   try {

    let res = await axios({
      method:"get",
      url: `http://localhost:3000/tickets/${id}`,
    })

    let data = res.data
    setLoading(false)
    setTicket(data)
    
   } catch (error) {
    setLoading(false)
    setError(true)
   }
  }
   
  useEffect(()=>{
    fetchAandDisplayData(id)
 },[id])


 async function editTicket(){
  
  try {
      
    let updatedTicket = {
      title:ticket.title,
      description:ticket.description,
      assignee:ticket.assignee,
      status:ticket.status,
      priority:ticket.priority,
    }
      
    let res = await axios({
      method:"put",
      url: `http://localhost:3000/tickets/${id}`,
      data: updatedTicket,
    })

    if(res.status === 200){
      alert("Ticket edited sucessfully")
      navigate(`/tickets`)
    }

  } catch (error) {
    console.log(error);
  }
 }


 if(loading){
  return
    <LoadingIndicator/>
}

if(error){
  return <ErrorIndicator/>
}
 

console.log(ticket);
const {title,description,status,priority,assignee} = ticket





return (
    
    <Container>

    <Input placeholder="Enter Title" size="lg"  marginY={4} value={title} onChange={(e)=>{
      setTicket({
        ...ticket,
        title:e.target.value,
      })
    }}/>

    <Textarea placeholder='Enter Description' size="lg" value={description} onChange={(e)=>{
       setTicket({
        ...ticket,
        description:e.target.value,
      })
    }}/>

   <Select placeholder='Assignee' size='lg'marginY={4} value={assignee} onChange={(e)=>{
    setTicket({
      ...ticket,
      assignee:e.target.value,
    })
   }}> 
   <option value='Alex'>Alex</option>
   <option value='sam'>Sam</option>
   <option value='Nishu'>Nishu</option>
   <option value='Morgan'>Morgan</option>
   <option value='Jamie'>Jamie</option>
   
   </Select>

   <Select placeholder='Status' size='lg'marginY={4} value={status} onChange={(e)=>{
   setTicket({
    ...ticket,
    status:e.target.value,
  })
   }}> 
   <option value='in-progress'>In-Progress</option>
   <option value='pending'>Pending</option>
   <option value='completed'>Completed</option>
   </Select>

   <Select placeholder='Priority' size='lg'marginY={4} value={priority} onChange={(e)=>{
    setTicket({
      ...ticket,
      priority:Number(e.target.value),
    })
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

   <Button variant="outline" color="red.400" onClick={editTicket} >
    Edit Ticket
   </Button>

  </Container>
  );
};

export default TicketEdit;
