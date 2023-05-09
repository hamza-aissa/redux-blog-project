import React from "react";
import "./App.css";
import AddPost from "./features/Posts/AddPost";
import PostList from "./features/Posts/PostList";

function App() {
  return (
    <main className="App">
      <AddPost />
      <PostList />
    </main>
  );
}

export default App;
