import React from 'react';
import axios from 'axios'


class AddStudent extends React.Component {
  state = {
    name: '',
    cohort: 0
  }
  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  handleCohortChange = event => {
    this.setState({ cohort: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const user = {
      name: this.state.name,
      cohort: this.state.cohort
    }
    axios.post(`https://nc-student-tracker.herokuapp.com/api/students`, { user })
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label id='form-name'>Name
        <input type='text' name='name' id='form-name' onChange={this.handleNameChange}></input>
        </label>
        <label id='starting-cohort'> Starting Cohort
        <input type='number' name='starting-cohort' onChange={this.handleCohortChange}></input>
        </label>
        <button type="submit">Add Student</button>
      </form>
    )
  }
}

export default AddStudent
