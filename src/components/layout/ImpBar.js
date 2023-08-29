import React from "react";

const impBarStyle = {
  display: "flex",
  margin: "auto",
  marginTop: "1%",
  fontWeight: "bold",
  fontSize: "80%",
  padding: "1%",
  backgroundColor: "rgb(40, 44, 52)",
  color: "white",
  border: "solid 1px",
  borderRadius: "3%",
  borderColor: "rgb(0, 0, 0)",
  boxShadow: "1px 2px rgb(235, 236, 237)",
  position: -"webkit-sticky",
  //position: "sticky",
  top: "1%",
};

const barItems = {
  margin: "auto",
};

const barItemsActive = {
  margin: "auto",
  color: "rgb(40, 201, 250)",
};

const ImpBar = ({ importance, setImportance }) => {
  const impList = ["Not Important", "Important", "Very Important", "All"];
  const tags = ["Not-Imp", "Important", "Very-Imp", "All"];

  return (
    <>
      <div className="impBar" style={impBarStyle}>
        {impList.map((i, index) => (
          <span
            key={i}
            style={importance === i ? barItemsActive : barItems}
            onClick={() => {
              setImportance(i);
            }}
          >
            {tags[index]}
          </span>
        ))}
      </div>
    </>
  );
};

export default ImpBar;
