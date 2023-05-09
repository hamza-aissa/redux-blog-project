import React, { useState } from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import PostToolbar from "./PostToolbar";
import PostComments from "./PostComments";
const SinglePost = ({ post, key }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <article key={key}>
        <h2>{post.title}</h2>
        <TimeAgo timestamp={post.date} />
        <PostAuthor postId={post.userId} />
        <h3>{post.body}</h3>
        <span>love{post.reactions.love}</span>
        <span>haha{post.reactions.haha}</span>
        <span>sad{post.reactions.sad}</span>
        <span>angry{post.reactions.angry}</span>
      </article>
      <PostToolbar PostId={post.id} />
      <button onClick={() => setShow(!show)}>show all comments</button>
      {show ? null : <PostComments postId={post.id} />}
    </div>
  );
};

export default SinglePost;
