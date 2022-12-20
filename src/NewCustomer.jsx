import React, { Component } from "react";
export default class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = { id:"",name:"",email: "", password: "",phone:"",city:"" };
  }
  render() {
    return (
        
      <div className="container col-lg-9 mt-5" style={{backgroundColor: "#88a1dd",borderRadius:"25px",width:"500px",fontFamily:"sans-serif"}}>
        <h4 className="m-1 p-2 border-bottom">New User Register Here:</h4>
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            placeholder="e-mail"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            placeholder="create password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4">Name</label>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4">Phone:</label>
          <input
            type="number"
            placeholder="phone number"
            className="form-control"
            value={this.state.phone}
            onChange={(event) => {
              this.setState({ phone: event.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4">City:</label>
          <input
            type="text"
            placeholder="city"
            className="form-control"
            value={this.state.city}
            onChange={(event) => {
              this.setState({ city: event.target.value });
            }}
          />
        </div>
        
        <div className="text-right">
          
          <button className="btn btn-dark m-1" onClick={this.onSaveClick}>
            Register
          </button>
        </div>
        
       </div>
    );
  } //end of render

  onSaveClick = async (event) => {
    event.preventDefault();
    var customers={
        id:this.state.id,
        email:this.state.email,
        password:this.state.password,
        name:this.state.name,
        phone:this.state.phone,
        city:this.state.city
    }
    var response = await fetch("http://localhost:5000/customers",
      { method: "POST",
    body:JSON.stringify(customers),
    headers:{
    "content-type":"application/json",
         }, 
      });
      var body = await response.json();
      alert("Registration Successful");
      if (body) {
        window.location.href=("/");
      }
  };
}
