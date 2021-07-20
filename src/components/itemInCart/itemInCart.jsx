import React, { Component } from 'react';

import "./itemInCart.css";

class ItemInCart extends Component {
    state = {  }
    render() { 
        return (
        <div className="itemInCart">
            <div className="iicImage">
                <img src={this.props.prod.image}/>
            </div>

            <div className="iicTiCat">
                <h6>{this.props.prod.title}</h6>
                <h6>{this.props.prod.category}</h6>
            </div>

            <div className="iicUnits">
                <h6></h6>
            </div>

            <div className="iicQuanTotal">
                <h6>${this.props.prod.price}</h6>
                <h6>{this.props.prod.quantity}</h6>
                <h6>${this.props.prod.total}</h6>
            </div>

            <div className="iicDelete">
                <button className="btn btn-small btn-danger">Remove</button>
            </div>
        </div>
        );
    }
}
 
export default ItemInCart;