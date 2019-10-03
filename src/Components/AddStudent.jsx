import React from "react";
import * as api from "../api";

class AddStudent extends React.Component {
  state = {
    name: "",
    startingCohort: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { postedStudent } = this.props;
    event.preventDefault();
    const user = {
      name: this.state.name,
      startingCohort: this.state.startingCohort
    };
    api
      .studentAdder(user)
      .then(({ data: { student: addedStudent } }) => {
        const newStudent = {
          _id: addedStudent["_id"],
          name: addedStudent["name"],
          startingCohort: addedStudent["startingCohort"],
          currentBlock: addedStudent["currentBlock"]
        };

        postedStudent(newStudent);
      })
      .catch();
    this.setState(() => {
      const newState = {
        name: "",
        startingCohort: ""
      };
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label id="form-name">
          Name
          <input
            type="text"
            name="name"
            id="form-name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
        </label>
        <label id="starting-cohort">
          {" "}
          Starting Cohort
          <input
            type="number"
            name="startingCohort"
            onChange={this.handleChange}
            value={this.state.startingCohort}
          ></input>
        </label>
        <button type="submit">Add Student</button>
      </form>
    );
  }
}

export default AddStudent;
