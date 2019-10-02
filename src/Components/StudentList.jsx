
import React, { Component } from 'react'
import axios from 'axios'
import StudentCard from './StudentCard';

export default class StudentList extends Component {
  state = {
    students: []
  }
  componentDidMount() {
    axios.get(`https://nc-student-tracker.herokuapp.com/api/students`).then(({ data }) => {
      this.setState(data)
    })
  }
  render() {
    const { students } = this.state
    return (
      <div>
        <ul>{students.map(student => <StudentCard student={student} />)}
        </ul>
      </div>
    )
  }
}

