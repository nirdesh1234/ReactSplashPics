import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./Api";
import ImageList from "./components/ImageList";
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (text) => {
    const result = await searchImages(text);
    setImages(result);
    console.log(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
