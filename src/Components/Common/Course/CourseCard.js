import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseCard extends Component {
  render() {
    let course = this.props.course;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/authors/${course.id}`} className="card">
          <div className="image">
            <img className="card-img-top img-fluid" src="" alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{course.name}</span>
            </h5>
            <small className="card-text">{course.id}</small>
          </div>
        </Link>
      </div>
    );
  }
}
