import React, { Component } from 'react'
import * as api from '../api'

class SingleStudent extends Component {
  state = {
    student: {},
    isLoading: true
  }
  getBlockHistory = (blockHistory) => {
    return blockHistory.reduce((acc, elem) => {
      acc[elem.name] = acc[elem.name] ? acc[elem.name] + 1 : 1;
      return acc
    }, {});


  }
  componentDidMount() {
    const { id } = this.props
    api.getSingleStudent(id).then((student) => this.setState(() => {
      return { student, isLoading: false }

    }))
  }
  render() {
    const { student, isLoading } = this.state
    return (
      <>
        <h2>{student.name}</h2>
        <p>{student.startingCohort}</p>
        <p>{isLoading ? 'Loading' : this.getBlockHistory(student.blockHistory)}</p>
      </>
    );
  }
}

export default SingleStudent;