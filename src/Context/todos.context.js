//todos
//all methods to interact w/ todos

import React, { createContext, useReducer } from "react";
import { todoReducer } from "../reducers/todo.reducer";

const defaultTodos = [
  { id: 1, task: "Avera ke davera", completed: false },
  { id: 2, task: "Expecto Patronium", completed: true }
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
