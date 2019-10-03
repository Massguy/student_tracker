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
        <p>{student.name}</p>
        <p>{blockRef[student.currentBlock]}</p>
      </div>
    </div>
  );
}
export default StudentCard;
