import React, { useEffect } from "react";
import {
  fetchusers,
  selecterror,
  selectstatus,
  selectusers,
} from "../Users/UsersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";

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
  return <Typography>{user ? user.username : "unknown"}</Typography>;
};

export default PostAuthor;
