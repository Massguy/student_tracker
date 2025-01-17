import React, { Component } from "react";
import * as api from "../api";
import ReturnBlockHistory from "./ReturnBlockHistory";

class SingleStudent extends Component {
  state = {
    student: {},
    isLoading: true
  };

  initiateDelete = id => {
    const { deleteStudent } = this.props;
    deleteStudent(id);
  };

  getBlockHistory = blockHistory => {
    return blockHistory.reduce((acc, elem) => {
      acc[elem.name] = acc[elem.name] ? acc[elem.name] + 1 : 1;
      return acc;
    }, {});
  };

  componentDidMount() {
    const { id } = this.props;
    api.getSingleStudent(id).then(student =>
      this.setState(() => {
        return { student, isLoading: false };
      })
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      api.getSingleStudent(this.props.id).then(student =>
        this.setState(() => {
          return { student, isLoading: false };
        })
      );
    }
  }

  render() {
    const {
      student,
      isLoading,
      student: { blockHistory }
    } = this.state;

    const blockInfo = blockHistory && this.getBlockHistory(blockHistory);
    return (
      <>
        <h2>{student.name}</h2>
        <p>Starting Cohort: {student.startingCohort}</p>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h3>Block History</h3>
              <ReturnBlockHistory blockHistoryObj={blockInfo} />
            </div>
          )}
          <button
            onClick={() => {
              this.initiateDelete(student._id);
            }}
          >
            Delete Student
          </button>
        </div>
      </>
    );
  }
}

export default SingleStudent;
