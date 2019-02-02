import React, { Component } from "react";

//Components
import SemesterRow from "./SemesterRow";

class SemesterTable extends Component {
  render() {
    let semesterRows = (
      <SemesterRow
        name="Summer"
        startDate="startDate"
        endDate="endDate"
        status="yass"
      />
    );
    return (
      <table>
        <tr>
          <th>Semester</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
        </tr>
        {semesterRows}
      </table>
    );
  }
}

export default SemesterTable;
