import React from 'react'
import {Flex,Box,Button,Text} from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react'

export const TopDashBoardBanner = () => {
  const theme = useTheme()
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
    <Flex 
      justifyContent={"space-between"} 
      alignItems={"center"} 
      py="10px" px="40px"
      flexDirection={{base:"column" , sm:"column", md: "row", lg: "row", xl: "row",'2xl': 'row'}}
      gap="10px"
       >
      <Box>
        <Text>Today's Schedule</Text>
      </Box>
      <Flex gap={"10px"} >
         {
          buttonList?.map((element) => {
            return  <Button 
              key={element.label} 
              variant={theme.components.Button.baseStyle} 
              size={{base:"sm" , sm:"sm", md: "md", lg: "md", xl: "md",'2xl': 'md'}}
              >{element.label}</Button>
          })
         }
      </Flex>
    </Flex>
  )
}
