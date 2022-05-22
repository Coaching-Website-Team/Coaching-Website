import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import Typography from "@mui/material/Typography";

function Title() {

    const theme = createTheme({
        typography: {

            /*position: absolute;
width: 627px;
height: 371px;
left: 150px;
top: 189px;

font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 87px;
line-height: 93px;*/
          fontFamily: ["Space Grotesk"].join(","),
          fontSize: "87px",
          button: {
            textTransform: "none",
          },
        },
        palette: {
          primary: {
            main: "#8C92AC",
          },
          secondary: {
            main: "#F58025",
          },
          grey: {
            main: "##000000",
          },
        },
      });
  return (
    <ThemeProvider theme={theme}>
 <Typography sx={{mx:2}} color='grey' fontSize='37px' 
 fontFamily="Space Grotesk" lineHeight= "93px"  left="150px"  fontSize="50px" sx={{marginLeft:"5%"}} width= "627px" height="271px">
               
           
               Hire the best coaches and
Get the best workout plans!
              </Typography>

              <Typography sx={{mx:2}} color='grey' fontSize='40px' fontFamily="Space Grotesk" width="1007px"
height="171px">
               Millions of people use UpCoach.com to get their best workout plans. !
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
