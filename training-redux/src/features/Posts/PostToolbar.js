import React, { useState } from "react";
import Reactions from "./Reactions";
import AddComment from "./AddComment";
const PostToolbar = ({ PostId }) => {
  const [mouse, setMouse] = useState(false);
  const onclicki = () => {
    setMouse(!mouse);
  };
  return (
    <div>
      {mouse ? <Reactions PostId={PostId} /> : null}
      <button onClick={onclicki}>Like</button>
      <AddComment PostId={PostId} />
    </div>
  );
};

export default PostToolbar;
