import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#" activeclassName="active">My Commerce</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        {!this.props.isLoggedIn ? (
        <li className="nav-item">
          <NavLink className="nav-link " activeclassName="active" aria-current="page" to="/">Login</NavLink>
        </li>):("")}

        {this.props.isLoggedIn ? (

        <li className="nav-item">
          <NavLink className="nav-link " activeclassName="active" aria-current="page" to="/customers">Customers</NavLink>
        </li>):("")}

        {this.props.isLoggedIn ? (

        <li className="nav-item">
          <NavLink className="nav-link " activeclassName="active" aria-current="page" to="/products">Products</NavLink>
        </li> ):("")}

        {this.props.isLoggedIn ? (

        <li className="nav-item">
          <NavLink className="nav-link " activeclassName="active" aria-current="page" to="/register">Register</NavLink>
        </li>  ):("")}


      </ul>
    </div>
  </div>
</nav>
            </React.Fragment>
        );
    }
}
