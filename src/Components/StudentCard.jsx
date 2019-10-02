import React from 'react';


function StudentCard(props) {
  const { student } = props
  return (
    <div className='column'>
      <div className='card'>
        <p>{student.name}</p>
        <p>{student.currentBlock}</p>
      </div>
    </div>

  );
}

export default StudentCard;