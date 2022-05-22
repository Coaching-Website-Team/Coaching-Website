import React from "react";
import { ThemeProvider } from "styled-components";
import backgroundImage from "../../../res/images/background_image.jpg";
import Body from "./Body";
import { createTheme } from "@mui/material/styles";

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

function Profil() {
  return (
    <ThemeProvider theme={theme}>
      <Body styles={styles.appBody} />
    </ThemeProvider>
  );
}
export default Profil;
