
import React from 'react'
import { Link as  ReactRouterLink } from "react-router-dom"
import { Link as ChakraLink,Flex,Button} from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContexProvider'

const links = [
    {
        to:"/",
        label:"HOME",
    },
    {
        to:"/about",
        label:"ABOUT",
    },
    {
        to:"/contact",
        label:"CONTACT",
    },
    {
        to:"/login",
        label:"LOGIN",
    },
    {
        to:"/tickets",
        label:"TICKETS",
    },
    // {
    //     to:"/ticketcreate",
    //     label:"TICKETCREATE",
    // },
    // {
    //     to:"/ticketedit",
    //     label:"TICKETEDIT",
    // },
    // {
    //     to:"/ticketview",
    //     label:"TICKETVIEW",
    // },
]



const Navbar = () => {

const {logout} = useContext(AuthContext)

  return (
    <>
    <Flex align="centre" justify="space-around" background="green.300" padding="4">
    {
      links ?.map((link)=>(
      <ChakraLink 
        color="grey.900"
        as={ReactRouterLink}
        key={link.to} to={link.to}>
        {link.label}
     </ChakraLink>
    ))
  }
  <Button 
  onClick={logout}
  variant="outline"
  color="red.400">LOGOUT</Button>
  </Flex>
  </>
  )
}

export default Navbar;