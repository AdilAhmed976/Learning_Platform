import React from 'react'
import { Box } from '@chakra-ui/react'
import { NavTopBanner } from '../components/navbar/NavTopBanner';

export const Assignments = () => {
  const myText = "Assignments"
  const buttonList = [
    { 
      label : "create",
      link:"/bookmarks"
    },
  ];
  return (
    <Box>
      <NavTopBanner myText={myText} buttonList={buttonList} />
    </Box>
  )
}
