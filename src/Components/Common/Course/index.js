import React, { Component } from "react";

//Components
import CourseList from "./CourseList";
import Sections from "../Section";

class Course extends Component {
  render() {
    return (
      <div>
        <h1>The Actual Course Goes Here</h1>;
        <Sections />
      </div>
    );
  }
}

export default Course;
