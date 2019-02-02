import React, { Component } from "react";

class SemesterRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.startDate}</td>
        <td>{this.props.endDate}</td>
        <td>Opening Soon</td>
      </tr>
    );
  }
}

export default SemesterRow;
