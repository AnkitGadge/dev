import React, { Component } from "react";

class ReastaurentUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null
        }
    }
  componentDidMount() {
    fetch('http://localhost:3000/restaurant'/+this.props.match.params.id).then((response) => {
        response.json().then((result) => {
        this.setState({  name:result.name,
            email:result.email,
            id:result.id,
            rating:result.rating,
            address:result.address});
            
      });
    });
  }
  update(){
    fetch('http://localhost:3000/restaurant/'+this.state.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      }).then((result) => {
        result.json().then((result) => {
          alert("Restaurant has been updated");
        });
      });
  }
  render() {
    console.warn(this.props.match.params.id);

    return (
      <div>
        <h1>Restaurent Update</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurent Name" value={this.state.name}
          ></input>
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurent email" value={this.state.email}
          ></input>
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurent rating" value={this.state.rating}
          ></input>
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurent Address"value={this.state.address}
          ></input>
          <br />
          <br />
          <button
            onClick={() => {
              this.update();
            }}
          >
            Update Restaurant
          </button>
        </div>
      </div>
    );
  }
}

export default ReastaurentUpdate;
