import React, { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";

import initialPosts from "../data/posts";

import styles from "../styles/Main.module.css";

function Main() {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handleDelete = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, published: false } : post
      )
    );
  };

  return (
    <main>
      <div className={`container row ${styles["my-container"]}`}>
        <Form posts={posts} onAddPost={handleAddPost} />
        <CardList posts={posts} onDelete={handleDelete} />
      </div>
    </main>
  );
}

export default Main;
