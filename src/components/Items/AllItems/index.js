import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import map from "lodash/map";

import PRODUCTS from "../../Data";

const AllItems =()=>{
    <div className="items">
    {map(PRODUCTS,(product)=> (
        <div key={product.id} className="item">
            <link to={`/products/${product.id}`}>    
            <div className="product-image">
                <img src={product.img} alt={product.name} />        
            </div>
            <div className="Product-details">
                <h1 id="product-name">{product.name}</h1>
                <h5 id="product-description">{product.description}</h5>
            </div>
            </link>
            <div className="price-add">
                <h5 className="product-price">{product.price}</h5>
                <Icon small id="add-icon">add_shopping_cart</Icon>
            </div>
        </div>
    ))}
    </div>
}

export default AllItems;