import axios from "axios";

export const studentAdder = student => {
  return axios.post(
    `https://nc-student-tracker.herokuapp.com/api/students`,
    student
  );
};

export const getAllStudents = () => {
  return axios.get(`https://nc-student-tracker.herokuapp.com/api/students`);
};

export const getSingleStudent = id => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
    .then(response => {
      return response.data.student;
    });
};

export const removeSingleStudent = id => {
  console.log(id, "<---- id");
  return axios
    .delete(`https://nc-student-tracker.herokuapp.com/api/students/${id}`, id)
    .then(response => {
      console.log(response);
    });
};
