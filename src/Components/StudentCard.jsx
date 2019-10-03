import React from "react";

const blockRef = {
  fun: "Fundamentals",
  be: "Back End",
  fe: "Front End",
  proj: "Project Stage",
  grad: "Graduated"
};

function StudentCard(props) {
  const { student } = props;
  return (
    <div className="column">
      <div className="card">
        <p>Name: {student.name}</p>
        <p>CurrentBlock: {blockRef[student.currentBlock]}</p>
        <p>id: {student._id}</p>
        <p>starting cohort: {student.startingCohort}</p>
      </div>
    </div>
  );
}
export default StudentCard;
