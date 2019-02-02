import React, { Component } from "react";

//Components
import SectionRow from "./SectionRow";

class SectionTable extends Component {
  render() {
    let sectionRows = (
      <SectionRow
        name="Summer"
        startDate="startDate"
        endDate="endDate"
        status="yass"
      />
    );
    return (
      <table>
        <tr>
          <th>Section</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
        </tr>
        {sectionRows}
      </table>
    );
  }
}

export default SectionTable;
