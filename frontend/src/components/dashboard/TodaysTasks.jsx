import { Box  , VStack } from '@chakra-ui/react'
import React from 'react'

export const TodaysTasks = () => {
  return (
    <VStack border={"1px solid black"} height={"82vh"} padding={{base:"sm" , sm:"sm", md: "md", lg: "md", xl: "30px",'2xl': '30px'}} >
        <Box width={"80%"} border="1px solid black" >
            
            <Box border="1px solid black" height="120px" >

            </Box>
            <Box border="1px solid black" height="120px" >

            </Box>
            <Box border="1px solid black" height="120px" >

            </Box>
        </Box>
    </VStack>
  )
}
