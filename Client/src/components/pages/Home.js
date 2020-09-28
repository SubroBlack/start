import React, { useState } from "react";
import ImpBar from "../layout/ImpBar";
import StatusBar from "../layout/StatusBar";
import Tasks from "../Tasks";

const Home = (props) => {
  const [status, setStatus] = useState("All");
  const [importance, setImportance] = useState("All");

  // Filtering the Display of the Tasks
  const filter = () => {
    if (importance !== "All" && status !== "All") {
      return props.tasks.filter(
        (t) => t.importance === importance && t.status === status
      );
    } else if (importance !== "All") {
      return props.tasks.filter((t) => t.importance === importance);
    } else if (status !== "All") {
      return props.tasks.filter((t) => t.status === status);
    } else {
      return props.tasks;
    }
  };

  return (
    <div>
      <ImpBar setImportance={setImportance} importance={importance} />
      <Tasks
        tasks={filter()}
        alterTask={props.alterTask}
        delTask={props.delTask}
      />
      <StatusBar setStatus={setStatus} status={status} />
    </div>
  );
};

export default Home;
