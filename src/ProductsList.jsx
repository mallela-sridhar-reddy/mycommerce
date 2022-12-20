import React, { Component } from "react";
import Product from "./Product";

export default class ProductsList extends Component {
  constructor(props) {
    console.log("constructor - ShoppingCart");
    super(props); //calling super class's constructor
    this.state = {
    products: [
    
    ],
    };
  }

  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/products", {
    method: "GET",
    });
    var prods = await response.json();//converts to json array
    console.log(prods);
    this.setState({ products: prods });
    //console.log("componentDidMount - CourseList");
    };
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div>
          {this.state.products.map((prod) => {
            return (
            <Product key={prod.id}
              product={prod} 
              onIncrement = {this.handleIncrement}
              onDecrement = {this.handleDecrement}
              onDelete = {this.handleDelete}>
              <button className = "btn btn-primary">payment</button> 
            </Product>
            );
          })}
        </div>
      </div>
    );
  }
  

  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
    allProducts[index].quantity++;
    //update the state of current component (parent component)
    this.setState({ products: allProducts });
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
        //get index of selected course
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (window.confirm("Are you sure to delete?")) {
        //delete course based on index
        allProducts.splice(index, 1);
        //update the state of current component (parent component)
        this.setState({ products: allProducts });
        }
        };
     
}



//line:5 - state is a built-in React object that is used to contain data or information about the component.A component's state can change and whenever it changes,the component re-renders.All the data needed by sub-components comes from here.
//line:6 - products is an array of objects