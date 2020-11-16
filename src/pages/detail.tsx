import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    return (
      <div>
        <p>This is detail page</p>
        <Link to="/home">回到home</Link>
      </div>
    );
  }
}
