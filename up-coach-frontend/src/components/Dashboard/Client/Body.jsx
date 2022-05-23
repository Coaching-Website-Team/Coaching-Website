import React from "react";
import Img, { QuoteImage } from "./Img";
import Title from "./Title";
import Description from "./Description";
import { TrainingSessions, MealPlans } from "./Buttons";

import { makeStyles } from "@mui/styles";
import Search from "./Search";
import AlLCards from "./Trainers/AlLCards";
import ChooseOffer from "./ChooseOffer";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from "axios";
import {useState} from "react";
import backgroundImage from "../../../res/images/background_image.jpg";
import {  Paper } from "@mui/material";

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
function Body(props) {
  

  return (

    <ThemeProvider theme={theme}>
       <div style={styles.appBody}>
    <Grid container>
  <Grid item xs={12}  > <Title/>
      </Grid>
  <Grid item xs={12}>
      < AlLCards />
      </Grid>
</Grid></div>
    </ThemeProvider>
  );
}
export default Body;
