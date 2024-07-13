//@ts-nocheck
import react, {Component} from "react";
import "./index.css"

import PRODUCTS from "../Data";
import ClothesItem from "./ClothesItems";

class ClothesItem extends Component{
    render(){
        return(
            <div className="Clothes">
                <div className="Clothes-title">
                    <h4>Clothes</h4>
                </div>
                < ClothesItem/>
            </div>
        )
    }
}

export default ClothesItem;