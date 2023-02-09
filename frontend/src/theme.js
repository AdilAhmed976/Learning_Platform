import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  components: {
    Button: {
      // 1. We can update the base styles
        baseStyle: {
        fontWeight: '400',
        size:"12px",
        backgroundColor:"#000842",
        color:"white",
        _hover:{
          fontWeight: '400',
        backgroundColor:"#0C21C1",
        color:"white"
        }
      },
      variants : {
        
          "with-shadow": {
            bg: 'red.400',
            boxShadow: '0 0 2px 2px #efdfde',
          },
        my:{
          fontWeight: '400',
          size:"12px",
          backgroundColor:"red",
          color:"white",
          _hover:{
            fontWeight: '400',
          backgroundColor:"#000842",
          color:"white"
          }
        }
      }
    },
  },
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
        },
            
      },
    },
  })