import React, { Component } from "react";
import * as api from "../api";
import StudentCard from "./StudentCard";
import AddStudent from "./AddStudent";
import SingleStudent from "./SIngleStudent";
import { Router, Link, navigate } from "@reach/router";

export default class StudentList extends Component {
  state = {
    students: []
  };
  postedStudent = newStudent => {
    // take current state add new student and setState in StudentList
    this.setState(currentState => {
      const newState = [...currentState.students, newStudent];
      return { students: newState };
    });
  };

  deleteStudent = id => {
    api.removeSingleStudent(id).then(() => {
      navigate("/students");
    });
    this.setState(currentState => {
      const filteredState = currentState.students.filter(
        student => student._id !== id
      );

      return { students: filteredState };
    });
  };

  componentDidMount() {
    api.getAllStudents().then(({ data }) => {
      this.setState(data);
    });
  }

  render() {
    const { students } = this.state;
    return (
      <div>
        <Router>
          <SingleStudent deleteStudent={this.deleteStudent} path="/:id" />
        </Router>
        <AddStudent postedStudent={this.postedStudent} />

        <div>
          {students.map(student => (
            <div key={student._id}>
              <Link to={`/students/${student._id}`}>
                <StudentCard student={student} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
