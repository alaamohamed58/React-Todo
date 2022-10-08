import React from "react";

import Button from "../UI/Button";

import classes from "./OutPutItems.module.css";

const OutPutItems = ({ text, todo, switcher, setTodos, status }) => {
  const deleted = () => {
    setTodos(switcher.filter((el) => el.id !== todo.id));
  };

  const completed = () => {
    setTodos(
      switcher.map((item) => {
        if (item.id === todo.id) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  };
  return (
    <React.Fragment>
      <div className={classes.outputlist}>
        <ul>
          <li className={`${status ? classes.done : ""}`}>
            <p> {text} </p>
            <p>{status ? "Completed" : "Uncompleted"}</p>
            <div>
              <Button className={classes.delete} onClick={deleted}>
                delete
              </Button>
              <Button className={classes.complete} onClick={completed}>
                {status ? "undo" : "Completed"}
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default OutPutItems;
