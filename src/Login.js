import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, FormControl, Grid, IconButton, InputLabel, OutlinedInput, TextField, Typography } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import { VisibilityOff } from "@material-ui/icons";
import React, { Component } from "react";
import Image from "./images/Amazon_logo_black.png"
import banner from "./images/Home_banner.jpg";


export default class Login extends Component {
    render() {
        var values = { showPassword: false }
        return (
            <div style={{ marginTop: "50px", display: "flex" }} >
                <Grid container
                    justifyContent="center"
                    alignItems="center" direction="column" style={{ marginTop: "50px" }}>
                    <div>
                        <span>
                            <img src={Image} height="31px" width="103px" />
                        </span>
                    </div>
                    <div style={{ borderRadius: "4px", border: "1px #ddd solid", backgroundColor: "#fff   ", padding: "40px", width: "300px" }}>
                        <div>

                            <p style={{ fontSize: "30px" }}>Sign-in </p>
                            <div style={{ paddingTop: "10px" }}>
                                <p style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>
                                    Email or mobile phone number
                                </p>

                                <TextField id="outlined-basic" size="small" variant="outlined" style={{ width: "100%" }} />
                                <br />
                                <br />
                                <p style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>
                                    Password
                                </p>
                                <TextField type="password" id="outlined-basic" size="small" variant="outlined" style={{ width: "100%" }} />
                                <br />
                                <br />
                                <Button style={{ backgroundColor: "#f0c352", width: "100%" }}>Sign-In</Button>
                                <br />
                                <Checkbox size="small" ></Checkbox><span style={{ fontSize: "12px" }}>keep me signed in.</span>
                                <div>

                                    {/* <FormControl variant="outlined" size="small" style={{ height: "10px", }}>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        // onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    //   onClick={handleClickShowPassword}
                                                    //   onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl> */}

                                </div>

                            </div>

                            {/* <Card className="test">
      <CardActionArea>
        <CardMedia
          className="teat"
          image={banner}
          src={banner}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> */}
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}