//@ts-nocheck
import react from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";

import PRODUCTS from "../../Data";

const ClothesItem=()=> {
    <div className="items">
        {PRODUCTS.map((product) =>{
        if(product.category === "Clothes"){
            return(
                <div className="item">
                    <Link to={`/products/${product.id}`}>
                    <div className="product-img">
                        <img src={product.img} alt={product.name}/>
                    </div>
                    <div classname="product-details">
                        <h1 id="product-name">{prodct.name}</h1>
                        <h4 id="product-description">{product.description}</h4>
                    </div>                   
                    </Link>
                    <div className="price-add">
                        <h1 id="product-price">{product.price}</h1>
                        <Icon small onClick={()=> this.addProduct(product)} id="add-item">add_shopping_cart</Icon>
                    </div>
                </div>
            )
        }
    })}
    </div>
}