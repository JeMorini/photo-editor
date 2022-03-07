import React, { useState } from "react";
import "./App.css";
import { Image } from "./styles";
import domtoimage from "dom-to-image";
import BlockEditImage from "./components/BlockEditImage";

function App() {
  const [coloring, setColoring] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);
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
      <BlockEditImage />
    </div>
  );
}

export default App;
