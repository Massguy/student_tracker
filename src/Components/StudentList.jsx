
import React, { Component } from 'react'
import axios from 'axios'
import StudentCard from './StudentCard';
import AddStudent from './AddStudent';


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
        <AddStudent />
        <ul>{students.map(student => <li key={student._id}><StudentCard student={student} /></li>)}
        </ul>
      </div>
    )
  }
}

