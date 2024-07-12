import React from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";


import PRODUCTS from "../../Data";
import { getDefaultNormalizer } from "@testing-library/react";

const WomenItems= () => {
    <div className="items">
        {PRODUCTS.map((product) =>{
            if( product.gender === "women"){
                return(
                    <div className="item">
                    <Link to={`/products/${product.id}`}>
                    <div className="product-image">
                        <img src= {product.img} alt={product.name} />
                    </div>
                    <div className="product-details">
                        <h1 id="product-name">{product.name}</h1>
                        <h4 id="product-description">{product.description}</h4>
                    </div>
                    </Link>
                    <div className="price-add">
                        <h5 id="product-price">${product.price}</h5>   
                        <Icon small onClick={()=> this.addProduct(product)}id="add-icon">add_shopping_cart</Icon>                
                    </div>
                    </div>
                )
            }
        }
        )}
    </div>
}
export default WomenItems;
