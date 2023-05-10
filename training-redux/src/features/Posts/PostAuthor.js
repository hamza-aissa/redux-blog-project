import React, { useEffect } from "react";
import {
  fetchusers,
  selecterror,
  selectstatus,
  selectusers,
} from "../Users/UsersSlice";
import { useDispatch, useSelector } from "react-redux";

const PostAuthor = ({ postId }) => {
  let users = useSelector(selectusers);
  let status = useSelector(selectstatus);
  let error = useSelector(selecterror);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchusers());
    }
  }, [status, dispatch]);
  const user = users.find((u) => u.id === postId);
  return (
    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
      {user ? user.username : "unknown"}
    </span>
  );
};

export default PostAuthor;
