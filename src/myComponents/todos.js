import React from "react";
import { TodoItem } from "./todoItem";

export const Todos = (props) => {
  return (
    <div className="container my-2">
      <h3 className=" my-3">Todos list</h3>
      {props.todos.length === 0 ? (
        <div className="card">
          <div className="card-body">No todos to display</div>
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            <hr />
            </>
          );
        })
      )}
    </div>
  );
};
