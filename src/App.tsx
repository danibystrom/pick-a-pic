import { useState } from "react";
import "./App.css";
import PhotoFilter from "./components/PhotoFilter";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  const [filter, setFilter] = useState<string>("All");

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  return (
    <>
      <h1>pick a pic</h1>
      <PhotoFilter onFilterChange={handleFilterChange} />
      <PhotoGallery filter={filter} />
    </>
  );
}

export default App;
