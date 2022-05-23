import React, { useState, useEffect } from "react";
import photo from "./coach.jpg";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import {createTheme, ThemeProvider} from '@mui/material/styles';

import TrainerCard from "./TrainerCard"
import {getAllOffers, getMyOffers} from "../../../../service/offer";

const theme = createTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            height: "100px",
            width: "10px"
          },
          "*::-webkit-scrollbar-track": {
            background: "#E4EFEF"
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#1D388F61",
            borderRadius: "2px"
          }
        }
      }
    }
  });
 function AlLCards(props){
/*data from back normallly*/
     let [courses, setCourses] = useState({data : ""});
     useEffect(() => {
         return () => {
             if (courses.data === "")
                 getAllOffers(setCourses);
         };
     },[courses.data]);

     return( 
        <ThemeProvider theme={theme}>
     <Grid    container
        direction="row"
        justifyContent="center"
        alignItems="center" spacing={4}>

         {courses.data === "" ? <>
             <div style={{display: "none"}}>{getAllOffers(setCourses)} </div>
             <h1>loading</h1> </> : <>
         {
courses.data.map((card) => (
    <Grid item container xs={4}>
        <TrainerCard
            url = {"/offer/"+card.id}
            id={card.id}
            price={card.minPrice}
            name={card.coachBasicDTO.firstName + " " + card.coachBasicDTO.lastName}
            desc={card.description}
            image={"http://localhost:8000/api/document/" + card.image}
            title={card.title}
            client={card.client}
        />


        </Grid>))}</>
         }

        <Grid item xs={3}>

        </Grid>

        </Grid> 
        </ThemeProvider>)




 }
 export default AlLCards;
 