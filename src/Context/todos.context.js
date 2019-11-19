//todos
//all methods to interact w/ todos

import React, { createContext } from "react";
import useTodoState from "../Hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Avera ke davera", completed: false },
  { id: 2, task: "Expecto Patronium", completed: true }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
