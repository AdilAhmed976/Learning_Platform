import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsArrowBarRight } from "react-icons/bs";
import Logo from '../../icons/svg/Logo';
import { useTheme } from '@chakra-ui/react'

  export const Navbar = () => {

    const { isOpen, onToggle } = useDisclosure();   
    const location = useLocation()
    const theme = useTheme()

    return (<>
        {location.pathname === "/login" ? <Box></Box>:
      <Box
        // position={"sticky"}
        fontSize={{ base: "10px", sm: "10px", md: "10px", lg: "11px", xl: "12px",'2xl': '13px'}}
        top={'0px'} zIndex={"999"} >
        <Flex
          fontWeight={"500"}
          // shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" 
          bg={"white"}
          color={'black' }
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          align={'center'}
        >
  
          <Flex
         
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon  w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
  
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems={"center"} > 
          <Link to={"/dashboard"}>
                <Logo />
          </Link>
            <Flex display={{ base: 'none', md: 'flex' }} margin={"auto"} ml={"5px"}>
              <DesktopNav />
            </Flex>
  
            <Spacer />
  
          </Flex>
          
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
  
            
          </Stack> 
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>}
      </>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const location = useLocation()
    const navigate =useNavigate()   
    const theme = useTheme()
console.log(theme.styles.colors.primary)
    return (
      <Stack direction={'row'} spacing={{base:2,sm:2, md:2,lg:2,xl:4,"2xl":6}} >
        
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} py={"10px"} 
          style={{
            borderBottom :location.pathname === `/${navItem.label}` ? `2px solid ${theme.styles.colors.secondary}` : "none" ,
            color :location.pathname === `/${navItem.label}` ? theme.styles.colors.secondary : theme.styles.colors.primary ,
            boxShadow :location.pathname === `/${navItem.label}` ? "rgba(17, 17, 26, 0.1) 0px 10px 0px;" : "none"
          }} 
          _hover={{borderBottom:"2px solid red" , cursor:"pointer" , color:"red"}}
          onClick={() =>navigate(`${navItem.href}`)}
          >
            <Popover trigger={'hover'} placement={'bottom-start'}>

              <PopoverTrigger>
                <Link
                  p={2}
                  to={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent 
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack  >
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link 
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}  >
          <Box >
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}  
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={"rgb(0,30,43)"}
        color={"white"}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          to={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          color={"rgb(23,194,46)"}
          _hover={{
            textDecoration: 'black',
          }}>
            <Box width={"100%"} color='rgb(23,194,46)' display={"flex"} alignItems="center" gap="10px" _hover={{borderBottom:"1px solid rgb(23,194,46)"}} >
              <BsArrowBarRight color='rgb(23,194,46)' />
              <Text
                fontWeight={600}
                color={"white"}>
                {label}
              </Text>
            </Box>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} to={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const NAV_ITEMS = [
    {
      label: 'lectures',
      href: '/lectures',
    },
    {
      label: 'assignments',
      href: '/assignments',
    },
    {
      label: 'quizzes',
      href: '/quizzes',
    },
    {
      label: 'tickets',
      href: '/tickets',
    },
    {
      label: 'discussions',
      href: "/discussions"
    },
    {
      label: 'notifications',
      href: "/notifications"
    },
    {
      label: 'messages',
      href: "/messages"
    },
    {
      label: 'electives',
      href: "/electives"
    },
    {
      label: 'announcements',
      href: "/announcements"
    },
    {
      label: 'courses',
      href: "/courses"
    }
  ];








