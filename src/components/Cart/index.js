import React, {Component} from "react";
import ProtoTypes from 'prop-types';
import map from  "lodash/map";
import "./index.css";

class CartProducts extends Component {
    static propTypes= {
        addItemsToCart: ProtoTypes.func.isRequired,
    };
    render(){
        return (
            <div>
            <h1>This is your cart!</h1>
            <div className="items">
                {map(this.props.CartProducts, (product)=>{
                    <h1>{product.name}</h1>
                })}
            </div>
        </div>
        );
    }
}
export default CartProducts;