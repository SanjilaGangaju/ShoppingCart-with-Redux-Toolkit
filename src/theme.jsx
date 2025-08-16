import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette:{

     primary:{
        main:"#8888",
     },
     secondary:{
        main:"#ff9800",
     },
     background:{
        default: "#f3f4f6",
        paper:"#ffffff",
     },



    },
    typography:{
        fontFamily:'"Poppins","Roboto", "Helvetica", "Arial", sans-serif',
        h6:{
            fontWeight:700,
        },
        body1:{
            fontSize:"1rem",
        }

    },
     components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius: 12,
                    textTransform: "none",
                }
            }
        }
     }
})
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#f3f4f6', paper: '#fff' },
    text: { primary: '#000' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#fff' },
  },
});