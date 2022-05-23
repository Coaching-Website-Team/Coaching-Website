import React, { useState, Component } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { signUpService } from "../../service/signing";
import backgroundImage from "../../res/images/background_image.jpg";

const styles = {
  appBody: {
    minHeight: "100vh",
    backgroundColor: "rgba(255, 255, 255,0.5)",

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

    success: {
      main: "#F58025",
    },
  },
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {" "}
      {"Copyright © "}{" "}
      <Link color="inherit" href="https://mui.com/">
        MEET FITNESS{" "}
      </Link>{" "}
      {new Date().getFullYear()} {"."}{" "}
    </Typography>
  );
}

export default function SignUp() {
  const [successful, setSuccessful] = useState(false);
  const [value, setValue] = useState("");
  const [isCoach, setIsCoach] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value == "coach") setIsCoach(true);
    else setIsCoach(false);
  };

  const handleSubmit = (event) => {
    signUpService(event, setSuccessful, isCoach);
  };

  const handleFileUpload = (e) => {
    console.log(e.target.files[0].name);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
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
          <Container component="main" maxWidth="xs" sx={{my:10,mx:2,backgroundColor:"rgb(255,255,255,0.5)" }}>
            <CssBaseline />
            <Box
              sx={{
                width: "500px",
                marginTop: "10%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
                <LockOutlinedIcon />
              </Avatar>{" "}
              <Typography component="primary" variant="h5" color="success">
                Sign up{" "}
              </Typography>{" "}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="id"
                      name="name"
                      select
                      onChange={handleChange}
                      native="true"
                      color="success"
                      required
                      label="Choissez votre profil"
                      style={{ width: 400 }}

                      //margin="normal"
                      //variant="outlined"
                      // color = "success"

                      // inputRef={register({ required: "Choose one option" })}
                    >
                      <MenuItem value="">Choisissez une option</MenuItem>
                      <MenuItem value="coach">coach</MenuItem>
                      <MenuItem value="client">client</MenuItem>
                    </TextField>
                  </Grid>{" "}
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      color="success"
                      autoFocus
                    />
                  </Grid>{" "}
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      color="success"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="date"
                      name="date"
                      label="date de naissance"
                      type="date"
                      defaultValue="2000-05-24"
                      style={{ width: "100%" }}
                      sx={{ width: 220 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      color="success"
                    />
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      color="success"
                    />
                    {isCoach && (
                      <div>
                        <div>Inserez la carte nationale d'identité</div>
                        <input
                          class="form-control"
                          type="file"
                          id="cin"
                          name="cin"
                          accept="image/*,application/pdf"
                        />
                        <div>Inserez votre certificat de coaching</div>
                        <input
                          class="form-control"
                          type="file"
                          id="certificate"
                          name="certificate"
                          accept="image/*,application/pdf"
                        />
                        <div>Inserez votre Image</div>
                        <input
                          class="form-control"
                          type="file"
                          id="image"
                          name="image"
                          accept="image/*,application/pdf"
                        />
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12}></Grid>{" "}
                </Grid>{" "}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up{" "}
                </Button>{" "}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" color="#2e7d32" variant="body2">
                      Already have an account ? Sign in
                    </Link>{" "}
                  </Grid>{" "}
                </Grid>{" "}
              </Box>{" "}
            </Box>{" "}
            <Copyright sx={{ mt: 5 }} />{" "}
          </Container>
        </Grid>
      </Grid>
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
            Succès
          </div>
        </Box>
      )}{" "}
    </ThemeProvider>
  );
}
