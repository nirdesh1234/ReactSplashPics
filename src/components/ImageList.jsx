import React from "react";
import "./ImageList.css";
import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div key={image.id}>
          <ImageShow image={image} />
        </div>
      ))}
    </div>
  );
}
// Add the key to the top jsx element in the list
