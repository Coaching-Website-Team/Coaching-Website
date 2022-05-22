import './css/App.css';

import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, useRoutes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImage from "./res/images/background_image.jpg";

import { getNavbar, getRoutes } from './routes';

const theme = createTheme({
  appBody: {
    minHeight: "100vh",
    backgroundColor: "rgba(255, 255, 255,0.5)",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 1000px rgba(255,255,255,.5)",
  },
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


function App() {
  console.log(Home);
  const [logedIn, setLogedIn] = useState(false);
  const [bottom, setBottom] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("currentUser") !== undefined &&
      localStorage.getItem("currentUser") !== null
    )
      setLogedIn(true);
    console.log(logedIn);
  });
  return (
    <>
      <Helmet>
        <title>coaching</title>
      </Helmet>

      <Router>
        <ThemeProvider theme={theme}>
          <div className="body">
            {getNavbar()}
            {getRoutes()}
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
/*I didn't start router...*/
