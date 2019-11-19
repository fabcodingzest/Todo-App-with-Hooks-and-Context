import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useInputState from "./Hooks/useInputState";
import { DispatchContext } from "./Context/todos.context";

export default function EditTodoForm({ id, task, toggleEditForm }) {
  const  dispatch  = useContext(DispatchContext);

  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{
        marginLeft: "1rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
        style={{ width: "80%" }}
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
}
