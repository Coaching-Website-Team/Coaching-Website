import React, {useEffect, useState} from "react";
import backgroundImage from "../../../res/images/background_image.jpg";
import ConsultOffer from "./ConsultOffer";
import {getOffer} from "../../../service/offer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

function Details(props) {

    let [offer, setOffer] = useState({data : ""});
    if (offer.data === ""){
        getOffer( window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1), setOffer);
    }
    useEffect(() => {
        return () => {
            if (offer.data === "")
                getOffer( window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1), setOffer);
        };
    },[offer.data]);
    return(
        <div style={styles.appBody}> <>
        {offer.data === ""
                ?<h1>loading</h1>
                :
    <ConsultOffer title={offer.data.title} desc={offer.data.description}
    
    name={offer.data.coachBasicDTO.firstName + " "+offer.data.coachBasicDTO.lastName}
               photo={"http://localhost:8000/api/document/"+offer.data.image}
              email={offer.data.coachBasicDTO.email}
              // speciality="athlete"
              level="1"
              date={new Date(offer.data.creationDate).toLocaleDateString()}
                  maxPrice={offer.data.maxPrice + "$"}
                  minPrice={offer.data.minPrice + "$"}/>}</>

</div>
    );
}
export default Details;
