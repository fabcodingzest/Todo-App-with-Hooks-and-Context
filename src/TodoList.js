import React, { Fragment, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import { TodosContext } from "./Context/todos.context";

import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList() {
  const  todos  = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo {...todo} />
              {i < todo.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
