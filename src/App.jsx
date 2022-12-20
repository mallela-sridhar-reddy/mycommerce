import React,{Component} from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import Customers from "./Customers";
import ProductsList from "./ProductsList";
import NewCustomer from "./NewCustomer";
import NoMatchPage from "./NoMatchPage";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

export class App extends Component {

    constructor(props) {
      super(props);
    
      this.state = {isLoggedIn:false};
    }

    render() {
        return (
            <BrowserRouter>
                <NavBar isLoggedIn={this.state.isLoggedIn}></NavBar>
                <Routes>
                 <Route path="/" exact element={<Login/>}></Route>
                 <Route path="/customers" exact element={<Customers/>}></Route>  
                 <Route path="/products" exact element={<ProductsList/>}></Route>  
                 <Route path="/register" exact element={<NewCustomer/>}></Route>
                 <Route path="/*" exact element={<NoMatchPage/>}></Route>
                </Routes>              
            </BrowserRouter>
        );
    }
}
// import all sub-components(exclude child components of these sub-components as they will be automatically imported by the parent component.) that we want to display/render here.
//line 1 is must for all class based components.
// Component - 
// React.Fragment is faster and more space efficient as compared to an extra div(no need to create an extra DOM node).
// everything inside return keyword will be returned to index.js.
