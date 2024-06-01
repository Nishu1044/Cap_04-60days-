import React from 'react';
import {useParams} from "react-router-dom"
import {useState , useEffect} from 'react';
import axios from 'axios';
import { Box,Card, CardHeader, CardBody, Heading,Stack,StackDivider,Text,CardFooter,Button, HStack} from '@chakra-ui/react'
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import { useNavigate } from 'react-router-dom';


const TicketView = () => {

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


 async function deleteTicket(){
    try {
      let res = await axios({
        method:"delete",
        url:`http://localhost:3000/tickets/${id}`
      })
     
      if(res.status === 200){
        navigate("/tickets")
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
 

const {title,description,status,priority,assignee} = ticket

  return <>
    Ticket View - {id}

    <Card>
   <CardHeader>
     <Heading size='md'>{title}</Heading>
   </CardHeader>
 
   <CardBody>
     <Stack divider={<StackDivider />} spacing='4'>
       
     <Box>
         <Heading size='xs' textTransform='uppercase'>
           ID
         </Heading>
         <Text pt='2' fontSize='sm'>
           {id}
         </Text>
       </Box>

       <Box>
         <Heading size='xs' textTransform='uppercase'>
           Status
         </Heading>
         <Text pt='2' fontSize='sm'>
           {status}
         </Text>
       </Box>
       <Box>
         <Heading size='xs' textTransform='uppercase'>
          Priority
         </Heading>
         <Text pt='2' fontSize='sm'>
          {priority}
         </Text>
       </Box>
       <Box>
         <Heading size='xs' textTransform='uppercase'>
          Description
         </Heading>
         <Text pt='2' fontSize='sm'>
          {description}
         </Text>
       </Box>
       <Box>
         <Heading size='xs' textTransform='uppercase'>
          Assignee
         </Heading>
         <Text pt='2' fontSize='sm'>
          {assignee}
         </Text>
       </Box>
     </Stack>
   </CardBody>
   <CardFooter>
       <HStack>
       
       <Button variant='solid' colorScheme='blue' onClick={()=>{
         navigate(`/ticket/edit/${id}`)
       }}>
         Edit Ticket
       </Button>

       <Button variant='solid' colorScheme='blue' onClick={deleteTicket}>
         Delete Ticket
       </Button>

       </HStack>

     </CardFooter>
 </Card>
  </>
};

export default TicketView;


