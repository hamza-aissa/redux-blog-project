import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reactionAdded, reactionRemoved } from "./PostSlice";
import "./reaction.css";
const reactionList = {
  angry: "😡",
  sad: "😢",
  haha: "😂",
  love: "😍",
};
const Reactions = ({ PostId }) => {
  const dispatch = useDispatch();

  const reactionbuttons = Object.entries(reactionList).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() => {
          dispatch(reactionAdded({ PostId: PostId, reaction: name }));
        }}
      >
        {emoji}
      </button>
    );
  });
  return <section className="boxreaction">{reactionbuttons}</section>;
};

export default Reactions;
