import React, { useState } from "react";
import { useHistory } from "react-router";
import { v4 as uuid } from "uuid";
import "./layout/Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("2099-05-31");
  const [importance, setImportance] = useState("Important");
  const [status, setStatus] = useState("To Do");
  const [description, setDescription] = useState("");

  const detailStyle = () => {
    return {
      background: "rgba(95, 222, 253, 0.856)",
      width: "100%",
      maxWidth: "100%",
      margin: "none",
      paddingTop: "2%",
      paddingBottom: "5%",
    };
  };

  const { alterTask } = props;
  const history = useHistory();

  // Close the Form
  const collapse = () => {
    history.push("/");
  };

  // Add the Task
  const add = () => {
    const task = {
      id: uuid(),
      title: title,
      deadline: deadline,
      importance: importance,
      status: status,
      description: description,
    };
    alterTask(task);
    console.log("The Task thats added: ", task);
    collapse();
  };

  // Form Area
  const FormArea = () => {
    const imp = ["Not Important", "Important", "Very Important"];
    const tags = ["Not-Imp", "Important", "Very-Imp", "All"];
    const st = ["To Do", "Doing", "Done", "Delayed"];
    return (
      <div className="editPanel">
        <input
          type="text"
          value={title}
          className="formInput"
          placeholder="Enter Title"
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <br />
        <br />
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
        <span className="btn fullBtn" onClick={add}>
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
      <hr />

      <h3 className="titleStyle">{title ? title : "Title"}</h3>
      <div className="content">
        <span className="heads">Deadline</span>
        <span className="info">{deadline ? deadline : "No Deadline"}</span>
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
      <hr />
      <br />
      {FormArea()}
    </div>
  );
};

export default Form;
