import Navbar from "../NavbarUnauthenticated/NavbarUnauthenticated";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import backgroundImage from "../../res/images/background_image.jpg";
import Title from "./Title";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


function AdminButton() { return(
<Button
            sx={{
              flexGrow: 1,
              my: 2,
              display: "block",
              backgroundColor: "#F58025",
              color: "white",
              width:"300px",
              
              marginLeft:"25%",
              textAlign: "center"
            }}
            href="/verfiyDocuments" 
            center
          >
            Verify Coach documents
          </Button>)}

          export default  AdminButton;
