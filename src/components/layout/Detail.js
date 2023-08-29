import React, { useState } from "react";
import "./Form.css";

const Detail = (props) => {
  const task = props.task;
  const [deadline, setDeadline] = useState(task.deadline);
  const [importance, setImportance] = useState(task.importance);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description);
  const [editPanel, setEditPanel] = useState(false);

  const { alterTask, collapse } = props;

  const detailStyle = () => {
    if (!editPanel) {
      return {
        background: "rgba(95, 222, 253, 0.856)",
        position: "fixed",
        width: "100%",
        maxWidth: "100%",
        top: "20%",
        left: "0%",
        margin: "none",
        paddingTop: "2%",
        paddingBottom: "3%",
      };
    }
    return {
      background: "rgba(95, 222, 253, 0.856)",
      position: "absolute",
      top: "10%",
      left: "0%",
      width: "100%",
      maxWidth: "100%",
      margin: "none",
      paddingTop: "5%",
      paddingBottom: "5%",
      zIndex: "1",
    };
  };

  // Edit the Task
  const edit = () => {
    task.deadline = deadline;
    task.importance = importance;
    task.status = status;
    task.description = description;
    alterTask(task);
    collapse();
  };

  // Editing Area
  const editArea = () => {
    const imp = ["Not Important", "Important", "Very Important"];
    const tags = ["Not-Imp", "Important", "Very-Imp", "All"];
    const st = ["To Do", "Doing", "Done", "Delayed"];
    return (
      <div className="editPanel">
        <div className="btnGroup">
          {imp.map((i, index) => (
            <span
              key={i}
              className={importance === i ? "btn btnSelected" : "btn"}
              onClick={() => setImportance(i)}
            >
              {tags[index]}
            </span>
          ))}
        </div>
        <br />
        <div className="btnGroup">
          {st.map((i) => (
            <span
              key={i}
              className={status === i ? "btn btnSelected" : "btn"}
              onClick={() => setStatus(i)}
            >
              {i}
            </span>
          ))}
        </div>
        <br />
        <div className="formInput">
          <label for="deadline">
            <b>Deadline: </b>
          </label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
          />
        </div>
        <br />
        <input
          type="text"
          className="formInput"
          placeholder="Enter Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <br />
        <span className="btn fullBtn" onClick={edit}>
          Submit
        </span>
      </div>
    );
  };

  return (
    <div style={detailStyle()}>
      <button className="btn" onClick={collapse}>
        X
      </button>
      <h3 className="titleStyle">{task.title}</h3>
      <div className="content">
        <span className="heads">Deadline</span>
        <span className="info">
          {task.deadline ? task.deadline : "No Deadline"}
        </span>
      </div>

      <div className="content">
        <span className="heads">Importance</span>
        <span className="info">{importance}</span>
      </div>
      <div className="content">
        <span className="heads">Status</span>
        <span className="info">{status}</span>
      </div>
      <p>{description ? description : null}</p>
      <br />
      <span
        className={editPanel ? "btn btnSelected fullBtn" : "btn fullBtn"}
        onClick={() => setEditPanel(!editPanel)}
      >
        {editPanel ? "Cancel Edit" : "Edit"}
      </span>
      <br />
      <br />
      {editPanel ? editArea() : null}
    </div>
  );
};

export default Detail;
