import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPost } from "./PostSlice";
import { selectAllusers } from "../Users/UsersSlice";
import { TextField } from "@mui/material";
import { Button } from "bootstrap";

const AddPost = () => {
  // const users = useSelector(selectAllusers);
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [user, setuser] = useState("");
  const changetitle = (e) => {
    setTitle(e.target.value);
  };
  const changebody = (e) => {
    setBody(e.target.value);
  };
  const changeuser = (e) => {
    setuser(e.target.value);
  };
  const dispatch = useDispatch();
  const clickSubmit = () => {
    if (Title && Body && user) {
      dispatch(addPost(Title, Body, user));
      setTitle("");
      setBody("");
      setuser("");
    }
  };

  return (
    <section>
      <div className="text">
        <img src="http://placehold.it/100/100" />
        <label htmlFor="title" style={{ color: "black" }}>
          Title
        </label>

        <input id="title" type="text" onChange={(e) => changetitle(e)} />
        <label htmlFor="user" style={{ color: "black" }}>
          author
        </label>

        <input id="user" type="text" onChange={(e) => changeuser(e)} />

        <textarea
          placeholder="What's in your mind"
          onChange={(e) => changebody(e)}
        ></textarea>
        <button onClick={clickSubmit}>Submit</button>
      </div>
    </section>
  );
};

export default AddPost;
