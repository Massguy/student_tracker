import React, { Component } from 'react'
import * as api from '../api'

class SingleStudent extends Component {
  state = {
    student: {},
    isLoading: true
  }
  getBlockHistory = (blockHistory) => {
    console.log(blockHistory)
    return blockHistory.reduce((totalObj, curr) => {
      console.log(totalObj)
      if (totalObj[curr.name]) {
        return totalObj[curr.name]++
        // totalObj[name][curr['name']] 
      }
      else {
        return totalObj[curr.name] = 1
      }
    }, {})
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
        <p>{isLoading ? 'Loading' : console.log(this.getBlockHistory(student.blockHistory))}</p>
      </>
    );
  }
}

export default SingleStudent;