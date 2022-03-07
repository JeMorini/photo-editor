import React, { useEffect, useState } from "react";
import { Image, Container, ContainerImage } from "./styles";
import domtoimage from "dom-to-image";
import TabItems from "../TabItems";
import ItemSelector from "../ItemSelector";

function BlockEditImage() {
  const [selectedFile, setSelectedFile] = useState();
  const [coloring, setColoring] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [imageRef] = useState(React.createRef());
  const [imageChanged, setImageChanged] = useState();
  const [itemSelected, setItemSelected] = useState();
  var node = imageRef.current;
  useEffect(() => {
    domtoimage
      .toPng(node)
      .then((dataUrl) => setImageChanged(dataUrl))
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }, [coloring, rotation, opacity]);
  return (
    <Container type="row">
      <TabItems setItemSelected={setItemSelected} itemSelected={itemSelected} />
      <Container type="column">
        <ContainerImage>
          {selectedFile ? (
            <Image
              src={selectedFile}
              alt="img"
              colority={coloring}
              rotation={rotation}
              opacity={opacity}
              id="my-node"
              ref={imageRef}
            />
          ) : (
            <form>
              <input
                type="file"
                onChange={(e) =>
                  setSelectedFile(URL.createObjectURL(e.target.files[0]))
                }
              />
            </form>
          )}
        </ContainerImage>
        <ItemSelector
          setColoring={setColoring}
          setRotation={setRotation}
          setOpacity={setOpacity}
          coloring={coloring}
          rotation={rotation}
          opacity={opacity}
          imageChanged={imageChanged}
          itemSelected={itemSelected}
        />
      </Container>
    </Container>
  );
}

export default BlockEditImage;
