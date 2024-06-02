import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Card = () => {
    const [data, setData] = useState({})
     const {id} = useParams();

    async function fetchData(id){
       
    
        try {

          
            let res = await axios({
                method:"get",
                url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
            })

            setData(res.data.data)
          
            
        } catch (error) {
            console.log(error);
           
        }
    }
    
    useEffect(()=>{
        fetchData(id)
    },[id])


    const {title,category,price} = data
    
    return (
       
        <>
              cardview -{id}
           
            <h3>Title:{title}</h3>
            <p>Category:{category}</p>
            <p>Price:{price}</p>
        </>
    )
}

export default Card;