import React from "react";
import "./App.css";
import AddPost from "./features/Posts/AddPost";
import PostList from "./features/Posts/PostList";
import { Routes, Route } from "react-router-dom";
import SinglePostPage from "./features/Posts/SinglePostPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
