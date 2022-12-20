import React, { Component } from "react";

export default class Newuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      city: "",
    };
  }

  render() {
    return (
      <>
      <div className="container">
      <h1 class="display-6">Registration - New User</h1>
        <form action="">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Phone"
            value={this.state.phone}
            onChange={(event) => {
              this.setState({ phone: event.target.value });
            }}
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="City"
            value={this.state.city}
            onChange={(event) => {
              this.setState({ city: event.target.value });
            }}
          />

        </div>
        <div class="input-group mb-3">
          <input
            type="submit"
            class="form-control btn btn-primary mb-3"
            placeholder="submit"
            onClick={this.onSaveClick}
          />
        </div>
        </form>
      </div>


      </>
    );
  }

  onSaveClick = async (event) => {
    event.preventDefault();

    var user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      city: this.state.city,
    };

    
    var response = await fetch("http://localhost:5000/customers", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });

    var body = await response.json();
    console.log(body);

    //after receiving response body, redirect to /
    if (body) {
      this.props.history.replace("/");
    }
  };

}
