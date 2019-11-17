import { useState } from "react";

export default function useToggle(initialValue = false) {
  //call useState, "reserve piece of state"
  const [state, setstate] = useState(initialValue);
  const toggle = () => {
    setstate(!state);
  };
  //return piece of state AND a function to toggle it
  return [state, toggle];
}
