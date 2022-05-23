import React from "react";
import styled from "styled-components";
import TextButton from "../../../shared/TextButton"
import Grid from "@mui/material/Grid";
import {deleteOfferById} from "../../../../service/offer";

function OfferCard(props) {
    const Container = styled.div`
 width: 100%;
  max-width: 80%;
  background:rgba(213, 223, 230, 0.49);

  padding: 44px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 4px;
  margin-bottom: 20px
 
`;
    const deleteOffer = () => {
        deleteOfferById(props.id);
        // console.log(props.id);
    }

    const Img = styled.img`
  height: 200px;
  wieght:300px;
 


`;

    const Test1 = styled.h5`
color: #ed563b;
margin: 0 0 0 0;
font-weight: 500;
font-size: 15px
 
`;

    const Test2 = styled.h3`
color: rgba(15, 103, 8, 1);
letter-spacing: 1px;
fontFamily: "Rubik Beastly";
font-size: 40px;


  }
`;

    const Test3 = styled.p`
margin: 0 0 0 0;
    color: #7a7a7a;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.7;
      
overflow: hidden;

display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
  

    

`;

    const Test4 = styled.h3`
letter-spacing: 1px;
fontFamily: "Rubik Beastly";
font-size: 60px;


  }
`;

    return (
        <Container>
            <Grid container>

                <Grid container item xs={12}>
                    <Grid item container xs={6}>

                        <Grid item xs={12}>
                            <p style={{
                               color:"#F58025",
                                fontWeight: "500",
                                fontSize: "50px",
                                fontFamily:"Comfortaa",
                                fontWeight: "bold"
                            }}

                            >
                                {props.title}</p>
                        </Grid>

                        <Grid item xs={12}>
                            <h3 style={{
                                letterSpacing: "1px",

                                fontSize: "30px"
                            }}> BY:{props.name}</h3>
                        </Grid>

                        <Grid item xs={12}>
                            <Test3>{props.desc}</Test3>
                        </Grid>

                        <Grid item xs={12}> <Test1> min price :{props.price}$</Test1>
                        </Grid>

                    </Grid>

                    <Grid item container xs={6}>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={2}></Grid>
                        <Img  src={props.image} alt="trainer"/>
                    </Grid>
                </Grid>
            </Grid>

            < TextButton value="delete Offer" fgColor="#F58025" url={props.url}
                         onClick={props.delete || deleteOffer}> </TextButton>

        </Container>);
}


export default OfferCard;

