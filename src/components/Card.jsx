import React from "react";

function Card({ post, onDelete }) {
  return (
    <div className={`card col-5`}>
      <img src={post.image} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.content} </p>
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-danger" onClick={() => onDelete(post.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
