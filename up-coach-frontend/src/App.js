import Navbar from "./components/NavbarUnauthenticated/NavbarUnauthenticated";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import backgroundImage from "./res/images/background_image.jpg";

import Home from "./components/Home/Home"
import AdminHome from "./components/Admin/AdminHome"
import SignUp from "./components/signup/SignUp"
import SigningUp from "./components/signup/SigningUp"

import DocVerification from "./components/DocVerification/DocVerification"
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

function App() {
  return (
/*<Home/>*/
/*<AdminHome/>*/
/*<DocVerification/>*/
/*<AdminHome/>*/
/*<SigningUp/>*/
/*<DocVerification/>*/

<DocVerification/>
  );
}

export default App;
