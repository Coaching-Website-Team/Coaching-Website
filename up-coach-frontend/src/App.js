import './css/App.css';

import Home from "./components/Home/Home";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {BrowserRouter as Router, Route, Routes, useRoutes} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";


import { getNavbar , getRoutes} from './routes';

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
                <title>Gestion de cours</title>
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
