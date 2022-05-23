import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.

import Button from "@mui/material/Button";


function NewButton(props) { return(
<Button onClick={props.onClick}
            sx={{
              flexGrow: 1,
              my: 2,
              display: "block",
              backgroundColor: "#F58025",
              color: "white",
              width:"200px",
              
              textAlign: "center"}}
            href={props.href} 
            center>
           {props.text}
           
          </Button>)}

          export default  NewButton;
