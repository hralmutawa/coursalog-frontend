import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Routing
import { Route, Redirect, Switch } from "react-router";

//Components
import Semesters from "./Components/Admin/Semesters";
import SemesterDetail from "./Components/Admin/Semesters/SemesterDetail";
import CourseDetail from "./Components/Common/Course/";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/admin/semesters/:semesterId/courses/:courseId"
          component={CourseDetail}
        />
        <Route path="/admin/semesters/:semesterId" component={SemesterDetail} />
        <Route path="/admin/semesters" component={Semesters} />

        <Route
          path="/admin/student/:semesterId/courses/:courseId"
          component={CourseDetail}
        />
        <Route
          path="/student/semesters/:semesterId"
          component={SemesterDetail}
        />
        <Route path="/student/semesters" component={Semesters} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default App;
