import React from 'react'
import {Flex,Box,Button,Text} from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react'

export const NavTopBanner = ({ myText ,buttonList }) => {
  const theme = useTheme()
  
  return (
    <Flex 
      justifyContent={"space-between"} 
      alignItems={"center"} 
      py="10px" px="40px"
      flexDirection={{base:"column" , sm:"column", md: "row", lg: "row", xl: "row",'2xl': 'row'}}
      gap="10px"
       >
      <Box>
        <Text>{myText}</Text>
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
