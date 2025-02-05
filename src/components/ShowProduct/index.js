import React, {Component} from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import find from "lodash/find";

import PRODUCTS from "../Data";
import "./index.css";

class ShowProduct extends Component {
     render(){
        const product=find(PRODUCTS,['id', parseInt(this.props.match.param.id)]);
        const currentProduct= product;
        return(
            <div className="show-product">
                <div className="item-wrapper">
                    <div className="product-img">
                        <img src={currentProduct.img} alt="Product" />
                    </div>
                    <div className="item-name">
                        <div className="product-info">
                            <h3 id="product-name">{currentProduct.name}</h3>
                        </div>
                        <div className="product-bio">
                            <p id="product-description">{currentProduct.description}</p>
                            <p id="product-price">{currentProduct.price}</p>
                            <Icon small id="add-icon">add_shopping_cart</Icon>
                        </div>
                        <div className="product-reveiw">
                        <div className="stars">
                            <Icon small id="add-icon">star</Icon>
                            <Icon small id="add-icon">star</Icon>
                            <Icon small id="add-icon">star</Icon>
                            <Icon small id="add-icon">star</Icon>
                            <Icon small id="add-icon">star_half</Icon>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="similar-products">
                    <h5>You may also like</h5>
                    {PRODUCTS.map((product)=> {
                        if (
                            product.gender === currentProduct.gender
                            && product.type === currentProduct.type
                            && product.name !== currentProduct.name
                        ){
                            return(
                                <Link to={`/products/${product.id}`}>
                                    <div key={product.id} className="item" >
                                        <Link to={`/products/${product.id}`}>
                                        <div className="product-img">
                                            <img src={product.img} alt={product.name} />
                                        </div>
                                        <div className="product-details">
                                            <h1 id="product-name">{product.name}</h1>
                                            <h4 id="product-description">{product.description}</h4>
                                        </div>                                                                              
                                        </Link>
                                        <div className="product-add">
                                            <h5 id="product-price">{product.price}</h5>
                                            <Icon small id="add-icon">add_Shopping_cart</Icon>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>        
        );
    }
}

export default ShowProduct;