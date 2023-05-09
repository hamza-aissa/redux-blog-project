import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentAdded } from "./PostSlice";

const AddComment = ({ PostId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const submitComment = () => {
    dispatch(commentAdded({ PostId: PostId, comment: comment }));
    setComment("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Add Comment</button>
    </div>
  );
};

export default AddComment;
