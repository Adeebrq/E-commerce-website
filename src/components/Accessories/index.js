//@ts-nocheck
import react, { Component } from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";

import PRODUCTS from "../Data";
import "./style.css";
import products from "../Data";

class Accessories extends Component {
    render(){
        return(
            <div className="Accessories">
                <div className="Acessories-title">
                    <h2>Acessories</h2>
                </div>
                <div className="items">
                    {PRODUCTS.map((product)=>{
                        if(product.category === "Accessories"){
                            return(
                                <div className="item">
                                    <Link to={`/products/${product.id}`}>
                                    <div className="product-img">
                                        <img src={product.img} alt={product.name}/>
                                    </div>
                                    <div className="product-details">
                                        <h1 id="product-name">{product.name}</h1>
                                        <h4 id="product-description">{product.description}</h4>
                                    </div>
                                    </Link>
                                    <div className="price-add">
                                        <h4 id="product-price">{product.price}</h4>
                                        <Icon small onClick={()=> this.addProduct(product)} id="icon-add">add_shopping_cart</Icon>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Accessories;
