import React from 'react'
import {Flex,Box,Button,Text} from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react'

export const NavTopBanner = ({ myText ,buttonList }) => {
  const theme = useTheme()
  
  return (
    <Flex 
      justifyContent={"space-between"} 
      alignItems={"center"} 
      py="10px" 
      flexDirection={{base: buttonList?.length>=3 ? "column" : "row" , sm :buttonList?.length>=3 ? "column" : "row", md: "row", lg: "row", xl: "row",'2xl': 'row'}}
      gap="10px"
      margin="auto"
      width={{base:"100%" , sm:"100%", md: "80%", lg: "80%", xl: "82%",'2xl': '82%'}}
      px={{base:"20px" , sm:"20px", md: "0px", lg: "0px", xl: "0px",'2xl': '0px'}}
      borderBottom="1px solid lightgray"
    >
      <Box>
        <Text fontWeight="500" fontSize={"18px"} >{myText}</Text>
      </Box>
      <Flex gap={"10px"} >
         {
          buttonList?.map((element) => {
            return  <Button p={"0px"} m={"0px"}
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
