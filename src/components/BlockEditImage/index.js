import React, { useEffect, useState } from "react";
import {
  Image,
  Container,
  ContainerImage,
  InputImage,
  TitleInputImage,
} from "./styles";
import domtoimage from "dom-to-image";
import TabItems from "../TabItems";
import BottomBar from "../BottomBar";
import { BsImages } from "react-icons/bs";

function BlockEditImage() {
  const [selectedFile, setSelectedFile] = useState();
  const [coloring, setColoring] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [blur, setBlur] = useState(0);
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
              blur={blur}
              id="my-node"
              ref={imageRef}
            />
          ) : (
            <form>
              <input
                type="file"
                placeholder={"jkjk"}
                id="inputImage"
                onChange={(e) =>
                  setSelectedFile(URL.createObjectURL(e.target.files[0]))
                }
                style={{ display: "none" }}
              />
              <InputImage for="inputImage">
                <BsImages size={100} />
                <TitleInputImage>Selecione uma imagem</TitleInputImage>
              </InputImage>
            </form>
          )}
        </ContainerImage>
        <BottomBar
          setColoring={setColoring}
          setRotation={setRotation}
          setOpacity={setOpacity}
          setBlur={setBlur}
          coloring={coloring}
          rotation={rotation}
          opacity={opacity}
          blur={blur}
          imageChanged={imageChanged}
          itemSelected={itemSelected}
        />
      </Container>
    </Container>
  );
}

export default BlockEditImage;
