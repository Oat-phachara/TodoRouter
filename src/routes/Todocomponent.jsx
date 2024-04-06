import React from "react";
import "./todocomponent.css";
import Todoitems from "./todoitems";
import { Link } from "react-router-dom";

function Todocomponent() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div id="display">
      <h2>TODO</h2>

      {items.map((i) => (
        <div id="item" key={crypto.randomUUID()}>
          <Link to={`/todos/${i}`}>
            <Todoitems number={i} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Todocomponent;
