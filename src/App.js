import React, { useState, useEffect } from "react";

import AddItems from "./components/AddItems";

import OutPut from "./components/output/OutPut";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodo, setFilterTodo] = useState("all");
  const [switcher, setSwitcher] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    saveTolocal();
  }, [todos]);

  useEffect(() => {
    switcherHandeler();
  }, [filterTodo, todos]);

  const addTodos = (texts) => {
    setTodos((prevState) => {
      return [
        ...todos,
        { text: texts, status: false, id: Math.random().toString() },
      ];
    });
  };

  //save to local

  const saveTolocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let toDoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(toDoLocal);
    }
  };

  //filter
  const switcherHandeler = () => {
    switch (filterTodo) {
      case "compeleted":
        setSwitcher(todos.filter((todo) => todo.status === true));
        break;
      case "uncompleted":
        setSwitcher(todos.filter((todo) => todo.status === false));
        break;
      default:
        setSwitcher(todos);
        break;
    }
  };

  return (
    <React.Fragment>
      <AddItems addTodos={addTodos} todos={todos} />
      <OutPut
        addTodos={addTodos}
        switcher={switcher}
        setTodos={setTodos}
        setFilterTodo={setFilterTodo}
      />
    </React.Fragment>
  );
};
export default App;
