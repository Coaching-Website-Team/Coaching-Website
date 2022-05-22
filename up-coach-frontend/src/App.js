import Navbar from "./components/NavbarUnauthenticated/NavbarUnauthenticated";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import backgroundImage from "./res/images/background_image.jpg";
import SignIn from "./components/signIn/SignIn"
import Home from "./components/Home/Home"
import AdminHome from "./components/Admin/AdminHome"
import SignUp from "./components/signup/SignUp"
import SigningUp from "./components/signup/SigningUp"

import DocVerification from "./components/DocVerification/DocVerification"
import AddOffer from "./components/Offer/AddOffer/AddOffer";
import ConsultOffer from "./components/Offer/CoachConsultOffer/ConsultOffer";
import SigningIn from "./components/signIn/SigningIn"
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes, useRoutes} from "react-router-dom";


function App() {
  const VisitorRoutes = () => useRoutes([
    {path: "/", element: <Home/>},
   {path: "/AdminHome", element: <AdminHome/>},
   {path:"/signin", element: <SigningIn/>},
   {path:"/verfiyDocuments", element: <DocVerification/>},
   {path:"/ConsultOffer", element: <ConsultOffer/>},
  
   {path:"/SigningUp", element: <SigningUp/>}

]);
  return (
    <div className="App">
      
      <Router>
      <VisitorRoutes/>
        
</ Router>

    </div>

  );
}




export default App;
