import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import backgroundImage from "../../res/images/background_image.jpg";
import Title from "./Title"
import CoachButton from "./CoachButton";
import ClientButton from "./ClientButton";
import Grid from '@mui/material/Grid';

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

function Home() {
  return (
    <ThemeProvider theme={theme}>
      
       
        <div style={styles.appBody}> 
         <Title/>
         <Grid item xs={2}> </Grid>
         <Grid container > <Grid item xs={4}> <CoachButton/></Grid>
         <Grid item xs={6}><ClientButton/></Grid>
         </Grid>
       

      </div>
    </ThemeProvider>
  );
}
export default Home;
