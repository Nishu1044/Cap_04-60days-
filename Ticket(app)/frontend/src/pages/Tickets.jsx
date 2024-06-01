import React, { useEffect, useState } from 'react';
import {Container,Button,Flex,SimpleGrid,Select,HStack} from "@chakra-ui/react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import TicketCard from '../components/TicketCard';




const Tickets = () => {
  
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [tickets,setTickets] = useState([])
    const [error , setError] = useState(false)
    const [sortOrderValue, setSortOrderValue] = useState("")
    const [filterValue, setFilterValue] = useState("")

    async function fetchAandDisplayData(sortOrderValue,filterValue){
      setLoading(true)
     try {

      let queryParams={}
      if(filterValue){
        queryParams.status = filterValue
      }
     
      if(sortOrderValue){
        queryParams._sort = "priority";
        queryParams._order = sortOrderValue
      }

      let res = await axios({
        method:"get",
        url: `http://localhost:3000/tickets`,
        params : queryParams,
      })

      let data = res.data
      setLoading(false)
      setTickets(data)
      
     } catch (error) {
      setLoading(false)
      setError(true)
     }
    }


    useEffect(()=>{
       fetchAandDisplayData(sortOrderValue,filterValue)
    },[sortOrderValue,filterValue])


    if(loading){
      return
        <LoadingIndicator/>
    }

    if(error){
      return <ErrorIndicator/>
    }

    console.log(`loading---, ${loading}`);
    console.log(`error---, ${error}`);
    console.log(`tickets---`, tickets);


  return (
    
    <Container maxW="container.xl">
        <Flex direction="row-reverse">
        <Button 
        variant="outline" 
        color='blue.400'
        onClick={()=>{
          navigate(`/ticket/create`)
        }}
        marginY={8}
        >Create Tickets</Button>

        </Flex>

       <HStack spacing={4}>
        <Select placeholder='Sort By Priority' value={sortOrderValue} onChange={(e)=>{
          setSortOrderValue(e.target.value)
        }}>
        <option value='asc'>Low to High</option>
        <option value='desc'>High to Low</option>
        </Select>
       

        <Select placeholder='Filter By Value' value={filterValue} onChange={(e)=>{
          setFilterValue(e.target.value)
        }}>
        <option value='in-progress'>In-Progress</option>
        <option value='pending'>Pending</option>
        <option value='completed'>Completed</option>
        </Select>

        </HStack>
       


        <SimpleGrid columns={{base: 1, md:2, lg: 3}} spacing={10}>
        {
          tickets.map((ticket)=>(
            <TicketCard {...ticket} key={ticket.id}/>
          ))
        }
        </SimpleGrid>
    </Container>
    
    
  );
};

export default Tickets;
