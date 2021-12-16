import React, { Component } from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from "react-router-dom";


export default class ProductCard extends Component {

    render(props) {
        // const styleCss = {
        //     star:
        //     {

        //     }
        // }
        var star = [];
        for (var i = 1; i <= 5; i++) {
            if (i <= this.props.data.stars) {
                var styleCss = {
                    fontSize: "20px",
                    color: "#da582d"
                }
                star.push(
                    <StarIcon style={styleCss} key={i} />
                )
            }
            else {
                 styleCss = {
                    fontSize: "20px",
                    color: "#da582d"
                }
                star.push(
                    <StarBorderIcon style={styleCss} key={i} />
                )
            }


        }
        var displayFreeDelivery = (this.props.data.freeDelivery) ? { display: "block" } : { display: "none" };
        // console.log(this.props.data.title);
        return (


            <Link to={{
                pathname: "/productDetail",
                search: "?category="+this.props.data.Category+"&product="+this.props.data.title+"&id="+this.props.data.id,
                hash: "#GamingAccessories",
                state: { product: this.props.data
                     }
              }}
              style={{ textDecoration: "none", color: "black" }} >
                <div style={{ marginTop: "20px", borderBottom: "2px solid #ddd", width: "100%", paddingBottom: "10px" }} >
                    <div style={{ display: "flex" }}>
                        <div>
                            <img src={this.props.data.image} alt="demoimage" style={{ width: "228px", height: "160px" }} />

                        </div>
                        <div style={{ textDecoration: "none", paddingLeft: "100px" }}>
                            <div className="sg-col-inner">
                                <div className="productTile">
                                    <p className="productsTitle" style={{ fontSize: "18px", paddingTop: "5px" }}>
                                        {this.props.data.title}
                                    </p>
                                    <p style={{ fontSize: "13px", paddingTop: "5px", color: "#565959" }}>
                                        by {this.props.data.by}
                                    </p>
                                    <div style={{ display: "flex", paddingTop: "10px" }}>
                                        {star}
                                        {/* <StarIcon style={styleCss.star} />
                                    <StarIcon style={styleCss.star} />
                                    <StarIcon style={styleCss.star} />
                                    <StarIcon style={styleCss.star} />
                                    <StarIcon style={styleCss.star} /> */}
                                    </div>
                                    <div className="price" style={{ paddingTop: "10px", color: "#b23124" }}>
                                        <span style={{ fontSize: "10px", paddingTop: "-9px", position: "absolute" }}>&#8377;</span><span> &nbsp;&nbsp;{this.props.data.price}</span>
                                    </div>
                                    <p style={{ fontSize: "14px", paddingTop: "5px" }}>{this.props.data.emi}</p>
                                    <div style={{ paddingTop: "10px" }}>
                                        <span><CheckIcon style={{ fontSize: "15px", color: "#da582d" }} /><span style={{ fontSize: "15px", color: "#379cc8", fontWeight: "bold" }}>Prime</span></span><span style={{ fontSize: "15px", paddingTop: "5px" }}> {this.props.data.deliverTime}</span>
                                    </div>
                                    <span style={displayFreeDelivery}>
                                        <p style={{ fontSize: "10px", paddingTop: "5px" }}>
                                            FREE Delivery by Amazon
                                           
                                           
                                        </p>
                                    </span>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </Link>
        )
    }
}