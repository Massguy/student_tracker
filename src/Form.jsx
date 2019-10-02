import React from 'react'

class StudentForm extends React.Component {
  state = {
    name: '',
    cohort: 0
  }
  // addStudent(event) {
  //   event.preventDefault()
  //   const { input } = this.state
  //   this.setState({ input: '' })
  // }
  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }
  handleCohortChange = event => {
    this.setState({ cohort: event.target.value })
  }
  render() {
    return (
      <form onSubmit={this.addStudent}>
        <label id='form-name'>Name
        <input type='text' name='name' id='form-name' onChange={this.handleNameChange}></input>
        </label>
        <label id='starting-cohort'> Starting Cohort
        <input type='number' name='starting-cohort' onChange={this.handleCohortChange}></input>
        </label>
        <button>Add Student</button>
      </form>
    )
  }
}

export default StudentForm
