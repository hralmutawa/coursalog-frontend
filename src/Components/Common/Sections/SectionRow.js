import React, { Component } from "react";

class SectionRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.instructor}</td>
        <td>{this.props.gender}</td>
        <td>{this.props.location}</td>
        <td>{this.props.days}</td>
        <td>{this.props.startTime}</td>
        <td>{this.props.endTime}</td>
      </tr>
    );
  }
}

export default SectionRow;
