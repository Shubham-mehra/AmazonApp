import { ThreeSixty } from "@material-ui/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Imagedata from "./images/jeans3.jpg"
export default class product extends Component{
    render(props){
        const styleCss={
            card: { 
                maxWidth:"250px",
                margin: "auto",
                textAlign: "center",
                fontFamily: "arial",
                paddingBottom:"0px",
                backgroundImage:`url(Imagedata)`
              },
              
              price: {
                color: "grey",
                fontSize: "22px"
              },
              
              card_button: {
                border: "none",
                outline: "0",
                padding: "12px",
                color: "white",
                backgroundColor: "#000",
                textAlign: "center",
                cursor: "pointer",
                width: "100%",
                fontSize: "18px"
              },
              OuterCard:
              {
                    background:"#fff",
                    height:"330px",
                    position:"relative",
                    overflow:"hidden",
                    padding:"20px",
                    paddingTop:"0px",
                    margin:"10px"
                    
                }
                // .gw-card-layout .a-cardui .a-cardui-header{padding:0 20px;margin-bottom:10px}.gw-card-layout .a-cardui .a-cardui-footer{padding:0 20px;margin-bottom:20px;position:absolute;bottom:0;width:100%}.gw-card-layout .a-cardui .a-cardui-body{padding:0 20px 56px 20px;margin-bottom:0}.gw-card-layout .a-cardui .a-cardui-body:last-child{padding-bottom:20px}.gw-card-layout .a-cardui:last-child{margin-bottom:0}.a-lt-ie9 .gw-card-layout .a-cardui .a-cardui-body{padding-bottom:20px}.gw-card-layout{font-size:13px!important;line-height:19px!important}.gw-card-layout .a-size-base{font-size:13px!important;line-height:19px!important}.gw-card-layout .a-size-small{font-size:12px!important;line-height:18px!important}.gw-card-layout .a-size-base-plus{font-size:15px!important;line-height:21px!important}.gw-card-layout .a-size-medium{font-size:17px!important;line-height:21.34px!important}.gw-card-layout .a-size-large{font-size:21px!important;line-height:27.3px!important}.gw-card-layout h2{font-size:21px!important;line-height:27.3px!important}.truncate-1line,.truncate-2line{display:block;overflow:hidden;text-overflow:ellipsis;-ms-text-overflow:ellipsis}.truncate-1line{white-space:nowrap}.truncate-2line{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;max-height:38px}.truncate-2line.a-size-base{max-height:38px}.truncate-2line.a-size-small{max-height:36px}.truncate-2line.a-size-base-plus{max-height:42px}.truncate-2line.a-size-medium{max-height:42.67px}.truncate-2line.a-size-large{max-height:54.6px}h2.truncate-2line{max-height:54.6px}.gw-card-layout .a-cardui.gw-media-card{padding-top:0;color:#fff}.gw-card-layout .a-cardui.gw-media-card .a-cardui-footer,.gw-card-layout .a-cardui.gw-media-card .a-cardui-header{position:absolute;left:0;z-index:1;width:100%}.gw-card-layout .a-cardui.gw-media-card .a-cardui-header{margin-top:20px;padding:0 20px;top:0}.gw-card-layout .a-cardui.gw-media-card .a-cardui-header h3{margin-right:340px}.gw-card-layout .a-cardui.gw-media-card .a-cardui-footer{margin-bottom:20px;padding:0 20px;bottom:0}.gw-card-layout .a-cardui.gw-media-card .a-cardui-footer .a-link-normal{color:#fff}.gw-card-layout .a-cardui.gw-media-card .a-cardui-body{padding:0;width:100%;height:100%;overflow:hidden;position:relative}.gw-card-layout .a-cardui.gw-media-card .asinImage{position:absolute;top:0;bottom:0;right:20px;margin:auto}.gw-card-layout .a-cardui.gw-media-card .asinImage img{box-shadow:0 2px 6px 0 rgba(0,0,0,.5)}.gw-card-layout .a-cardui.gw-media-card .asinBackground{width:100%;height:100%;overflow:hidden;background-repeat:no-repeat;background-position:center right;background-size:cover;filter:blur(10px);-webkit-filter:blur(10px);filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='10px');-ms-filter:"progid:DXImageTransform.Microsoft.Blur(PixelRadius='10px')";transform:scale(1.1);-webkit-transform:scale(1.1)}.gw-card-layout .a-cardui.gw-media-card .backgroundGradient{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to right,#111,rgba(17,17,17,.2));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#111111, endColorstr=#17171733, GradientType=1);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#111111, endColorstr=#17171733, GradientType=1)"}.gw-card-layout[data-flow-dir="h"]{display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap}.gw-card-layout[data-flow-dir="h"]>.gw-col{height:420px;min-height:420px;-webkit-flex:1 0 290px;flex:1 0 290px;padding-left:10px;padding-right:10px;min-width:290px}.gw-card-layout[data-flow-dir="h"] .card-flow-row-break{-webkit-flex:1 0 100%;flex:1 0 100%}.gw-card-layout[data-flow-dir="h"]>.gw-col[data-col-span-ws="2"]{-webkit-flex:2 0 580px;flex:2 0 580px}.gw-card-layout[data-flow-dir="h"]>.gw-col[data-col-span-ws="4"]{-webkit-flex:1 0 100%;flex:1 0 100%}.gw-card-layout[data-flow-dir="h"] .gw-card-layout[data-flow-dir="v"]{display:-webkit-flex;display:flex;-webkit-flex-flow:column nowrap;flex-flow:column nowrap;margin-top:-10px;margin-bottom:-10px}.gw-card-layout[data-flow-dir="v"]>.gw-row{-webkit-flex:1 0 0;flex:1 0 0;margin-top:10px;margin-bottom:10px}.gw-card-layout [data-order-ws="1"]{-webkit-order:1;order:1}.gw-card-layout [data-order-ws="2"]{-webkit-order:2;order:2}.gw-card-layout [data-order-ws="3"]{-webkit-order:3;order:3}.gw-card-layout [data-order-ws="4"]{-webkit-order:4;order:4}.gw-card-layout [data-order-ws="5"]{-webkit-order:5;order:5}.gw-card-layout [data-order-ws="6"]{-webkit-order:6;order:6}.gw-card-layout [data-order-ws="7"]{-webkit-order:7;order:7}.gw-card-layout [data-order-ws="8"]{-webkit-order:8;order:8}.gw-card-layout [data-order-ws="9"]{-webkit-order:9;order:9}.gw-card-layout [data-order-ws="10"]{-webkit-order:10;order:10}.gw-card-layout [data-order-ws="11"]{-webkit-order:11;order:11}.gw-card-layout [data-order-ws="12"]{-webkit-order:12;order:12}.gw-card-layout [data-order-ws="13"]{-webkit-order:13;order:13}.gw-card-layout .gw-col.gw-fixed-col{min-width:320px}@media (min-width:1240px){.gw-card-layout>hr:last-of-type{display:none}}@media (max-width:1239px){.gw-card-layout[data-flow-dir="h"]>.gw-col{-webkit-flex-basis:33.33333%;flex-basis:33.33333%;min-width:33.33333%}.gw-card-layout[data-flow-dir="h"]>.gw-col[data-col-span-sm="2"]{-webkit-flex:2 0 66.66667%;flex:2 0 66.66667%}.gw-card-layout[data-flow-dir="h"]>.gw-col[data-col-span-sm="3"]{-webkit-flex:1 0 100%;flex:1 0 100%}.gw-card-layout [data-order-sm="1"]{-webkit-order:1;order:1}.gw-card-layout [data-order-sm="2"]{-webkit-order:2;order:2}.gw-card-layout [data-order-sm="3"]{-webkit-order:3;order:3}.gw-card-layout [data-order-sm="4"]{-webkit-order:4;order:4}.gw-card-layout [data-order-sm="5"]{-webkit-order:5;order:5}.gw-card-layout [data-order-sm="6"]{-webkit-order:6;order:6}.gw-card-layout [data-order-sm="7"]{-webkit-order:7;order:7}.gw-card-layout [data-order-sm="8"]{-webkit-order:8;order:8}.gw-card-layout [data-order-sm="9"]{-webkit-order:9;order:9}.gw-card-layout [data-order-sm="10"]{-webkit-order:10;order:10}.gw-card-layout [data-order-sm="11"]{-webkit-order:11;order:11}.gw-card-layout [data-order-sm="12"]{-webkit-order:12;order:12}.gw-card-layout [data-order-sm="13"]{-webkit-order:13;order:13}.gw-card-layout .gw-col.gw-fixed-col{min-width:none}}.gw-card-layout[data-flow-dir="h"]>.card-flow-row-break{height:20px;margin:0;border:none}.gw-card-layout[data-flow-dir="h"]>[data-display-at]{display:none}.gw-card-layout[data-flow-dir="h"]>[data-display-at*=ws]{display:block}.gw-card-layout[data-flow-dir="h"][data-grid-breakpoint=ws]>[data-hide-at-ws]{display:none!important}.gw-card-layout[data-flow-dir="h"] .gw-auto-height{height:auto!important;min-height:0!important}@media (max-width:1239px){.gw-card-layout[data-flow-dir="h"]{min-width:919px}.gw-card-layout[data-flow-dir="h"]>[data-display-at]{display:none}.gw-card-layout[data-flow-dir="h"]>[data-display-at*=sm]{display:block}.gw-card-layout[data-flow-dir="h"][data-grid-breakpoint=sm]>[data-hide-at-sm]{display:none!important}}

        }
        // console.log(this.props.selCat[0].image);
        var selectionCatagorys=[];
        for (let i = 0; i < this.props.selCat.length; i++) {
            selectionCatagorys.push(
                <div style={styleCss.OuterCard} key={this.props.selCat[i].id} >
                    <p style={{paddingTop:"20px",paddingBottom:"10px",fontWeight:"bold",color:"black"}}>{this.props.selCat[i].title}</p>
                    <Link to={this.props.selCat[i].route} style={{textDecoration:"none"}}>
               
                    <div style={styleCss.card}>
                            <img src={this.props.selCat[i].image} style={{width:"100%",marginBottom:"0px"}} />
                    </div>
                    <p style={{color:"blue",fontSize:"10px",marginTop:"10px"}}>Shop our full selection</p>
                    </Link>
                
                </div>
            )
        }
        
        return(
            <div style={{display:"flex",marginLeft:"100px",marginRight:"100px",position:"absolute",top:"300px"}}>
                               
                               {/* <div style={styleCss.OuterCard}>
                    <p style={{paddingTop:"20px",paddingBottom:"10px",fontWeight:"bold"}}>Computer & Accessories</p>
                    <div style={styleCss.card}>
                            <img src={Imagedata} style={{width:"100%",marginBottom:"0px"}} />
                    </div>
                    <p style={{color:"blue",fontSize:"10px",marginTop:"10px"}}>Shop our full selection</p>

                </div>
                <div style={styleCss.OuterCard}>
                    <p style={{paddingTop:"20px",paddingBottom:"10px",fontWeight:"bold"}}>Computer & Accessories</p>
                    <div style={styleCss.card}>
                            <img src={Imagedata} style={{width:"100%",marginBottom:"0px"}} />
                    </div>
                    <p style={{color:"blue",fontSize:"10px",marginTop:"10px"}}>Shop our full selection</p>

                </div>
                <div style={styleCss.OuterCard}>
                    <p style={{paddingTop:"20px",paddingBottom:"10px",fontWeight:"bold"}}>Holiday deals</p>
                    <div style={styleCss.card}>
                            <img src={Imagedata} style={{width:"100%",marginBottom:"0px"}} />
                    </div>
                                       <p style={{color:"blue",fontSize:"10px",marginTop:"10px"}}>Shop our full selection</p>

                </div>
                <div style={styleCss.OuterCard}>
                    <p style={{paddingTop:"20px",paddingBottom:"10px",fontWeight:"bold"}}>Sign in for best experience</p>
                    <div style={styleCss.card}>
                            <img src={Imagedata} style={{width:"100%",marginBottom:"0px"}} />
                    </div>
                                       <p style={{color:"blue",fontSize:"10px",marginTop:"10px"}}>Shop our full selection</p>

                </div>     */}
                {selectionCatagorys}
            </div>

            
            
        )
    }
}