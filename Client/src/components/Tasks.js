import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  if (!props.tasks || props.tasks.length < 1) {
    return null;
  }

  // Sorting according to date
  props.tasks.sort((a, b) => {
    const result = new Date(a.deadline) - new Date(b.deadline);
    console.log("Sorting Function: ", result);
    return result;
  });

  return props.tasks.map((task) => (
    <div key={task.id}>
      <Task task={task} alterTask={props.alterTask} delTask={props.delTask} />
    </div>
  ));
};

export default Tasks;
