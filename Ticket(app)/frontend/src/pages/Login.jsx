
import React, { useState, useContext } from 'react';
import {Heading,Input,Button,VStack,Container} from '@chakra-ui/react'
import axios from "axios"
import {AuthContext} from '../context/AuthContexProvider'
import {  Navigate } from 'react-router-dom';


const Login = () => {

const [email,setEmail] = useState("");
const [password, setPassword] = useState("")


const {login, authDetails:{isLoggedIn}} = useContext(AuthContext)

 async function HandleClick(){
  try {

   let res = await axios({
      method:"post",
      url: "https://reqres.in/api/login",
      data:{
        email,
        password,
      }
    })

    console.log(res?.data?.token);
    // Call the login function with the token
    if (res?.data?.token) {
      login(res.data.token);
    }

  
    
  } catch (error) {
    console.log(error);
  }
}


if(isLoggedIn){
  return <Navigate to="/"/>
}

  return (
    <Container>
    <VStack spacing={4} >
    <Heading>
      <h1>Home Page</h1>
    </Heading>  

    <Input 
    placeholder='Email' 
    type='email'
    value={email}
    onChange={(e)=> {setEmail(e.target.value)}} />

    <Input 
    placeholder='Password' 
    type='password'
    value={password}
    onChange={(e)=> {setPassword(e.target.value)}}/>

    <Button 
    variant="outline" 
    color="green.400"
    onClick={HandleClick}
    >Login</Button>
</VStack>
</Container> 
  );
};

export default Login;
