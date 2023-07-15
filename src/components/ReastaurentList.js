import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
class ReastaurentList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurent").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>Restaurent List</h1>
        {this.state.list.length > 0 ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th> Name</th>
                  <th>Rating</th>
                  <th>Location</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td>
                      <Link to={"/update/" + item.id}>Edit</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>please Wait...</p>
        )}
      </div>
    );
  }
}

export default ReastaurentList;
