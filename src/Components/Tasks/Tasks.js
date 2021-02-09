import React from "react";
import "./Tasks.css";

import image from "../../assets/image.png";
import InputModel from "../Models/InputModel";

import { ReactComponent as Delete } from "../../assets/Delete.svg";

function GetTask({ date, details, label, count, title, del, ...props }) {
  return (
    <div className="task">
      <div className="task-date">{date}</div>
      <div className="dot"></div>
      <div className="task-content">
        <div className="task-section-1">
          <div className="task-img">
            <img
              src={image}
              height="100%"
              width="100%"
              alt="referance image"
            ></img>
          </div>
          <div className="task-details">
            {details}
          </div>
        </div>
        <div className="task-participants">P</div>
        <div className="task-labels">{label}</div>
        <div className="task-notations">
          <div className="task-notation-1"></div>
          <div className="task-notation-2"></div>
        </div>
        <div className="task-count">{count}</div>
        <div className="task-delete" onClick={del}><Delete className="delete" /></div>
      </div>
    </div>
  );
}

const Tasks = (props) => {

  return (
    <div className="tasks-body">
      <div className="tasks-main">
        {props.tasks.map((item, index) => {
          return (
            <GetTask
              key={index}
              date={item.date}
              details={item.details}
              label={item.label}
              count={item.count}
              del={() => props.deleteTask(item.details)}
            />
          );
        })}
        <div className="seperator"></div>
      </div>
      {props.open && <InputModel close={props.closeModel} onSubmit={props.addTask}/> }
    </div>
  );
};

export default Tasks;
