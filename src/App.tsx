import "./App.css";
import PhotoFilter from "./components/PhotoFilter";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <>
      <h1>pick a pic</h1>
      <PhotoFilter />
      <PhotoGallery />
    </>
  );
}

export default App;
