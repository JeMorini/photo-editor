import React, { useState } from "react";
import "./App.css";
import { Image } from "./styles";
import domtoimage from "dom-to-image";

function App() {
  const [coloring, setColoring] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [selectedFile, setSelectedFile] = useState();
  const [imageChanged, setImageChanged] = useState();
  const [imageRef] = useState(React.createRef());
  var node = imageRef.current;
  function saveEditImage() {
    domtoimage
      .toPng(node)
      .then((dataUrl) => setImageChanged(dataUrl))
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input
            type="file"
            onChange={(e) =>
              setSelectedFile(URL.createObjectURL(e.target.files[0]))
            }
          />
        </form>
        {selectedFile && (
          <Image
            src={selectedFile}
            alt="img"
            colority={coloring}
            rotation={rotation}
            id="my-node"
            ref={imageRef}
          />
        )}
        <button type="button" onClick={saveEditImage}>
          Save Edit Image
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={coloring}
          onChange={(value) => setColoring(value.target.value)}
        />
        <input
          type="range"
          min="0"
          max="180"
          value={rotation}
          onChange={(value) => setRotation(value.target.value)}
        />
        <a href={imageChanged} download>
          Click to download
        </a>
      </header>
    </div>
  );
}

export default App;
