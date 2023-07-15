import React, { Component } from "react";

class ReastaurentCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
    };
  }

  create() {
    console.warn(this.state);

    fetch("http://localhost:3000/restaurent", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((result) => {
        console.warn(result);
        alert("Restaurent has been added");
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Restaurent Create</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="restaurent name"
          ></input>
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            placeholder="restaurent email"
          ></input>
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
            placeholder="restaurent rating"
          ></input>
          <br></br>
          <br></br>
          <input
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            placeholder="restaurent address"
          ></input>

          <br></br>
          <br></br>
          <button
            onClick={() => {
              this.create();
            }}
          >
            Add Restaurent
          </button>
        </div>
      </div>
    );
  }
}

export default ReastaurentCreate;
