import React from "react";

const statusBarStyle = {
  position: "fixed",
  left: "0%",
  width: "100%",
  marginBottom: "1%",
  bottom: "0%",
  fontWeight: "bold",
  fontSize: "80%",
  color: "white",
};

const stListStyle = {
  display: "flex",
  maxWidth: "93%",
  padding: "2%",
  margin: "auto",
  backgroundColor: "rgb(40, 44, 52)",
  border: "solid 1px",
  borderRadius: "3%",
  borderColor: "rgb(0, 0, 0)",
  boxShadow: "1px 2px rgb(235, 236, 237)",
};

const barItems = {
  margin: "auto",
  padding: ".1% 2%",
};

const barItemsActive = {
  margin: "auto",
  padding: ".1% 2%",
  color: "rgb(40, 201, 250)",
};

const StatusBar = ({ status, setStatus }) => {
  const statusList = ["To Do", "Doing", "Done", "Delayed", "All"];

  return (
    <div className="statusBar" style={statusBarStyle}>
      <div style={stListStyle}>
        {statusList.map((i) => (
          <span
            key={i}
            style={status === i ? barItemsActive : barItems}
            onClick={() => {
              setStatus(i);
            }}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;
