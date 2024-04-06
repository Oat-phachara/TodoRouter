import React from "react";
import { Link } from "react-router-dom";

function Todoitems(props) {
  return (
    <>
      <div>TodoItem{props.number}</div>
    </>
  );
}

export default Todoitems;
