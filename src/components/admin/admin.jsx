import React, { Component } from 'react';

import "./admin.css";

class Admin extends Component {
    defaultState={
       id: "",
       price: 0,
       stock: 0,
       title: "",
       description: "",
       image: "",
       discount: 0,
       category: ""
    }
   state = {...this.defaultState}
    render() { 
        return (
            <div className="adminPage">

                <label>id</label>
                <input className="id" type="text" name="id" value={this.state.id} onChange={this.handleInputChange}/>
                <br/>

                <label>Price</label>
                <input className="price" type="number" name="price" value={this.state.price} onChange={this.handleInputChange}/>
                <br/>

                <label>Stock</label>
                <input className="stock" type="number" name="stock" value={this.state.stock} onChange={this.handleInputChange}/>
                <br/>

                <label>Title</label>
                <input className="title" type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                <br/>

                <label>Description</label>
                <input className="description" type="text" name="description" value={this.state.description} onChange={this.handleInputChange}/>
                <br/>

                <label>Image URL</label>
                <input className="imageURL" type="text" name="image" value={this.state.image} onChange={this.handleInputChange}/>
                <br/>

                <label>Discount</label>
                <input className="discount" type="number" name="discount" value={this.state.discount} onChange={this.handleInputChange}/>
                <br/>

                <label>Category</label>
                <input className="category" type="text" name="category" value={this.state.category} onChange={this.handleInputChange}/>
                <br/>

                <button className="btn btn-dark" onClick={this.handleSave}>Save Product</button>
            </div>
          );
    }

    handleInputChange = (event) => { //45 minutes left in class, rewatch this lecture tomorrow
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSave = () => {
        this.setState({ title: "Changed from code..."});
        this.setState({...this.defaultState});
        console.log("Product has been saved");
    }
}
 
export default Admin;