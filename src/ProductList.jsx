import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  constructor(props) {
    console.log("constructor - ShoppingCart");
  
  super(props); //calling super class's constructor
  this.state = {
    products:[],
 

  
   
  };
}
componentDidMount = async () =>{
  var response = await fetch ("http://localhost:5000/products",{
    method: "GET",
  });
  var prods = await response.json();//converts to json array
  console.log(prods);
  this.setState({products: prods});
  //console.log("componentDidMount - CourseList");
};
  render() {
    return (
      <div className="contained-fluid">
        <h4>Product List</h4>
        <div>
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Payment</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //Executes after constructor and render method (includes life cycle of child components, if any) of current component

  componentDidMount() {
    //fetch data from data source
    console.log("componentDidMount - ProductList");
  }
    

  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      //update the state of current component (parent component)
      this.setState({ products: allProducts});
    }
  };
  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (window.confirm("Are you sure to delete?")) {
    //delete product based on index
    allProducts.splice(index, 1);
    //update the state of current component (parent component)
    this.setState({ products: allProducts });
    }
    };

}

