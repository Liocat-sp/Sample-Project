import React, { useState } from "react";

import "./InputModel.css";

function InputField({ name, type, id, setValue }) {
  return (
    <div className="customInput">
      <label htmlFor={id}>{name}</label>
      <input type={type} id={id} onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
}

const InputModel = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [label, setLabel] = useState("");
  const [count, setCount] = useState(0);
    function onSubmitHandler () {
        console.log(title);
        console.log(date);
        console.log(label);
        console.log(count);
        props.onSubmit(date, title, label, count);
        props.close();
    }
  return (
    <>
      <div className="backdrop"></div>
      <div className="Dialog">
        <h2>Add New Task</h2>
        <div className="Dialog-Content">
          <div>
            <InputField type="text" name="Task Title" id="title" setValue={setTitle}/>
          </div>
          <div>
            <InputField type="text" name="Task Label" id="title" setValue={setLabel}/>
          </div>
          <div>
            <InputField type="date" name="Task Date" id="title" setValue={setDate}/>
            <InputField type="Number" name="Task Count" id="title" setValue={setCount}/>
          </div>
        </div>
        <div className="Dialog-Actions">
          <button className="Dialog-btn-1" onClick={props.close} >Cancle</button>
          <button className="Dialog-btn-2" onClick={onSubmitHandler}>Add</button>
        </div>
      </div>
    </>
  );
};

export default InputModel;
