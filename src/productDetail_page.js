/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Checkbox, Grid} from "@material-ui/core";
import React from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {  useLocation } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import { StateContextConsumer } from "./StateProvider";

// export default class ProductDetailPage extends Component{

//     render(props){
//         return(
//             <div style={{marginTop:"50px"}}>
//                 <p>
//                     {/* {this.props.productDetail.title}
//                     {this.props.productDetail.test} */}
//                     {/* {this.props.productDetail} */}
// {location.state.fromDashboard}
// test                </p>
//             </div>
//         )
//     }
// }

export default function ProductDetailPage() {
    let location = useLocation();
    // var ProductDetail={};
    // for(var i=0;i<Productsdata.length;i++){

    // }

    console.log("product:" + location.state.product);
    var InstockHtml = [];
    var productModelDetailTable = [];
    var ProductQuantity = 1;
    var ProductDetail = [];
    console.log("moreModelDetail:" + location.state.product.moreModelDetail.length);

    // code for product detail in table  
    if (location.state.product.modelDetail !== undefined) {
        var productModelDetailTableKey = Object.keys(location.state.product.modelDetail);
        for (var i = 0; i < productModelDetailTableKey.length; i++) {
            productModelDetailTable.push(
                <tr key={i}>
                    <td style={{ paddingTop: "10px", fontWeight: "700" }}>
                        {productModelDetailTableKey[i]}
                    </td>
                    <td style={{ paddingTop: "10px", paddingLeft: "10px" }}>
                        {location.state.product.modelDetail[productModelDetailTableKey[i]]}
                    </td>
                </tr>
            )
        }
    }



    for (var j = 0; j < location.state.product.moreModelDetail.length; j++) {
        ProductDetail.push(
            <li style={{ marginTop: "10px", marginLeft: "15px", fontSize: "14px" }} key={j}>
                {location.state.product.moreModelDetail[j]}
            </li>
        )
    }
    // for(var i=0;i<location.state.product.moreModelDetail.length;i++){
    //     ProductDetail.push(
    //         <li style={{ marginTop: "10px", marginLeft: "15px", fontSize: "14px" }}>
    //             {location.state.product.moreModelDetail[i]}
    //         </li>
    //     )
    // }

    if (location.state.product.stockIn) {
        InstockHtml.push(<p style={{ fontSize: "20px", marginTop: "10px", color: "#067D62" }}>
            In stock.
        </p>);
    }
    else {
        InstockHtml.push(<p style={{ fontSize: "20px", marginTop: "10px", color: "#D40A0A" }}>
            Out stock.
        </p>)
    }
    var star = [];
    for (i = 1; i <= 5; i++) {
        if (i <= location.state.product.stars) {
            var styleCss = {
                fontSize: "20px",
                color: "#f7a42f",
                borderColor: "1px solid #e59148"
            }
            star.push(
                <StarIcon style={styleCss} key={i} />
            )
        }
        else {
             styleCss = {
                fontSize: "20px",
                color: "#e59148"
            }
            star.push(
                <StarBorderIcon style={styleCss} key={i} />
            )
        }
    }
    var saveMoney = (location.state.product.MRP - location.state.product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    var savePercentage = (((location.state.product.MRP) - (location.state.product.price)) / (location.state.product.MRP) * 100).toFixed(0);
    return (
        <div style={{ marginTop: "50px" }}>


            <p>
                {/* {this.props.productDetail.title}
                {this.props.productDetail.test} */}
                {/* {this.props.productDetail} */}
                {console.log(location.state.product)}
            </p>
            <div>
                <Grid container direction="row" columns={10}>
                    <Grid >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px", height: "50px" }}>
                            Electronics
                        </p>
                    </Grid>
                    <Grid >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px" }}>

                            Mobile & Accessories
                        </p>
                    </Grid>
                    <Grid >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px" }}>

                            Laptop & Accessories
                        </p>
                    </Grid>
                    <Grid >
                        <p style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "17px", paddingBottom: "10px" }}>
                            TV & Home Entertainment
                        </p>
                    </Grid>
                    <Grid  >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px" }}>
                            Audio
                        </p>
                    </Grid>
                    <Grid  >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px" }}>
                            Cameras
                        </p>
                    </Grid>
                    <Grid  >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px" }}>
                            Computer Peripherals
                        </p>
                    </Grid>
                    <Grid >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px" }}>
                            Smart Technology
                        </p>
                    </Grid>
                    <Grid >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px" }}>
                            Musical Instruments
                        </p>
                    </Grid>
                    <Grid >
                        <p style={{ fontSize: "14px", paddingLeft: "17px", paddingTop: "17px", paddingBottom: "10px" }}>
                            Office & Stationery
                        </p>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container direction="row" >
                    <Grid xs={4} container direction="row" style={{ position: "relative" }}>
                        {/* <Grid container direction="row" xs={4} > */}
                        <Grid xs={3} style={{ position: "sticky" }} >
                            <ul>
                                <li style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                                    <img src={location.state.product.image}  alt="placeholder"style={{ height: "40px", width: "40px", padding: "5px", borderRadius: "2px", border: "1px solid #d5d9d9" }} />
                                </li>
                                <li style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                                    <img src={location.state.product.image} alt="placeholder"style={{ height: "40px", width: "40px", padding: "5px", borderRadius: "2px", border: "1px solid #d5d9d9" }} />
                                </li>
                                <li style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                                    <img src={location.state.product.image} alt="placeholder"style={{ height: "40px", width: "40px", padding: "5px", borderRadius: "2px", border: "1px solid #d5d9d9" }} />
                                </li>
                                <li style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                                    <img src={location.state.product.image} alt="placeholder"style={{ height: "40px", width: "40px", padding: "5px", borderRadius: "2px", border: "1px solid #d5d9d9" }} />
                                </li>
                                <li style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                                    <img src={location.state.product.image} alt="placeholder"style={{ height: "40px", width: "40px", padding: "5px", borderRadius: "2px", border: "1px solid #d5d9d9" }} />
                                </li>
                                <li style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                                    <img src={location.state.product.image} alt="placeholder"style={{ height: "40px", width: "40px", padding: "5px", borderRadius: "2px", border: "1px solid #d5d9d9" }} />
                                </li>
                            </ul>
                        </Grid>
                        <Grid xs={9}>
                            <img src={location.state.product.image}alt='placeholder' style={{ width: "90%", marginTop: "20%" }} />
                        </Grid>

                        {/* </Grid> */}
                    </Grid>
                    <Grid xs={5}>
                        <div>
                            {location.state.product.title}
                        </div>
                        <div>
                            <p>
                                Visit My Store
                            </p>
                            <div style={{ fontSize: "12px", borderBottom: "1px solid #e7e7e7" }}>
                                <div style={{ display: "flex", marginTop: "10px" }}>
                                    <p >{star}</p><span style={{ marginLeft: "10px", marginTop: "5px" }}>32 Rating | 32 answered questions</span>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: "13px", marginTop: "10px", }}>M.R.P.:	  &nbsp;&nbsp;<span style={{ textDecoration: "line-through" }}>₹{location.state.product.MRP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </span>
                                </p>
                                <p style={{ fontSize: "13px", marginTop: "10px" }}>
                                    Price: &nbsp;	₹{location.state.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                </p>
                                <p style={{ fontSize: "13px", marginTop: "10px" }}>
                                    You Save:	₹{saveMoney} ({savePercentage}%)
                                </p>
                                <p style={{ fontSize: "10px", marginTop: "5px", marginLeft: "50px" }}>
                                    Inclusive of all taxes
                                </p>
                                <p style={{ fontSize: "13px", marginTop: "30px" }}>

                                    FREE delivery: Friday, July 30 Details
                                </p>
                                <p style={{ fontSize: "13px", marginTop: "10px" }}>

                                    Fastest delivery: Thursday, July 29
                                </p>
                                <p style={{ fontSize: "13px", marginTop: "10px" }}>

                                    Order within 16 hrs and 20 mins Details
                                </p>
                                <p style={{ fontSize: "13px", marginTop: "10px" }}>

                                    EMI starts at ₹4,989 per month. EMI option
                                </p>
                            </div>
                            <div>
                                <table width="100%" style={{ border: "1px solid #e7e7e7", fontSize: "12px", borderRadius: "5px", marginTop: "15px" }}>
                                    <tbody>
                                        <tr >
                                            <td style={{ borderBottom: "1px solid #e7e7e7" }}>
                                                <div style={{ padding: "10px" }}>
                                                    <span style={{ color: "#B12704", fontWeight: "700" }}>
                                                        Save Extra
                                                    </span>
                                                    <span>
                                                        &nbsp;&nbsp;with 4 offers
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ borderBottom: "1px solid #e7e7e7" }}>
                                                <div style={{ padding: "10px" }}>
                                                    <span style={{ color: "#B12704", fontWeight: "700" }}>
                                                        No Cost EMI:
                                                    </span>
                                                    <span>
                                                        &nbsp;&nbsp; Avail No Cost EMI on select cards for orders above ₹3000 DetailsNo Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000 Details
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ borderBottom: "1px solid #e7e7e7" }}>
                                                <div style={{ padding: "10px" }}>
                                                    <span style={{ color: "#B12704", fontWeight: "700" }}>
                                                        Exchange Offer:
                                                    </span>
                                                    <span>
                                                        &nbsp;&nbsp;  Up to ₹18,150.00 off on Exchange
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ borderBottom: "1px solid #e7e7e7" }}>
                                                <div style={{ padding: "10px" }}>
                                                    <span style={{ color: "#B12704", fontWeight: "700" }}>
                                                        Bank Offer (3):
                                                    </span>
                                                    <span>
                                                        &nbsp;&nbsp; Prime Savings : Flat Rs.500 Instant Discount with HDFC Bank Debit Cards (Non-EMI) on Minimum puchase of Rs.5000. For Prim… | See All
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <div style={{ padding: "10px" }}>
                                                    <span style={{ color: "#B12704", fontWeight: "700" }}>
                                                        Partner Offers (7):
                                                    </span>
                                                    <span>
                                                        &nbsp;&nbsp;  Buy any Laptop and get Hungama Play subscription upto 1 year worth ₹799  | See All
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <div style={{ padding: "10px" }}>
                                                    <span style={{ color: "#007185" }}>
                                                        see less
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ display: "flex", borderBottom: "1px solid #e7e7e7" }}>
                                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                                    <div style={{ width: "35px", height: "35px", margin: "auto" }}>
                                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                                            alt='placeholder'
                                            style={{
                                                width: "100%",
                                                height: "100%",

                                            }} />
                                    </div>
                                    <div style={{ textDecoration: "none", color: "#007185", textAlign: "center", padding: "10px" }}>
                                        <a href="#" style={{ fontSize: "12px" }} >
                                            7 Days Replacement
                                        </a>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                                    <div style={{ width: "35px", height: "35px", margin: "auto" }}>
                                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
                                           alt='product'
                                           style={{
                                                width: "100%",
                                                height: "100%",

                                            }} />
                                    </div>
                                    <div style={{ textDecoration: "none", color: "#007185", textAlign: "center", padding: "10px" }}>
                                        <a style={{ fontSize: "12px" }} >

                                            Amazon Delivered

                                        </a>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                                    <div style={{ width: "35px", height: "35px", margin: "auto" }}>
                                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                                           alt='product'
                                            style={{
                                                width: "100%",
                                                height: "100%",

                                            }} />
                                    </div>
                                    <div style={{ textDecoration: "none", color: "#007185", textAlign: "center", padding: "10px" }}>
                                        <a style={{ fontSize: "12px" }} >

                                            3 Year Warranty

                                        </a>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                                    <div style={{ width: "35px", height: "35px", margin: "auto" }}>
                                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png"
                                           alt='product'
                                           style={{
                                                width: "100%",
                                                height: "100%",

                                            }} />
                                    </div>
                                    <div style={{ textDecoration: "none", color: "#007185", textAlign: "center", padding: "10px" }}>
                                        <a style={{ fontSize: "12px" }} >

                                            No-Contact Delivery

                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div>
                                {InstockHtml}

                                <p style={{ fontSize: "14px", marginTop: "10px" }}>

                                    Sold by <span style={{ color: "#007185" }}>{location.state.product.soldBy}</span> and Fulfilled by <span style={{ color: "#007185" }}>{location.state.product.fullfilledBy}</span>
                                </p>
                                <p style={{ marginBottom: "10px", marginTop: "20px" }}>
                                    Pattern name: <span style={{ fontWeight: "700" }}> {location.state.product.Pattern_name}</span>
                                </p>

                                <table style={{
                                    fontSize: "14px",
                                    textIndent: "initial", borderSpacing: "2px"
                                }}>
                                    <tbody>
                                        {productModelDetailTable}
                                    </tbody>
                                </table>
                                <hr style={{ border: "1px solid #e7e7e7", marginTop: "10px" }}></hr>
                                <p style={{ fontSize: "14px", marginTop: "15px", fontWeight: "700" }}>
                                    About this item
                                </p>
                                <ul >
                                    {/* <li style={{ marginTop: "10px", marginLeft: "15px", fontSize: "14px" }}>
                                    RAM 8GB DDR 4, 512GB SSD, Windows 10 Home
                                </li>
                                    <li style={{ marginTop: "10px", marginLeft: "15px", fontSize: "14px" }}>
                                        Upto 17 hrs backup with 80Wh Battery
                                    </li>
                                    <li style={{ marginTop: "10px", marginLeft: "15px", fontSize: "14px" }}>
                                        17 Inch Ultra-Lightweight (1.35 kg) Laptop with 10th Gen Intel i7-1065G7 w/Intel Iris Plus
                                    </li>
                                    <li style={{ marginTop: "10px", marginLeft: "15px", fontSize: "14px" }}>
                                        USB3.1 (x3), USB3.1 Type C (x1, Thunderbolt 3, USB PD), DC-In, HDMI(2.0), HP Out
                                    </li> */}
                                    {ProductDetail}
                                </ul>
                                <p style={{ fontSize: "14px", marginTop: "10px" }}>
                                    › See more product details
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={2} style={{ padding: "5px", textAlign: "center" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ fontSize: "12px", padding: "5px", color: "#007185" }}>
                                Share :
                            </div>
                            <div>
                                <EmailOutlinedIcon size="small" />
                                <FacebookIcon size="small" />
                            </div>
                        </div>
                        <div style={{ border: "1px solid #d5d9d9", borderRadius: "5px", padding: "14px 18px", marginBottom: "20px" }}>
                            <div style={{ marginTop: "10px", textAlign: "left" }}>
                                <span style={{ fontSize: "14px" }}>Quantity:   &nbsp;&nbsp;</span>
                                <select id="selectId"
                                    onChange={(event) => {
                                        ProductQuantity = event.target.value;
                                    }}
                                    style={{
                                        border: "1px solid #DDD",
                                        "borderRadius": "4px 4px 4px 4px",
                                        "padding": "3px"
                                    }}>
                                    <option value="1" selected>1
                                    </option>
                                    <option value="2">2
                                    </option>
                                    <option value="3">3
                                    </option>
                                    <option value="4">4
                                    </option>
                                    <option value="5">5
                                    </option>
                                    <option value="6">6
                                    </option>
                                </select>

                            </div>
                            <div style={{ marginTop: "10px", height: "29px" }}>
                                <StateContextConsumer>
                                    {(context) => {
                                        console.log(location.state.product.prodId);
                                        return <div>
                                            <Button onClick={() => {
                                                console.log(document.getElementById("selectId").value);
                                                context.addToCart(location.state.product.prodId,ProductQuantity);
                                            }} style={{ backgroundColor: "#ffd929", width: "100%", fontSize: "14px", borderRadius: "19px" }}><p style={{ fontSize: "10px", fontFamily: 'Arial,sans-serif', fontWeight: "550" }}>Add to Cart</p></Button>
                                        </div>
                                    }}
                                </StateContextConsumer>

                            </div>
                            <div style={{ marginTop: "10px", height: "29px" }}>
                                <Button style={{ backgroundColor: "#f38830", width: "100%", fontSize: "14px", borderRadius: "19px" }}><p style={{ fontSize: "10px", fontFamily: 'Arial,sans-serif', fontWeight: "550" }}>Buy</p></Button>
                            </div>
                            <div style={{ borderBottom: "1px solid #e7e7e7" }}>
                                <div style={{ display: "flex" }}>
                                    <div >
                                        <span >
                                            <LockIcon fontSize="small" style={{ marginTop: "10px", marginBottom: "10px" }} color="disabled" />
                                        </span>
                                    </div>
                                    <div style={{ fontSize: "12px", paddingTop: "15px" }}>
                                        <span>
                                            &nbsp;&nbsp;Secure transaction
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", marginBottom: "10px" }}>
                                    <div >
                                        <Checkbox defaultChecked size="small" style={{ padding: "0px" }} color="default" />
                                    </div>
                                    <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                                        &nbsp;&nbsp;Add gift options
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: "5px", paddingBottom: "10px" }}>
                                <div style={{ display: "flex", borderBottom: "1px solid #e7e7e7", marginBottom: "10px" }}>
                                    <div><RoomOutlinedIcon size="small" />
                                    </div>
                                    <div style={{ padding: "3px", marginBottom: "10px" }}>
                                        <span style={{ fontSize: "12px" }}>
                                            Select delivery location
                                        </span>
                                    </div>
                                </div>
                                <Button style={{ backgroundColor: "#e8eaed", width: "100%", fontSize: "14px", borderRadius: "3px", padding: "5px" }}><p style={{ fontSize: "10px", fontFamily: 'Arial,sans-serif', fontWeight: "550" }}>Add to Cart</p></Button>

                            </div>

                        </div>




                    </Grid>
                </Grid>

            </div>
        </div>
    )
}