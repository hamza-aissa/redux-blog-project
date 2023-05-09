import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postselector } from "./PostSlice";
import TimeAgo from "./TimeAgo";
import "./comment.css";

const PostComments = ({ postId }) => {
  const dispatch = useDispatch();
  const posts = useSelector(postselector);

  // Find the post with the given postId
  const post = posts.find((post) => post.id === postId);

  // If the post isn't found or doesn't have any comments, return null
  if (!post || !post.comments || post.comments.length === 0) {
    return null;
  }

  // Map over the comments array and render each comment
  const commentlist = post.comments.map((comment) => (
    <section key={comment.id} className="comment-box">
      <span>{comment.body}</span>
      <TimeAgo timestamp={comment.date} />
    </section>
  ));

  return <div>{commentlist}</div>;
};

export default PostComments;
