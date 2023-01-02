import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/Header";
// import { AddTodo } from "./myComponents/addTodo";
import { AddTodo } from "./myComponents/addTodo";
import { Footer } from "./myComponents/footer";
import { Todos } from "./myComponents/todos";
import {About} from "./myComponents/about";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else initTodo = JSON.parse(localStorage.getItem("todos"));
  const onDelete = (todo) => {
    console.log("Im on delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(initTodo));
  };
  const addTodo = (title, desc) => {
    console.log("im adding this todo", title, desc);
    let sno;
    if (todos.length === 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;
    let myTodo = {
      sno: sno,
      title: title,
      description: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
      <Header title="My Todos list" searchBar={true} />
      <Routes>
        <Route path="/" element={[<AddTodo addTodo={addTodo} />, <Todos todos={todos} onDelete={onDelete} />]}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
            {/* <Header title="My Todos list" searchBar={true} />
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
        <Footer /> */}
    </>
  );
}

export default App;
