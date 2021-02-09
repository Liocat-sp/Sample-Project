import React, { useState } from "react";

import "./MainPanel.css";

import Navigation from "../Components/Navgiation/MainNav/Navigation";
import MainSideBar from "../Components/SideBars/MainSideBars/MainSideBar";
import SubNav from "../Components/Navgiation/SubNav/SubNav";
import SubSideBars from "../Components/SideBars/SubSideBars/SubSideBars";
import Tasks from "../Components/Tasks/Tasks";

const MainPanel = () => {
  const [open, setopen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      date: "2021-02-12",
      details: "This is the sample detail of the task. just for the reference.",
      label: "Active Link",
      count: "13",
    },
  ]);

  function addToTask(date, details, label, count) {
    setTasks(prev => [...prev, {
        date,
        details,
        label,
        count,
    }]);
  }
  function deleteTask (details) {
      setTasks(prev => {
          let task = prev.filter(item => item.details !== details);
          return task;
      })
  }
  
  function openModel () {
      setopen(true);
  }
  function closeModel() {
      setopen(false);
  }

  return (
    <div className="main-page">
      <div className="sidebars">
        <MainSideBar />
      </div>
      <div className="page-content">
        <Navigation />
        <SubNav openModel={openModel} />
        <div className="dashboard">
          <div className="dashboard-left">
            <SubSideBars/>
          </div>
          <div className="dashboard-right">
            <Tasks open={open} tasks={tasks} addTask={addToTask} deleteTask={deleteTask} closeModel={closeModel}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
