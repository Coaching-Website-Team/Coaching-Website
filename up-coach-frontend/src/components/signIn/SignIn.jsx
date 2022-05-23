import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from "axios";
import {useState} from "react";
import {goto} from "../../service/utils";
import backgroundImage from "../../res/images/background_image.jpg";

import {  Paper } from "@mui/material";
function getRole(key) {
    return key.substring(1, key.length - 1);
}

function getJWT(value) {
    return value.authorization;
}

function extractRoleAndJWT(data) {
    let tempRole = undefined;
    let tempAuth = undefined;
    Object.entries(data).forEach(([key, value]) => {
        tempRole = getRole(key);
        tempAuth = getJWT(value);
        return;
    });
    return [tempRole, tempAuth];
}

function Copyright(props) {
    return (<
            Typography variant="body2"
                       color="text.secondary"
                       align="center" {...props} > {'Copyright © '} <
            Link color="inherit"
                 href="">
            MEET FITNESS<
        /Link>{' '} {new Date().getFullYear()} {'.'} < /
            Typography>
    );
}

const theme = createTheme({
    typography: {
      fontFamily: ["Space Grotesk"].join(","),
      fontSize: 15,
      button: {
        textTransform: "none",
      },
    },
    palette: {
      success: {
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

export default function SignIn() {
    const [successful, setSuccessful] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(event.currentTarget)
        console.log(event.currentTarget)
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        const dataToSend = {
            email: data.get('email'),
            password: data.get('password')

        }

        axios.post(`http://localhost:8000/login`, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(
            (res) => {
                let resData = extractRoleAndJWT(res.data);
                localStorage.setItem("currentUser", resData[1]);
                if (resData[0] === "ROLE_COACH") {
                    localStorage.setItem("isMentee", "false");
                } else if (resData[0] === "ROLE_CLIENT") {
                    localStorage.setItem("isMentee", "true");
                } else if (resData[0] === "ROLE_SUPERUSER") {
                    localStorage.setItem("isAdmin", "true");
                }
                setSuccessful(true);
                console.log(resData);
                goto("/");
            }
            ,
            (err) => {
                alert("erreur lors de l'authentification, veuillez reentrer vos données, en cas de besoin contacter l'admin");
                console.error(err);
            }
        );

    };

    return (<
        ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>

        <Grid
        item
        xt={1}
        xs={false}
        sm={4}
        md={7}
        sx={{
          
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
        <Container component="main"
                      maxWidth="xs">



            <CssBaseline / >
                <
                    Box sx={
                    {
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }
                }>
                    <
                        Avatar sx={
                        {m: 1, bgcolor: '#000000'}
                    }>
                        < LockOutlinedIcon/>
                    <
        /Avatar> <
                    Typography component="h1"
                               variant="h5"
                               color="#000000">
                    Sign in
                <
        /Typography> <
                    Box component="form"
                        onSubmit={handleSubmit}
                        noValidate sx={
                    {mt: 1}
                }>
                    <
                        TextField margin="normal"
                                  required fullWidth id="email"
                                  label="Email Address"
                                  name="email"
                                  autoComplete="email"
                                  color="success"
                                  autoFocus /
                    >
                        <
                            TextField margin="normal"
                                      required fullWidth name="password"
                                      label="Password"
                                      type="password"
                                      color="success"
                                      id="password"
                                      autoComplete="current-password" /
                        >
                            <
                                FormControlLabel control={< Checkbox value="remember"
                                                                     color="success" / >
                                }
                                label = "Remember me" /
                                >
                                <Button type="submit"
                                           fullWidth variant="contained"
                                           color="success"
                                           sx={
                                               {mt: 3, mb: 2}
                                           }>
                                    Sign In <
        /Button> <
                                Grid container>
                                <
                                    Grid item xs>
                                    <
                                        Link href="/forgotPassword"
                                             color="#2e7d32"
                                             variant="body2">
                                        Mot de passe oublié ?
                                    <
        /Link>
                                </Grid>
                                <Grid item>
                                    <
                                        Link href="signup"
                                             color="#2e7d32"
                                             variant="body2"> {"S'incrire"}
                                    </Link>
                                < /Grid>
                            </Grid>
                            </Box>
                                </Box> <
                                Copyright sx = {
                            {mt: 8, mb: 4}
                            }
                                /> < /
                                Container >
                            {successful && (
                                <Box mt={5}>
                                <div
                                style={{
                                padding: "10px",
                                marginBottom: "-20px",
                                borderRadius: "3px 3px 3px 3px",
                                color: "#270",
                                backgroundColor: "#DFF2BF",
                            }}
                                >
                                Vous êtes connectés
                                </div>
                                </Box>
                                )}
                                </Grid>
                                </Grid>
                                </ThemeProvider>

                                );
                            }