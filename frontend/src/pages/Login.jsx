import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  InputLeftElement,
  Text,
  VStack,
  Box,
  HStack
} from '@chakra-ui/react';
import { Email } from '../icons/svg/Email';
import { Lock } from '../icons/svg/Lock';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Gmail } from '../icons/svg/Gmail';

export const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    {/* <Box top={"132px"} width="50vw" > */}
      <Flex p={8} flex={1} align={'center'} justify={'center'}  >
        <Stack spacing={4} w={'full'} maxW={'md'} >
          <Heading fontSize={'2xl'}>log-In</Heading>
          <FormControl id="email">
            <FormLabel style={{color:"#999999"}} >Email </FormLabel>
            <InputGroup >
            <InputLeftElement variant='flushed' style={{backgroundColor:"none" , border:"none"}} children={<Email/>} />
              <Input  
                variant={"flushed"}
                type='password' placeholder='Enter your Password' 
                focusBorderColor='#000842'
                style={{backgroundColor:"white",focusBorderColor:"#000842",colorScheme:"blue"}} 
                _hover={{bg:"white", focusBorderColor:"#000842",}} 
                _focus={{bg:"red", focusBorderColor:"none",  focusBackgroundColor:"red", errorBorderColor:"none" }} 
              />
            </InputGroup>
          </FormControl>

          

          <FormControl id="password">
            <FormLabel style={{color:"#999999"}} >Password </FormLabel>
            <InputGroup>
              <InputLeftElement variant='flushed' style={{backgroundColor:"none" , border:"none"}} children={<Lock/>} />
              <Input 
                type={showPassword ? 'text' : 'password'} 
               variant={"flushed"}
               placeholder='Enter your Password' 
               focusBorderColor='#000842'
               style={{backgroundColor:"white",focusBorderColor:"#000842",colorScheme:"blue"}} 
               _hover={{bg:"white", focusBorderColor:"#000842",}} 
               _focus={{bg:"red", focusBorderColor:"none",  focusBackgroundColor:"red", errorBorderColor:"none" }} 
              />
              <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
            </InputGroup>

          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color="low" >Forgot password?</Link>
            </Stack>
            <Button style={{
              backgroundColor:"0C21C1",
              height:"53px",
              fontWeight:"400",
              backgroundColor:"#0C21C1",
             boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.25)",
              borderRadius: "32px",
              color:"white"
            }} 
            >
              Login
            </Button>
            <Text top="47px" textAlign={"center"} >or continue with</Text>
            <HStack  margin={"auto"} border={"1px solid black"} justifyContent={"space-evenly"} alignItems={"center"}  >
              <Button style={{padding:"0px"}} ><Gmail/></Button>
              <Button style={{padding:"0px"}} ><Gmail/></Button>
              <Button style={{padding:"0px"}} ><Gmail/></Button>
            </HStack>
          </Stack>

        </Stack>
      </Flex>
    {/* </Box> */}
      <Flex display={{ base: 'none', sm: 'none' , md:"none",lg:"block",xl:"block", "2xl":"block" }} 
      position={"relative"}
      flex={1}
        style={{
          margin:"20px" ,
          boxSizing:"border-box", 
          backgroundColor:"#000842",
          borderRadius:"20px"
        }} 
      >
        <Image
          alt={'Login Image'}
          src={
            'https://i.imgur.com/zI8p6XA.png'
          }
          position= 'absolute'
          width= "421px"
          height= "421px"
          right= "130px"
          top= "64px"
          left="123px"
        />
      </Flex>
    </Stack>
  );
}
