

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import Typography from "@mui/material/Typography";

function Title() {

    const theme = createTheme({
        typography: {

           
          fontFamily: ["Space Grotesk"].join(","),
          fontSize: "87px",
          button: {
            textTransform: "none",
          },
        },
        palette: {
          primary: {
            main: "#F58025",
          },
          secondary: {
            main: "#5A5A5A",
          },
          grey: {
            main: "#F58025",
          },
          success:{
            main:"#6495ED",
        },
        },
      });
  return (
    <ThemeProvider theme={theme}>
 <Typography sx={{mx:2}} color='primary' fontSize='40px' 
 fontFamily="Space Grotesk" lineHeight= "93px"   marginLeft="0%" sx={{marginTop:"5%",marginLeft:"10%"}}   align="left">
                Welcome Back!
              </Typography>

              <Typography sx={{mx:2, marginLeft:"10%"}} color='secondary' fontSize='40px' fontFamily="Space Grotesk" width="807px"
height="171px">
                because you health is our priority we afford for you multiple coaching offer!
              </Typography>
              
              <Typography sx={{mx:2, marginLeft:"10%",marginBottom:"10%"}}  fontSize='40px' fontFamily="Space Grotesk" width="707px"
height="171px">
                
             don’t miss the chance ! choose the coach and start you sport session from home!
              </Typography>
    </ThemeProvider>

  );
}
export default Title;

/*position: absolute;
width: 627px;
height: 371px;
left: 150px;
top: 189px;

font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 87px;
line-height: 93px;
or 107% */
