import React from "react";
import feuille from "../../../css/feuille.png"
import iversefeuille from "../../../css/feuilleinv.png"
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  butt1: {
    float: "left",
    position: "absolute",

    fontFamily: "Cascadia Code",
    marginTop: "50%"
  },
  butt2: {
    float: "left",
    position: "absolute",

    fontFamily: "Cascadia Code",
  },

  inversefeuille: {

    height: "30px"

  }
});

function Title(props) {
  let style = useStyles();
  return (

    <Grid container >
      <Grid item md={4} xs={4}></Grid>
     

      <Grid item container md={3} xs={3} justifyContent="space-between"
      >   <p style={{
        // fontFamily: "",
        lineHeight: "1,4",
        fontSize: "40px",
        fontWeight: "1000",
        marginTop: "10%",
        marginLeft: "20%",
        color: "#F58025"

      }}> {props.title} </p>
      </Grid>
      

    </Grid>
  );
}
export default Title;
