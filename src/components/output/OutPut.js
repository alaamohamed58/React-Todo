import React from "react";

import OutPutItems from "./OutPutItems";

import Card from "../UI/Card";

import classes from "./OutPut.module.css";

const OutPut = ({ switcher, setTodos, setFilterTodo }) => {
  let conditionalContent = (
    <p className={classes.conditionalmsg}>no tasks found</p>
  );
  if (switcher.length > 0) {
    conditionalContent = switcher.map((todo) => (
      <OutPutItems
        key={todo.id}
        text={todo.text}
        todo={todo}
        switcher={switcher}
        setTodos={setTodos}
        status={todo.status}
      />
    ));
  }

  const filterHandeler = (e) => {
    setFilterTodo(e.target.value);
  };

  return (
    <Card className={classes.output}>
      <h4>tasks</h4>
      <select className={classes.select} onChange={filterHandeler}>
        <option value="all">All</option>
        <option value="compeleted">Compeleted</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <div className={classes.results}>
        <ul className={classes.options}>
          <li>task title</li>
          <li>status</li>
          <li> actions</li>
        </ul>
        {conditionalContent}
      </div>
    </Card>
  );
};
export default OutPut;
