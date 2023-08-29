import React, { useState } from "react";
import Detail from "./layout/Detail";

const Task = (props) => {
  const [detail, setDetail] = useState(false);

  // Styles
  const getStyle = () => {
    return {
      //background: "#f4f4f4",
      padding: "1px",
      border: "5px",
      borderLeftColor: "Red",
      borderRadius: "15px",
      textDecoration: props.task.status === "Done" ? "line-through" : "none",
    };
  };

  // Done Style
  const doneStyle = () => {
    return {
      background: props.task.status === "Done" ? "green" : "red",
      borderRadius: "50%",
      float: "left",
    };
  };

  // Button Style
  const btnStyle = {
    background: "red",
    borderRadius: "50%",
    float: "right",
  };

  const expand = () => {
    return (
      <>
        {detail ? (
          <Detail
            task={props.task}
            collapse={() => setDetail(false)}
            alterTask={props.alterTask}
          />
        ) : null}
      </>
    );
  };

  // Mark Complete
  const markComplete = () => {
    props.task.status = "Done";
    props.alterTask(props.task);
    console.log("This one is Done: ", props.task);
  };

  const { id, title } = props.task;

  return (
    <div key={id} style={getStyle()}>
      <p>
        <button style={doneStyle()} onClick={markComplete}>
          o
        </button>
        <span onClick={() => setDetail(true)}>{title}</span>
        <button style={btnStyle} onClick={() => props.delTask(props.task)}>
          x
        </button>
      </p>
      {expand()}
    </div>
  );
};

export default Task;
