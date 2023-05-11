import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postselector, postsStatus, postserror, fetchPosts } from "./PostSlice";

import SinglePost from "./SinglePost";

const PostList = () => {
  const dispatch = useDispatch();

  let posts = useSelector(postselector);
  let status = useSelector(postsStatus);
  let error = useSelector(postserror);
  let postlist;
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  console.log(posts);
  if (status === "success") {
    postlist = posts.map((post) => <SinglePost post={post} />);
  } else if (status === "error") {
    postlist = { error };
  } else if (status === "loading") {
    postlist = "LOADING...";
  }

  return (
    <div className="">
      <h1>postlist</h1>
      <div className="flex flex-col space-y-[100px] ">{postlist}</div>
    </div>
  );
};

export default PostList;
