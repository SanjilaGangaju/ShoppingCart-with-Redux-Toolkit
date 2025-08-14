import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette:{
     primary:{
        main:"#6a1b9a",
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