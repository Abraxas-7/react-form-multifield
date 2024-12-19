import React from "react";
import Card from "./Card";

function CardList({ posts, onDelete }) {
  return (
    <div className="col-9 d-flex flex-wrap gap-3 justify-content-center">
      {posts
        .filter((post) => post.published)
        .map((post) => (
          <Card post={post} key={post.id} onDelete={onDelete} />
        ))}
    </div>
  );
}

export default CardList;
