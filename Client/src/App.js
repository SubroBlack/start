import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Header from "./components/layout/header";
import Home from "./components/pages/Home";
import Form from "./components/Form";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch the data from Browser
  const getData = () => {
    const dataJSON = window.localStorage.getItem("startAppData");
    const data = JSON.parse(dataJSON);
    setTasks(data);
  };

  // Fetching the todo array from json placeholder site and setting them as component state
  useEffect(() => {
    getData();
  }, []);

  // Altering a task data and saving it
  const alterTask = (alter) => {
    console.log("Task altered: ", alter);
    let otherTasks = [];
    if (tasks) {
      otherTasks = tasks.filter((task) => task.id !== alter.id);
    }
    const finalList = otherTasks.concat(alter);
    setTasks(finalList);
    window.localStorage.setItem("startAppData", JSON.stringify(finalList));
    console.log("The tasks to be written: ", tasks);
  };

  // Deleting the Task
  const delTask = (del) => {
    const finalList = tasks.filter((task) => task.id !== del.id);
    setTasks(finalList);
    window.localStorage.setItem("startAppData", JSON.stringify(finalList));
    console.log("The tasks to be written: ", finalList);
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/">
            <Home tasks={tasks} alterTask={alterTask} delTask={delTask} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/add">
            <Form alterTask={alterTask} />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
