import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Title from "../Title"
import {Chip, Input} from "@mui/material";
import {useEffect, useState} from "react";
import {addOfferService} from "../../../service/offer";
import Navbar from "../../Navbar/NavbarUnauthenticated";
import backgroundImage from "../../../res/images/background_image.jpg";

function Copyright(props) {
    return (<Typography variant="body2" color="text.secondary"
                        align="center" {...props} > {'Copyright © '}
            < Link color="inherit"
                   href="/">
                MEET FITNESS</Link>{' '} {new Date().getFullYear()} {'.'} </Typography>
    );
}



export default function AddOffer() {

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
            success: {
            main: "#F58025",
          },
         
          grey: {
            main: "#8C92AC",
          },
        },
      });

    const [date, setDate] = React.useState(Date.now());
    const [values, setValues] = useState([]);
    const [currValue, setCurrValue] = useState("");
    const [successful, setSuccessful] = useState(false);
    const handleChange = (newValue) => {
        setDate(newValue);
    };
    const handleSubmit = (event) => {

        addOfferService(event,setSuccessful,values);
    };
    const handleKeyUp = (e) => {
        console.log(e.keyCode);
        if (e.keyCode == 32) {
            setValues((oldState) => [...oldState, e.target.value]);
            setCurrValue("");
        }
    };

    useEffect(() => {
        console.log(values);
    }, [values]);

    const handleChangee = (e) => {
        setCurrValue(e.target.value);
    };

    const handleDelete = ( item, index) =>{
        let arr = [...values]
        arr.splice(index,1)
        console.log(item)
        setValues(arr)
    }
    return (<ThemeProvider theme={theme}>
            <div className="App">
            <Navbar/>
            <div style={styles.appBody}>
            <Container component="main"
                       maxWidth="xs">

                <CssBaseline/>

               
                <Box sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: "500px"

                    }
                }>
                    
                    <Title/> < Box component="form"
                                   noValidate onSubmit={handleSubmit}
                                   sx={
                                       {mt: 3}
                                   }>
                    < Grid container spacing={2}>
                        <Grid item xs={12}
                              sm={6}>
                        </Grid> <Grid item xs={12}>
                        <TextField required fullWidth
                                   label="Enter the offre title"
                                   id="id"
                                   name="title"

                                   color="success"/>
                    </Grid> <Grid item xs={12}>
                        <TextField required fullWidth name="Enter the offer description"
                                   label="Enter the offer description"
                                   multiline={true}
                                   rows={4}
                                   id="description"
                                   name="description"
                                   color="success"
                        />
                    </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth
                                       name="minPrice"
                                       id="minPrice"
                                       label="minumum price"
                                       color="success"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth
                                       name="maxPrice"
                                       id="maxPrice"
                                       label="maximum price"
                                       color="success"/>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{fontSize: "13px"}}>Offer tags</div>
                            <div >
                                {values.map((item,index) => (
                                    <Chip  size="small" onDelete={()=>handleDelete(item,index)} label={item}/>
                                ))}
                            </div>
                            <Input
                                style={{border : ".5px solid #e0e0e0"}}
                                color = "success"
                                value={currValue}
                                onChange={handleChangee}
                                onKeyDown={handleKeyUp}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{fontSize: "13px"}}>Inserez l'image de l'offre</div>
                            <input className="form-control" type="file" id="image" name="image"
                                   accept="image/*,application/pdf"/>
                        </Grid>
                        {/*    <Grid item xs = {8} >*/}
                        {/*    <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
                        {/*  <DatePicker*/}
                        {/*    label="Creation date"*/}
                        {/*    value={date}*/}
                        {/*    onChange={(newValue) => {*/}
                        {/*      setDate(newValue);*/}
                        {/*    }}*/}
                        {/*    renderInput={(params) => <TextField {...params} />}*/}
                        {/*  />*/}
                        {/*</LocalizationProvider>*/}

                        {/*    </Grid>*/}
                    </Grid>
                    <Button type="submit"
                            fullWidth variant="contained"
                            color="success"
                            sx={
                                {mt: 3, mb: 2}
                            }>

                        Add the offer </Button> <Grid container justifyContent="flex-end">

                </Grid>
                </Box>
                </Box>
                <Copyright sx={
                    {mt: 5}
                }
                /> </Container>
                </div>
            </div>
        </ThemeProvider>
    );
}