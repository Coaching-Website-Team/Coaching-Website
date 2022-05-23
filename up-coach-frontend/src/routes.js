import {BrowserRouter as Router, Route, Routes, useRoutes} from "react-router-dom";
import {isMentee,isMentor,isGuest,isAdmin,logOut} from "./service/authentication"
import NavbarUnauthenticated from "./components/Navbar/NavbarUnauthenticated"
import NavbarAuthenticated from "./components/Navbar/NavbarAuthenticated"
import Home from "./components/Home/Home"
import SignUp from "./components/signup/SignUp"
import Details from "./components/Offer/ClientConsultOffer/Details"
import Profil from "./components/Dashboard/Client/profil"
import SignIn from "./components/signIn/SignIn"
const MenteeRoutes = () => useRoutes([
    {path: "/", element: <Home/>},
    {path: "/profil", element: <Profil/>}
//     {path: "/", element: <Profil/>},
//    {path: "/profil", element: <Profil/>},
//    {path:"/offer/:id", element: <Details/>},
//    {path: "/changePassword", element: <ChangePassword/>}

]);
const MentorRoutes = () => useRoutes([
    {path: "/", element: <Home/>},
    {path: "/profil", element: <Profil/>},
    {path: "/signin", element: <SignIn/>}

//    {path: "/", element: <CoachProfil/>},
//    {path: "/profil", element: <CoachProfil/>},
//    {path:"/add_offer",element:<AddOffer/>},
//    {path:"/offers",element:<ConsultOffer/>},
//    {path:"/offers/clients",element:<MyClient/>},
//    {path: "/changePassword", element: <ChangePassword/>}


]);
const AdminRoutes = () => useRoutes([
    {path: "/signin", element: <SignIn/>},
    {path: "/", element: <Home/>},
    {path: "/profil", element: <Profil/>},
//    {path: "/", element: <AdminProfil/>},
//    {path: "/profil", element: <AdminProfil/>},
//    {path: "/changePassword", element: <ChangePassword/>},
//    {path: "/admin/coaches_documents", element: <CoachList/>},
//    {path: "/NewPassword/:userId", element: <NewPassword/>}
]);
const GuestRoutes = () => useRoutes([
    {path: "/signin", element: <SignIn/>},
   {path: "/", element: <Home/>},
   {path: "/profil", element: <Profil/>},
//    {path: "/profil", element: <Home/>},
//    {path: "/signin", element: <SignIn/>},
   {path: "/signup", element: <SignUp/>},
   {path:"/offer/:id", element: <Details/>},
//    {path: "/forgotPassword", element: <Forgot/>},
//    {path: "/EmailSent", element: <EmailSent/>},
//    {path: "/NewPassword/:userId", element: <NewPassword/>},

]);

const getRoutes = ()=>{
    if (isMentee()) return <MenteeRoutes/>;
    if (isMentor()) return <MentorRoutes/>;
    if (isGuest()) return <GuestRoutes/>;
    if (isAdmin()) return <AdminRoutes/>;
    return <GuestRoutes/>;
}

const getNavbar = ()=>{
    console.log(isMentor());
    if(isMentee()||isMentor()||isAdmin()) 
    return <NavbarAuthenticated/>

    return <NavbarUnauthenticated/>
  
}


export {getRoutes,getNavbar};