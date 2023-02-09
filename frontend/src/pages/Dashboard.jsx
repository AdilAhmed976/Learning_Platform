import { Box } from '@chakra-ui/react'
import React from 'react'
import {TodaysTasks} from "../components/dashboard/TodaysTasks"
import { NavTopBanner } from '../components/navbar/NavTopBanner'

export const Dashboard = () => {

  const myText = "Today's tasks"
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
        <NavTopBanner myText={myText} buttonList={buttonList} />
        <TodaysTasks/>
    </Box>
  )
}
