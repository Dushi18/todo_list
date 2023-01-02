import React, { useState } from 'react';

export const AddTodo = (props) => {
 const [title, setTitle] = useState("");
 const [desc, setDesc] = useState("");

 const submit = (e)=>{
    e.preventDefault();
    //to prevent app from getting refreshed when submitted
    if(!title ||! desc){
        alert('Title otr Description is not submitted. Kindly enter title as well as description!')
    }
    else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
 }
  return (
    <form onSubmit={submit}>
      <div className="container my-3">
        <h3>Add Todo</h3>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Todo Title</label>
          <input
            type="text"
            value = {title}
            onChange= {(e)=>setTitle(e.target.value)}
            className="form-control"
            id="text"
            aria-describedby="emailHelp"
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            onChange= {(e)=>setDesc(e.target.value)}
            value={desc}
            className="form-control"
            id="desc"
            placeholder="description"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm my-3" >
          Submit
        </button>
      </div>
      <hr />
    </form>
  );
};
