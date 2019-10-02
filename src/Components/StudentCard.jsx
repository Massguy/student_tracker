import React from 'react';


function StudentCard(props) {
  const { student } = props
  return (
    <li key={student._id}>
      {student.name}
    </li>);
}

export default StudentCard;