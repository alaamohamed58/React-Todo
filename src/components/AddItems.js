import React, { useRef } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./AddItems.module.css";

const AddItems = ({ addTodos }) => {
  const useInput = useRef();

  //submit handeler
  const submitHandeler = (event) => {
    event.preventDefault();
    if (useInput.current.value.trim() === "") {
      return;
    }
    addTodos(useInput.current.value);
    useInput.current.value = "";
  };

  return (
    <Card className={classes.add}>
      <h4>add a task</h4>
      <form onSubmit={submitHandeler}>
        <h5>item</h5>
        <input ref={useInput} placeholder="What do You want to do" />
        <Button type="submit">submit</Button>
      </form>
    </Card>
  );
};
export default AddItems;
