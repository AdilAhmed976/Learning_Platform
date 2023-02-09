import { Box } from '@chakra-ui/react'
import React from 'react'
import { NavTopBanner } from '../components/navbar/NavTopBanner'

export const Quizzes = () => {
  const myText = "Quizzes"
  const buttonList = [
    { 
      label : "Bookmarks",
      link:"/bookmarks"
    },
    { 
      label : "Sprint Plan",
      link:"/sprintplan"
    }, 
    { 
      label : "Refer & Earn",
      link:"/refer&earn"
    } 
  ];
  return (
   <Box>
    <NavTopBanner myText={myText}  />
   </Box>
  )
}
