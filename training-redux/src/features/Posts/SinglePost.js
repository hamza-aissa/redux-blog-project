import React, { useState } from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import PostToolbar from "./PostToolbar";
import PostComments from "./PostComments";
import { Link } from "react-router-dom";
const SinglePost = ({ post }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-8 rounded-lg my-2 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-[1000px] h-[180px] ">
      <article key={post.id}>
        <h2>{post.title}</h2>

        <div className="flex mb-4">
          <img
            class="w-12 h-12 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <div class="ml-2 mt-0.5">
            <TimeAgo timestamp={post.date} />
            <Link to={`/post/${post.id}`}>view post</Link>
            <PostAuthor postId={post.userId} />
          </div>
        </div>

        <p class="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
          {post.body}
        </p>
        <div className="flex flex-row space-x-1">
          <div className="flex flex-col">
            <p>{post.reactions.love}</p>
            <p>love</p>
          </div>
          <div className="flex flex-col">
            <p>{post.reactions.haha}</p>
            <p>haha</p>
          </div>
          <div className="flex flex-col">
            <p>{post.reactions.sad}</p>
            <p>sad</p>
          </div>
          <div className="flex flex-col">
            <p>{post.reactions.angry}</p>
            <p>angry</p>
          </div>
        </div>
      </article>
      <PostToolbar PostId={post.id} />
      <button onClick={() => setShow(!show)}>show all comments</button>
      {show ? null : <PostComments postId={post.id} />}
    </div>
  );
};

export default SinglePost;
