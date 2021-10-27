import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Image from "./images/Amazon_logo.png"
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { StateContextConsumer } from "./StateProvider";
const email = "shubham";
var cartValue = 3;
const paddingStyle = {
  paddingLeft: "20px"
}

const StyleCss = {
  search: {
    position: 'relative',
    borderRadius: "5px",
    backgroundColor: "white",
    marginRight: "2px",
    paddingLeft: "5px",
    marginLeft: "30px",
    width: '50%'

  },
  searchIcon: {
    color: "black",
    padding: "0px 5px 0px 2px",
    right: "0px",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    // display: 'flex',
    alignItems: 'center',
    // color:"black",
    float: "left",
    // width:"50%",
    backgroundColor: "#f3a847",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: "1 1 1 0",
    // vertical padding + font size from searchIcon
    paddingLeft: "30px",
    width: '50%',
  },
  HeaderLink:
    { textDecoration: "none", color: "white" }
}
// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

export default class Header extends Component {

  render() {
    // return(
    //       <nav>
    //   <ul>
    //     <li>
    //       <Link to="/home">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/Login">Login</Link>
    //     </li>
    //     <li>
    //       <Link to="/RnO">Returns & Orders</Link>
    //     </li>
    //     <li>
    //       <Link to="/Prime">Amazon Prime</Link>
    //     </li>
    //     <li>
    //       <Link to="/Basket">Shopping Basket
    //       <ShoppingCartIcon style={{ color: "black" }} />
    //       </Link>
    //     </li>

    //   </ul>
    // </nav>

    // )
    // const classes = useStyles();
    return (
      <div>
        <AppBar position="fixed" style={{ backgroundColor: "#131921" }}>
          <Toolbar variant="dense">
            <Link to="/home" style={StyleCss.HeaderLink}>
              <img src={Image} height="40px" style={{ marginTop: "8px" }} /><span style={{ fontSize: "13px", position: "absolute", top: "18px" }}>.in</span>
            </Link>
            <p style={paddingStyle}><span style={{ fontSize: "10px", float: "left", paddingTop: "5px", marginLeft: "20px" }}>Hello {email}</span><br /><span style={{ fontSize: "15px", padding: "0px", fontWeight: "bold" }}>
              <RoomOutlinedIcon style={{ padding: "0px", fontSize: "17px" }} />  Select your address
            </span></p>

            <Typography color="inherit" style={{ backgroundColor: "white", height: "20px" }} >
              {/* <TextField
                label="With normal TextField"
                style={{backgroundColor:"white", height:"20px",fontSize:"20px",padding:"0px"}}
                InputProps={{
                    endAdornment: (
                    <InputAdornment style={{backgroundColor:"white", height:"30px",padding:"0px"}}>
                        <IconButton style={{backgroundColor:"white", height:"30px",padding:"0px"}}>
                        <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                /> */}

            </Typography>
            <div style={StyleCss.search}>
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIcon style={StyleCss.searchIcon} />
              <div >



              </div>

            </div>
            <Link to="/login" style={StyleCss.HeaderLink}>
              <p style={paddingStyle}><span style={{ fontSize: "10px", float: "left", paddingTop: "5px" }}>Hello {email}</span><br /><span style={{ fontSize: "15px", padding: "0px", fontWeight: "bold" }}>Sign Out</span></p>
            </Link>
            <Link to="/RnO" style={StyleCss.HeaderLink}>
              <p style={paddingStyle}><span style={{ fontSize: "10px", float: "left", paddingTop: "5px" }}>Returns</span><br /><span style={{ fontSize: "15px", padding: "0px", fontWeight: "bold" }}>& Orders</span></p>
            </Link>
            <Link to="/Prime" style={StyleCss.HeaderLink}>
              <p style={paddingStyle}><span style={{ fontSize: "10px", float: "left", paddingTop: "5px" }}>Your</span><br /><span style={{ fontSize: "15px", padding: "0px", fontWeight: "bold" }}>Prime</span></p>
            </Link>
            <Link to="/Basket" style={StyleCss.HeaderLink}>
              <IconButton edge="end"
                color="inherit" aria-label="menu">
                <ShoppingBasketIcon /><span style={{ fontSize: "10px", fontWeight: "bold", paddingLeft: "20px" }}>
                  <StateContextConsumer>
                    {(context) => {
                      var cart = context.cart;
                      Object.size = function (obj) {
                        var size = 0,
                          key;
                        for (key in obj) {
                          if (obj.hasOwnProperty(key)) size++;
                        }
                        return size;
                      };
                      var size = Object.size(cart);
                      return size;
                    }}
                  </StateContextConsumer>
                </span>
              </IconButton>
            </Link>

          </Toolbar>

        </AppBar>
      </div>
    )
  }
}