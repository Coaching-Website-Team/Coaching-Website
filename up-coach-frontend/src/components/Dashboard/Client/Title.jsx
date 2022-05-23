
import React from "react";
import ButtonLogin from "../../shared/ButtonLogin";
import feuille from "../../../css/feuille.png"
import iversefeuille from "../../../css/feuilleinv.png"
import { makeStyles } from "@mui/styles";
import desc from "../../Home/Desc"
import "../../../css/App.css"
import { Grid } from "@mui/material";
import { TrainingSessions, MealPlans } from "./Buttons";


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
    <div>
 <p style={{
          fontFamily: "Rubik Beastly",
          marginLeft: "20",
          lineHeight: "1,4",
          fontSize: "20px",
          fontWeight: "100",
          marginTop: "10%",
          color: "rgba(15, 103, 8, 1)"

        }}>{props.title}</p>
       
          <p
            style={{

              fontFamily: "Contrail One",
              width: "400px",
              lineHeight: "2",
              fontSize: "20px",
              fontWeight: "100",
              marginLeft: "40%"
            }}>because you health is our priority we afford for you multiple coaching offer</p>
       
          <p
            style={{

              fontFamily: "Contrail One",
              width: "400px",
              lineHeight: "2",
              fontSize: "20px",
              fontWeight: "100",
              marginLeft: "5%"
            }}>
                don’t miss the chance ! choose the coach and start you sport session from home!</p>
      
    </div>

  );
}
export default Title;

