import React from "react";
import { useSelector } from "react-redux";
import { postIdselcetor } from "./PostSlice";
import { useParams } from "react-router-dom";
import SinglePost from "./SinglePost";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => postIdselcetor(state, Number(postId)));
  console.log(post);

  return post ? (
    <SinglePost post={post} />
  ) : (
    <h1>Oops No Posts For Now Sorry</h1>
  );
};

export default SinglePostPage;
