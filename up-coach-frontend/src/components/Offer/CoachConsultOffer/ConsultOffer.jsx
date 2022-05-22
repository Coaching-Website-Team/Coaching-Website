import React from "react";
import Grid from "@mui/material/Grid";
import MyOffers from "./MyOffers"
import "../../../css/App.css"
import Welcome from  "./welcome"
import AlLCards from "./OffersCard/AlLCards"
import Navbar from "../../Navbar/NavbarUnauthenticated";
import {createTheme} from '@mui/material/styles';
import backgroundImage from "../../../res/images/background_image.jpg";

function ConsultOffer(props) {

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
            success: {
            main: "#F58025",
          },
         
          grey: {
            main: "#8C92AC",
          },
        },
      });

  return ( <div>
      <Navbar/>
      <div style={styles.appBody}>
      <Grid container >
          <Grid item xs={12}/>
          <Grid item xs={4}/>
          <Grid item xs={4}>

          <MyOffers/> </Grid>
          <Grid item xs={4}/>
          <Grid item xs={12}>
  <Welcome/>
  </Grid>   
  <Grid item xs={12}> <AlLCards/></Grid>
  </Grid>
  </div>
 </div>
  );
}
export default ConsultOffer;
