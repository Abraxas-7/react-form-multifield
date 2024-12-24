import React, { useState } from "react";

function Form({ posts, onAddPost }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    tags: [],
    published: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      tags: checked
        ? [...prev.tags, value]
        : prev.tags.filter((tag) => tag !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = posts.length + 1;

    const newPost = {
      id: newId,
      title: formData.title,
      content: formData.content,
      image: formData.image || "https://placehold.co/600x400",
      category: formData.category,
      tags: formData.tags,
      published: formData.published,
    };

    onAddPost(newPost);

    setFormData({
      title: "",
      content: "",
      image: "",
      category: "",
      tags: [],
      published: true,
    });
  };

  return (
    <div className="col-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image URL (optional)</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="science">Science</option>
            <option value="art">Art</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tags</label>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="html"
                id="tag-html"
                checked={formData.tags.includes("html")}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="tag-html">
                HTML
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="css"
                id="tag-css"
                checked={formData.tags.includes("css")}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="tag-css">
                CSS
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                value="javascript"
                id="tag-javascript"
                checked={formData.tags.includes("javascript")}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="tag-javascript">
                JavaScript
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Publish</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="published">
              Published
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default Form;
