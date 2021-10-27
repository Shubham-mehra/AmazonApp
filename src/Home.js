import { Component, React } from "react";
import banner from "./images/Home_banner.jpg";
import Selection from "./selection";
import Imagedata from "./images/jeans3.jpg"
import selectionCatagory from "./data/catagoryData";
export default class Home extends Component {
    // const { count, increment } = useContext(MyContext)
    render() {
        return (
            <div style={{ marginTop: "50px" }}>
                <div style={{ height: "50%", padding: "0px" }}>
                    <img src={banner} width="100%" />
                </div>
                <div style={{ backgroundImage: `linear-gradient(#000000, #eaeded)`, height: "400px", marginTop: "-5px" }}>
                    <Selection selCat={selectionCatagory} />
                </div>
                <div>

                </div>
            </div>
        )
    }
}