import React, { Component } from "react";

export default class Customers extends Component {
  constructor(props){
    super(props);
    this.state = {
      appTitle: "customer details",
      Count: 99,
      Customers: [],
  };
  
  };
 
 
  
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.appTitle}
          <span className="badge badge-secondary m-2 highlight " >
            {this.state.Count}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>email</th>
              <th>Password</th>
              <th>phone</th>
              <th>city</th>

            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({ Count: 77 });
  };
  
  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/customers", {
    method: "GET",
    });
    var cust = await response.json();//converts to json array
    console.log(cust);
    this.setState({ Customers: cust });
    //console.log("componentDidMount - CourseList");
    };

  getCustomerRow = () => {
    return this.state.Customers.map((Cust, index) => {
      return (
        <tr key={Cust.id}>
          <td>{Cust.id}</td>
          <td >{Cust.name}</td>
          <td>{Cust.email}</td>
          <td>{Cust.password}</td>
          <td>{Cust.phone}</td>
          <td>{Cust.city}</td>   
        </tr> 
      );
    });
  };
  
}
