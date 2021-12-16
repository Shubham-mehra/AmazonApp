import { Button, Checkbox, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { StateContextConsumer } from "./StateProvider";
import Productsdata from "./data/productData";


export default class Basket extends Component {
    render() {
        return (<StateContextConsumer>
            {(testvalue) => {
                console.log(testvalue.loginUser);
                console.log("testvalue.loginUser");
                var cart = testvalue.cart;
                var keys = Object.keys(cart);
                console.log(keys);
                var cart_product = [];
                var subTotal = 0;
                var cartemp = [];
                var totalItem=0;
                for(var i=0;i<keys.length;i++){
                    totalItem=totalItem+parseInt(cart[keys[i]].Quantity);
                }
                for (var j = 0; j < keys.length; j++) {
                    for ( i = 0; i < Productsdata.length; i++) {
                        if (Productsdata[i].prodId === keys[j]) {
                            cartemp.push(Productsdata[i]);
                            // var productId = Productsdata[i].prodId;
                            var productModelDetailTable = [];
                            // code for product detail in table  
                            if (Productsdata[i].modelDetail !== undefined) {
                                var productModelDetailTableKey = Object.keys(Productsdata[i].modelDetail);
                                for (var k = 0; k < productModelDetailTableKey.length; k++) {
                                    productModelDetailTable.push(
                                        <tr key={k}>
                                            <td style={{ paddingTop: "5px", fontWeight: "700" }}>
                                                {productModelDetailTableKey[k]}
                                            </td>
                                            <td style={{ paddingTop: "5px", paddingLeft: "10px" }}>
                                                {Productsdata[i].modelDetail[productModelDetailTableKey[k]]}
                                            </td>
                                        </tr>
                                    )
                                }
                            }
                            var optionHtml = [];
                            // for (var p = 1; p <= cart[keys[j]].Quantity; p++) {
                                for (var p = 1; p <=10; p++) {
                                    if(cart[keys[j]].Quantity===p){
                                        console.log(keys[j] + "#"+p)
                                        optionHtml.push(
                                            <option value={keys[j] + "#"+p} selected>{p}
                                            </option>
                                        )
                                    }
                                    else{
                                        optionHtml.push(
                                            <option value={keys[j] + "#"+p} >{p}
                                            </option>
                                        )
                                    }
                                
                            }

                            cart_product.push(
                                <Grid container direction="row" column="12" style={{ borderBottom: "1px solid #e7e7e7" }}>
                                    <Grid xs={2} style={{ padding: "20px" }}>
                                        <img src={Productsdata[i].image} alt="Product" style={{ width: "100%", }} />
                                    </Grid>
                                    <Grid xs={7} style={{ padding: "20px" }} >
                                        <div style={{ fontSize: "12px" }} >
                                            <p style={{ padding: "5px", fontSize: "18px", }}>
                                                {Productsdata[i].title}
                                            </p>
                                            <p style={{ padding: "5px", color: "#e5802d" }}>
                                                In stock on August 1, 2021
                                            </p>
                                            <p style={{ padding: "5px", display: Productsdata[i].freeDelivery ? "block" : "none" }}>
                                                Eligible for FREE Shipping
                                            </p>
                                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="Product" style={{ marginLeft: "5px" }} />
                                            <p style={{ padding: "5px" }}>
                                                <Checkbox size="small" style={{ padding: "0px" }} />
                                                <span >
                                                    &nbsp;&nbsp;This will be a gift
                                                    <span style={{ color: "#377598" }}>
                                                        &nbsp;Learn more
                                                    </span>
                                                </span>
                                            </p>
                                            <table >
                                                <tbody>
                                                    {/* <tr style={{ padding: "5px" }}>
                                                        <td style={{ fontWeight: "700" }}>
                                                            Size name:
                                                        </td>
                                                        <td style={{ paddingLeft: "5px" }}>
                                                            64GB
                                                        </td>
                                                    </tr>
                                                    <tr style={{ padding: "5px" }}>
                                                        <td style={{ fontWeight: "700" }}>
                                                            Colour:
                                                        </td>
                                                        <td style={{ paddingLeft: "5px" }}>
                                                            (PRODUCT)RED
                                                        </td>
                                                    </tr>
                                                    <tr style={{ padding: "5px" }}>
                                                        <td style={{ fontWeight: "700" }}>
                                                            Pattern name:
                                                        </td>
                                                        <td style={{ paddingLeft: "5px" }}>
                                                            iPhone 11
                                                        </td>
                                                    </tr> */}
                                                    {productModelDetailTable}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ marginTop: "10px", borderRight: "1px solid #e7e7e7", paddingRight: "10px" }}>
                                                <span style={{ fontSize: "11px" }}>Qty:&nbsp;&nbsp;</span>
                                                <select value={keys[j] + "#" + cart[keys[j]].Quantity} style={{
                                                    border: "1px solid #DDD",
                                                    "borderRadius": "4px 4px 4px 4px",
                                                    "padding": "3px"
                                                }}
                                                    key={i}
                                                    onChange={(event) => {
                                                        var eventArray = event.target.value.split("#");
                                                        var productId = eventArray[0];
                                                        var quantity = eventArray[1];
                                                        console.log(productId);
                                                        console.log(quantity);
                                                        testvalue.incrementFromCart(productId, quantity)

                                                    }}
                                                >
                                                    {optionHtml}
                                                </select>
                                            </div>
                                            <div style={{ marginTop: "10px", borderRight: "1px solid #e7e7e7", paddingRight: "10px", paddingLeft: "10px" }}>
                                                <span id={keys[j]} onClick={(event) => {
                                                    console.log(event.target.id);
                                                    testvalue.deleteProductfromCart(event.target.id);

                                                }} style={{ fontSize: "11px", cursor: "pointer" }}>Delete&nbsp;&nbsp;</span>
                                            </div>
                                            <div style={{ marginTop: "10px", borderRight: "1px solid #e7e7e7", paddingRight: "10px", paddingLeft: "10px" }}>
                                                <span style={{ fontSize: "11px" }}>Save for later&nbsp;&nbsp;</span>
                                            </div>
                                            <div style={{ marginTop: "10px", paddingRight: "10px", paddingLeft: "10px" }}>
                                                <span style={{ fontSize: "11px" }}>See more like this&nbsp;&nbsp;</span>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid xs={1} style={{ textAlign: "right", padding: "20px" }}>
                                        <p style={{ padding: "5px", fontSize: "18px", fontWeight: "700" }}>
                                            &#x20B9;&nbsp;{(Productsdata[i].price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        </p>
                                    </Grid>
                                </Grid>
                            );
                        }
                    }
                }
                for (i = 0; i < cartemp.length; i++) {
                    var price = cartemp[i].price;
                    var quantity = testvalue.cart[cartemp[i].prodId].Quantity;
                    subTotal = subTotal + price * quantity;
                }
                if (cartemp.length === 0) {
                    cart_product = [];
                    cart_product.push(
                        <div style={{ fontSize: "24px", fontWeight: "700", padding: "30px", textAlign: "center", borderBottom: "1px solid #e7e7e7" }}>
                            <p>Your Amazon Basket is empty</p>
                        </div>
                    )
                }
                console.log(cartemp);
                console.log(cart_product);
                if (testvalue.loginUser) {
                    return (<div style={{ marginTop: "50px" }}>
                        <div style={{ height: "100%", backgroundColor: "#eaeded", padding: "30px 18px 18px" }}>
                            <Grid container direction="row" style={{ width: "100%" }} spacing={3}>
                                <Grid item xs={9} >
                                    <div style={{ backgroundColor: "#FFF", padding: "20px 0 15px 0" }}>
                                        <div style={{ padding: "0 20px" }}>
                                            <p style={{ fontSize: "30px" }}>Shopping Cart</p>
                                            <p style={{ float: "right", fontSize: "12px" }}>Price</p>
                                            <div style={{ borderTop: "1px solid #e7e7e7", marginTop: "20px" }}>
                                                {cart_product}
                                            </div>
                                            <div style={{ textAlign: "right", paddingTop: "10px", fontSize: "18px" }}>
                                                <span >
                                                    Subtotal ({totalItem} item) :&nbsp;
                                                </span>
                                                <span style={{ fontWeight: "700" }}>
                                                    &#x20B9;&nbsp;{subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs="3">
                                    <div>
                                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="Product" style={{ width: "100%" }} />
                                    </div>
                                    <div style={{ backgroundColor: "white", width: "100%", marginTop: "10px", paddingTop: "20px " }}>
                                        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                                            <span  >
                                                Subtotal ({totalItem} item) :&nbsp;
                                            </span>
                                            <span style={{ fontWeight: "700" }}>
                                                &#x20B9;&nbsp;{subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            </span>

                                        </div>
                                        <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px" }}>
                                            <Button style={{ backgroundColor: "#ffd929", width: "100%", fontSize: "14px", borderRadius: "19px" }}>
                                                <p style={{ fontSize: "10px", fontFamily: 'Arial,sans-serif', fontWeight: "550" }}>
                                                    Proceed to Buy
                                                </p>
                                            </Button>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "white", width: "100%", marginTop: "10px", paddingTop: "20px " }}>
                                        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                                            <span  >
                                                Subtotal ({cartemp.length} item) :&nbsp;
                                            </span>
                                            <span style={{ fontWeight: "700" }}>
                                                &#x20B9;&nbsp;{subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            </span>

                                        </div>
                                        <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px" }}>
                                            <Button style={{ backgroundColor: "#ffd929", width: "100%", fontSize: "14px", borderRadius: "19px" }}>
                                                <p style={{ fontSize: "10px", fontFamily: 'Arial,sans-serif', fontWeight: "550" }}>
                                                    Proceed to Buy
                                                </p>
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>

                        </div>
                    </div>)
                }
                else {
                    return (
                        <Redirect to="/Login" />
                    )

                }
            }}
        </StateContextConsumer>);
    }
}