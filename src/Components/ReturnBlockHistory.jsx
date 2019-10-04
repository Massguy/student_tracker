import React from "react";

const ReturnBlockHistory = ({ blockHistoryObj }) => {
  return Object.keys(blockHistoryObj).map(element => {
    return (
      <p key={element}>
        {element}: {blockHistoryObj[element]}
      </p>
    );
  });
};
export default ReturnBlockHistory;
