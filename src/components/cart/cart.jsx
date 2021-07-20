import React, { Component } from 'react';
import dataContext from '../../context/dataContext';
import ItemInCart from '../itemInCart/itemInCart';
import "./cart.css";

class Cart extends Component {
    static contextType = dataContext;
    state = {  }
    render() { 
        return (
            <div className="cartPage">
                <h4>This is the cart</h4>

                <div className="productContainer">
                    {this.context.cart.map((prod) => 
                    <ItemInCart key={prod.id} prod={prod}></ItemInCart>
                    )}
                </div>
            </div>
        );

    }
}
 
export default Cart;