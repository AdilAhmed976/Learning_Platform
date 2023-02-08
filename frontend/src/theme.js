import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        colors: {
            primary:"#000842",
            secondary:"#0C21C1",
            low:"#999999"
          },
      global: {
        // styles for the `body`
        fonts: {
            heading: `'Heading Font Name', sans-serif`,
            body: `sans-serif`,
        },
        // fontFamily:"sans-serif",
        body: {
          bg: 'white',
          color: 'black',
          fontFamily:"Poppins"
        },
        // styles for the `a`
        a: {
          colors: {
            primary:"#000842",
            secondary:"#0C21C1",
            low:"#999999"
          },
          _hover: {
            textDecoration: 'none',
          },
        },
        variants:{
            'with-shadow': {
                bg: 'red.400',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
        }
            
      },
    },
  })