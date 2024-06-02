import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Products = () => {
  const [data, setData] = useState([])
 
const navigate = useNavigate()

  
  
async function fetchData(){
    

    try {

        let res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
        console.log(res.data.data)
        setData(res.data.data)
        
    } catch (error) {
        console.log(error);
       
    }
}

useEffect(()=>{
    fetchData()
},[])


  return (
    <>
    {
        data.map((product, id)=>{
          return <div>

            <h3>Title:{product.title}</h3>
            <p>Category:{product.category}</p>
            <p>Price:{product.price}</p>
            <button onClick={()=>{
                navigate(`/card/${id}`)
            }}>view Card</button>
          </div>
        })
    }
    </>
  )
}

export default Products;