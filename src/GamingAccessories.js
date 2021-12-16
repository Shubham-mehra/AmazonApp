import React, { Component } from "react";
import Sidebar from "./Sidebar";
import ProductsCard from "./CategoryProductDisplay";
import { Button, Grid } from "@material-ui/core";
import { StateContextConsumer } from "./StateProvider";
import Productsdata from "./data/productData";
export default class GamingAccessories extends Component {
    render(props) {
        var productHtml = [];
        // var Productsdata = [
        //     {
        //         id: "1",
        //         title: "PlayStation DualSense Wireless Controller – Midnight Black",
        //         by: "PlayStation",
        //         stars: 1,
        //         image: "https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_UY218_.jpg",
        //         price: "77,990",
        //         emi: "Save extra with No Cost EMI",
        //         deliverTime: "Get it by Tomorrow, July 17",
        //         freeDelivery: true,
        //         Category: "GamingAccessories"
        //     },
        //     {
        //         id: "2",
        //         title: "Xbox Wireless Controller - Shock Blue",
        //         by: "Microsoft",
        //         stars: 5,
        //         price: "73,990",
        //         image: "https://m.media-amazon.com/images/I/51v0T9+NgdL._AC_UY218_.jpg",
        //         emi: "Save extra with No Cost EMI",
        //         deliverTime: "Get it by Monday, 19",
        //         freeDelivery: false,
        //         Category: "GamingAccessories"
        //     },
        //     {
        //         id: "3",
        //         title: 'Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6" FHD IPS Thin & Light Laptop (16GB/512GB SSD/Win 10/Office/Integrated Iris Xe Graphics/Fingerprint',
        //         by: "Dell",
        //         stars: 4,
        //         image: "https://m.media-amazon.com/images/I/61WNxdAeAoL._AC_UY218_.jpg",
        //         price: "66,990",
        //         emi: "Save extra with No Cost EMI",
        //         deliverTime: "Get it by Tomorrow, July 17",
        //         freeDelivery: true,
        //         Category: "ComputerAccessories"
        //     },
        //     {
        //         id: "4",
        //         title: 'LG Gram 10th Gen Intel Core i5-1035G7 14" (35.56cms) IPS Full HD (1920X1080) Thin and Light Laptop (8GB/256GB SSD/Windows 10 64-bit/Dark Silver/999gms), 14Z90N',
        //         by: "LG",
        //         stars: 4,
        //         price: "62,990",
        //         image: "https://m.media-amazon.com/images/I/71Dv5BtTh8L._AC_UY218_.jpg",
        //         emi: "Save extra with No Cost EMI",
        //         deliverTime: "Get it by Monday, 19",
        //         freeDelivery: true,
        //         Category: "ComputerAccessories"
        //     },
        //     {
        //         id: "5",
        //         title: 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac',
        //         by: "Climate Pledge Friendly",
        //         stars: 4,
        //         price: "2,990",
        //         image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY218_.jpg",
        //         emi: "Save extra with No Cost EMI",
        //         deliverTime: "Get it by Monday, 19",
        //         freeDelivery: true,
        //         Category: "GamingAccessories"
        //     },
        //     {
        //         id: "6",
        //         title: 'BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games',
        //         by: "NES",
        //         stars: 4,
        //         price: "12,990",
        //         image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
        //         emi: "Save extra with No Cost EMI",
        //         deliverTime: "Get it by Monday, 19",
        //         freeDelivery: true,
        //         Category: "GamingAccessories"
        //     }
        // ];
        var filteredProduct = () => {
            return (
                <StateContextConsumer>
                    {(testvalue) => {
                        var productdd = [];
                        testvalue.Filters.this.props.selectedCategory.forEach(element => {
                            productdd.push(Productsdata.filter(filterd => {
                                return filterd.by === element
                            }))
                        });
                        console.log(productdd);
                    }}
                </StateContextConsumer>
            )
        }

        var sidebarselectionitems = [];

        for (var i = 0; i < Productsdata.length; i++) {
            if (this.props.selectedCategory === Productsdata[i].Category) {
                sidebarselectionitems.push(Productsdata[i]['by']);
                productHtml.push(
                    <ProductsCard data={Productsdata[i]} key={this.props.selectedCategory.id} />
                )
            }

        }
        console.log(sidebarselectionitems);
        return (

            <div>
                <div style={{
                    marginTop: "50px",
                    borderTop: "1px solid #ccc",
                    borderBottom: "1px solid #ccc",
                    boxShadow: "0 0 10px #ddd",
                    backgroundColor: "#fff",
                    position: "relative"
                }}>
                    <p style={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: "50px", fontSize: "14px" }}>
                        1-16 of over 20,000 results
                    </p>
                </div>
                <div style={{ display: "flex", marginTop: "50px" }}>

                    <Grid container direction="row">
                        <Grid xs={2} style={{ paddingLeft: "10px" }}>
                            <Sidebar category={this.props.selectedCategory} Brand={sidebarselectionitems} />
                        </Grid>
                        <Grid xs={8}>
                            <div style={{ paddingLeft: "50px", width: "100%", }}>
                                <StateContextConsumer>
                                    {(testvalue) => {
                                        return <div>{testvalue.productId}
                                            <Button onClick={testvalue.toggleTheme}> click
                                            </Button></div>
                                    }}

                                </StateContextConsumer>
                                <StateContextConsumer>
                                    {(testvalue) => {
                                        var productdd = [];
                                        console.log("this.props.selectedCategory.id" + this.props.selectedCategory);
                                        console.log(testvalue);
                                        testvalue.Filters[this.props.selectedCategory]["checkedFilters"].forEach(element => {
                                            var x = Productsdata.filter(filterd => {
                                                return filterd.by === element
                                            })
                                            x.forEach(elementt => {
                                                productdd.push(elementt)
                                            })
                                        });
                                        if (productdd.length === 0) {
                                            var productHtmld = []
                                            for (var i = 0; i < Productsdata.length; i++) {
                                                if (this.props.selectedCategory === Productsdata[i].Category) {
                                                    // sidebarselectionitems.push(Productsdata[i]['by']);
                                                    console.log(testvalue.Filters[this.props.selectedCategory].priceRange)
                                                    //  if (Productsdata[i].price < testvalue.Filters[this.props.selectedCategory].priceRange) {
                                                    productHtmld.push(
                                                        <ProductsCard data={Productsdata[i]} key={this.props.selectedCategory.id} />
                                                    )
                                                    // }

                                                }

                                                // productHtmld.push(productdd[i].by)
                                            }
                                            return (
                                                <div>{productHtmld}</div>
                                            )
                                        }
                                        else {
                                            productHtmld = []
                                            for (i = 0; i < productdd.length; i++) {
                                                if (this.props.selectedCategory === productdd[i].Category) {
                                                    // sidebarselectionitems.push(Productsdata[i]['by']);
                                                    // if (Productsdata[i].price < testvalue.Filters[this.props.selectedCategory].priceRange) {
                                                    if (testvalue.Filters[this.props.selectedCategory].priceRange === "all") {
                                                        productHtmld.push(
                                                            <ProductsCard data={productdd[i]} key={this.props.selectedCategory.id} />
                                                        )
                                                    }
                                                    else {
                                                        if (productdd[i].price < testvalue.Filters[this.props.selectedCategory].priceRange) {
                                                            productHtmld.push(
                                                                <ProductsCard data={productdd[i]} key={this.props.selectedCategory.id} />
                                                            )
                                                        }
                                                    }

                                                    // }
                                                }

                                                // productHtmld.push(productdd[i].by)
                                            }
                                            return (
                                                <div>{productHtmld}</div>
                                            )

                                        }
                                    }
                                    }
                                </StateContextConsumer>
                                {/* <ProductsCard/> */}
                                {/* {productHtml} */}
                            </div>
                        </Grid>
                    </Grid>


                </div>
            </div>


        )
    }
}