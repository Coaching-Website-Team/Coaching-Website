
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import backgroundImage from "../../res/images/background_image.jpg";
import Title from "./Title";
import Typography from "@mui/material/Typography";
import AdminButton from "./AdminButton"

function AdminHome() {
    const styles = {
        appBody: {
          minHeight: "100vh",
          backgroundColor: "rgba(255, 255, 255,0.5)",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 1000px rgba(255,255,255,.5)",
        },
      };
      
      const theme = createTheme({
        typography: {
          fontFamily: ["Space Grotesk"].join(","),
          fontSize: 15,
          button: {
            textTransform: "none",
          },
        },
        palette: {
          primary: {
            main: "#F58025",
          },
          secondary: {
            main: "#6495ED",
          },
          grey: {
            main: "#8C92AC",
          },
        },
      });
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          
    
          <div style={styles.appBody}>  <Title/>
          <AdminButton/>
          </div>


        </div>
      </ThemeProvider>
    );
  }
  export default AdminHome;