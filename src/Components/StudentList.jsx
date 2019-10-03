import React, { Component } from "react";
import * as api from "../api";
import StudentCard from "./StudentCard";
import AddStudent from "./AddStudent";

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

  componentDidMount() {
    api.getAllStudents().then(({ data }) => {
      this.setState(data);
    });
  }
  render() {
    const { students } = this.state;
    return (
      <div>
        <AddStudent postedStudent={this.postedStudent} />
        <div>
          {students.map(student => (
            <div key={student._id}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
