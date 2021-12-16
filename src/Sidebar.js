/* eslint-disable no-loop-func */
import { Button, Checkbox } from "@material-ui/core";
import React, { Component } from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { StateContextConsumer } from "./StateProvider";

export default class Sidebar extends Component {

    render(props) {
        var star = [];
        var brandHtml = [];
        var brand = {
            "GamingAccessories": [
                "BENGOO",
                "SanDisk",
                "Microsoft",
                "Logitech G",
                "PlayStation",
                "MOVONE",
                "amFilm"
            ],
            "ComputerAccessories": [
                "HP",
                "Lenovo",
                "ASUS",
                "Dell",
                "Acer",
                "AVITA",
                "MSI"
            ],
            "HolydayDeals": ["ComputerAccessories", "GamingAccessories"]
        }
        var BB = this.props.Brand;

        // for(var i=0;i<4;i++){
        //     var   styleCss={
        //         fontSize: "20px",
        //         color: "#da582d"
        //     }



        //     star.push(
        //         <div style={{display:"flex"}}>
        //             <StarIcon style={styleCss} />
        //             <StarIcon style={styleCss} />
        //             <StarIcon style={styleCss} />
        //             <StarIcon style={styleCss} />

        //         </div>
        //          )
        // }

        // console.log(brand[x]);
        console.log("inside sidebar : " + this.props.Brand.length);
        console.log(this.props.category);
        console.log(BB);
        var countForId = -1;
        for (var i = 0; i < BB.length; i++) {
            brandHtml.push(
                <p style={{ fontSize: "10px", padding: "0px" }} key={this.props.category.id}>
                    <span key={BB[countForId]}>
                        <StateContextConsumer >
                            {(context) => {
                                console.log("context.Filters[this.props.category]" + this.props.category);
                                console.log(context.Filters)
                                countForId++;
                                console.log(countForId)
                                var checkedvalue = (context.Filters[this.props.category]["checkedFilters"].includes(BB[countForId])) ? true : false;
                                return <Checkbox id={BB[countForId]} key={BB[countForId]} checked={checkedvalue} onChange={(e) => {
                                    countForId = -1;
                                    context.CheckedsFilter(e.target.checked, e.target.id, this.props.category)
                                }} />
                            }}
                        </StateContextConsumer>
                        {/* <Checkbox onChange={(e) => {
                                    console.log(e)
                                }} /> */}

                    </span>
                    <span>
                        {/* {brand[this.props.category][i]} */}
                        {BB[i]}
                    </span>
                </p>
            )
        }

        for (i = 4; i > 0; i--) {
            var count = 4

            for (var j = 0; j < 5; j++) {
                if (j < i) {
                    star.push(
                        <StateContextConsumer>{(context) => {
                            return <StarIcon id={i} style={{ fontSize: "20px", color: "#da582d" }} onClick={
                                (e) => {
                                    context.setStarFilter(e.target.id);
                                }
                            } key={i + "_" + j} />

                        }}
                        </StateContextConsumer>
                        // <StarIcon id ={i} style={{ fontSize: "20px", color: "#da582d" }} key={i + "_" + j} />
                    )
                }
                else {
                    star.push(
                        <StateContextConsumer>{(context) => {
                            return <StarBorderIcon id={i} style={{ fontSize: "20px", color: "#da582d" }} onClick={
                                (e) => {
                                    context.setStarFilter(e.target.id);
                                }
                            } key={i + "_" + j} />
                        }}
                        </StateContextConsumer>
                        // <StarBorderIcon id ={i} style={{ fontSize: "20px", color: "#da582d" }} key={i + "_" + j} />
                    )
                }
            }

            count--;
            star.push(
                <span style={{ fontSize: "10px", position: "relative", top: "-6px" }} > & up</span>
            )
            star.push(
                <br />
            )
        }

        return (
            <div style={{ borderRight: "2px solid #ddd", height: "100%" }}>
                <h6 style={{ fontSize: "14px" }}>Climate Pledge Friendly</h6>
                <p style={{ marginTop: "10px" }}><Checkbox size="small" /><span style={{ fontSize: "12px" }}>Climate Pledge friendly</span></p>
                <h6 style={{ fontSize: "14px", marginTop: "20px" }}>Department</h6>
                <p style={{ fontSize: "12px", marginTop: "10px" }}>{this.props.category}</p>
                <h6 style={{ fontSize: "12px", marginTop: "20px" }}>Avg. Customer Review</h6>
                <div style={{ marginTop: "10px" }} >
                    {/* {star} */}
                    <StateContextConsumer>
                        {(context) => {
                            return <button style={{ background: "none", border: "none" }} onClick={
                                () => {
                                        countForId = -1;
                                    context.setStarFilter(this.props.category,4);
                                }}>
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />


                            </button>
                        }}
                    </StateContextConsumer>
                    <br/>
                    <StateContextConsumer>
                        {(context) => {
                            return <button style={{ background: "none", border: "none" }} onClick={
                                () => {
                                        countForId = -1;
                                    context.setStarFilter(this.props.category,3);
                                }}>
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                

                            </button>
                        }}
                    </StateContextConsumer>
                    <br/>
                
                    <StateContextConsumer>
                        {(context) => {
                            return <button style={{ background: "none", border: "none" }} onClick={
                                () => {
                                        countForId = -1;
                                    context.setStarFilter(this.props.category,2);
                                }}>
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />


                            </button>
                        }}
                    </StateContextConsumer>
                    <br/>
                
                    <StateContextConsumer>
                        {(context) => {
                            return <button style={{ background: "none", border: "none" }} onClick={
                                () => {
                                        countForId = -1;
                                    context.setStarFilter(this.props.category,1);
                                }}>
                                <StarIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />
                                <StarBorderIcon style={{ fontSize: "20px", color: "#da582d" }} />


                            </button>
                        }}
                    </StateContextConsumer>
                
                </div>
                <h6 style={{ fontSize: "12px", marginTop: "25px" }}>Brand</h6>
                {brandHtml}
                <StateContextConsumer>
                    {(context) => {
                        return (
                            <div>
                                <h6 style={{ fontSize: "12px", marginTop: "25px" }}>Price</h6>
                                <button
                                    style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "10px", background: 'none', border: "none", cursor: "pointer" }}
                                    onClick={() => {
                                        countForId = -1;
                                        context.setPriceRange(this.props.category, 1000)
                                    }
                                    }
                                >under  &#8377;1,000
                                </button>
                                <br />
                                <button
                                    style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "10px", background: 'none', border: "none", cursor: "pointer" }}
                                    onClick={() => {
                                        countForId = -1;
                                        context.setPriceRange(this.props.category, 2000)
                                    }
                                    }>
                                    &#8377;1000 - &#8377;2000
                                </button>
                                <br />
                                <button
                                    style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "10px", background: 'none', border: "none", cursor: "pointer" }}
                                    onClick={() => {
                                        countForId = -1;
                                        context.setPriceRange(this.props.category, 3000)
                                    }
                                    }>
                                    &#8377;2000 - &#8377;3000
                                </button>
                                <br />
                                <button
                                    style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "10px", background: 'none', border: "none", cursor: "pointer" }}
                                    onClick={() => {
                                        countForId = -1;
                                        context.setPriceRange(this.props.category, 70000)
                                    }
                                    }>
                                    &#8377;3000 - &#8377;  4000
                                </button>
                                <br />

                            </div>
                        )
                    }
                    }
                </StateContextConsumer>
            </div>
        )
    }
}