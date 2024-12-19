import React, { useState } from "react";

function Form({ posts, onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = posts.length + 1;

    const postImage = image ? image : "https://placehold.co/600x400";

    const newPost = {
      id: newId,
      title,
      content,
      image: postImage,
      published: true,
    };

    onAddPost(newPost);

    setTitle("");
    setContent("");
    setImage("");
  };

  return (
    <div className="col-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image URL (optional)</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default Form;
