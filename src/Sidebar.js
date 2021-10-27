import { Grid ,Checkbox } from "@material-ui/core";
import React, { Component } from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default class Sidebar extends Component {
    render(props) {
        var star = [];
        var brandHtml=[];
        var brand={
            "GamingAccessories":[
                "BENGOO",
                "SanDisk",
                "Microsoft",
                "Logitech G",
                "PlayStation",
                "MOVONE",
                "amFilm"
            ],
            "ComputerAccessories":[
                "HP",
                "Lenovo",
                "ASUS",
                "Dell",
                "Acer",
                "AVITA",
                "MSI"
            ],
            "HolydayDeals":["ComputerAccessories","GamingAccessories"]
        }
        
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
        console.log(this.props.category);
        for(var i=0;i<brand[this.props.category].length;i++){
            brandHtml.push(
                <p style={{fontSize:"10px",padding:"0px"}} key={this.props.category.id}>
                    <span>
                        <Checkbox size="small" />
                    </span>
                    <span>
                        {brand[this.props.category][i]}
                    </span>
                </p>
            )
        }
        for (var i = 4; i > 0; i--) {
            for (var j = 0; j < 5; j++) {
                if (j < i) {
                    star.push(
                        <StarIcon  style={{fontSize: "20px", color: "#da582d"}} key={i+"_"+j}/>
                    )
                }
                else {
                    star.push(
                        <StarBorderIcon style={{fontSize: "20px", color: "#da582d"}}  key={i+"_"+j}/>
                    )

                }

            }
            star.push(
                <span style={{fontSize:"10px",position:"relative",top:"-6px"}} > & up</span>
            )
            star.push(
                <br  />
            )
        }

        return (
            <div style={{borderRight:"2px solid #ddd",height:"100%"}}>
                <h6 style={{ fontSize: "14px" }}>Climate Pledge Friendly</h6>
                <p style={{marginTop:"10px"}}><Checkbox size="small" /><span style={{ fontSize: "12px" }}>Climate Pledge friendly</span></p>
                <h6 style={{ fontSize: "14px",marginTop:"20px" }}>Department</h6>
                <p style={{ fontSize: "12px",marginTop:"10px" }}>{this.props.category}</p>
                <h6 style={{ fontSize: "12px",marginTop:"20px" }}>Avg. Customer Review</h6>
                <div style={{marginTop:"10px"}} >
                    {star}
                </div>
                <h6 style={{ fontSize: "12px",marginTop:"25px" }}>Brand</h6>
                {brandHtml}
                <h6 style={{ fontSize: "12px",marginTop:"25px" }}>Price</h6>
                <p style={{fontSize:"14px",paddingTop:"10px"}}>Under   &#8377;  1000</p>
                <p style={{fontSize:"14px",paddingTop:"10px"}}>&#8377; 1000  -  &#8377; 2000 </p>
                <p style={{fontSize:"14px",paddingTop:"10px"}}>&#8377; 2000  -  &#8377; 3000 </p>
                <p style={{fontSize:"14px",paddingTop:"10px"}}>&#8377; 2000  -  &#8377; 3000 </p>

            </div>
        )
    }
}