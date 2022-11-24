import { extendTheme } from 'native-base';

const theme = extendTheme({

    colors: {

        // Add new color
        primary: {
            100: '#225529',
            200: '#225529',
            // 300: '#2AC955',
            // 400: '#30E25F',
        },

        secondary: {
            100: '#225529',
        },
        green: {
            100: '#225529',
        },
        
        
        border: {
            100: '#225529',
            
        },
        amber: {
            100: '#225529',
            // 400: '#d97706',
        },
      
    },

    components: {
        Button: {
            // Can simply pass default props to change default behaviour of components.
            baseStyle: {
                rounded: 'md',
            },
            defaultProps: {
                colorScheme: 'green',
                borderRadius: '10px',
                _text: {
                    // color: '#1C8739'
                },
                // bg: '#1C8739'
            },
        },
       
        Link: {
            defaultProps: {
                _text: {
                    color: '#225529',
                    fontWeight: 'medium',
                    fontSize: 'sm',
                    underlayColor: 'none',
                },
            },
        },
        Heading: {
            // Can pass also function, giving you access theming tools
            baseStyle: ({ colorMode }) => {
                return {
                    color: colorMode === 'dark' ? 'red.200' : 'primary.100',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    textAlign: 'center',
                    // fontFamily: 'Inter',
                };
            },
        },
        Input: {
            defaultProps: {
                borderColor: 'green',
                borderRadius: '10px',
                colorScheme: 'green',
                _focus:{
                    borderColor: 'green',
                }
            },
        },
        Select: {
            defaultProps: {
                borderColor: 'green',
                borderRadius: '10px',
                colorScheme: 'green',
                _focus:{
                    borderColor: 'green',
                }
            },
        },
    },

    config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'light',
    },
})

export default theme;