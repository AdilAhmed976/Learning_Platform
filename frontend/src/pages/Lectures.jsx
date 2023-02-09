import React from 'react'
import { NavTopBanner } from '../components/navbar/NavTopBanner'
import { Box } from '@chakra-ui/react'
export const Lectures = () => {
  const myText = "Lectures"
  const buttonList = [
    { 
      label : "Create",
      link:"/create"
    }
  ];
  return (
    <Box>
      <NavTopBanner myText={myText} buttonList={buttonList} />
      {/* <CircularProgress/> */}
    </Box>
  )
}
