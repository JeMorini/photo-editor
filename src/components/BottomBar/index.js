import React from "react";
import { Container, Items, Input, Button, LinkDownload } from "./styles";
import { AiOutlineDownload } from "react-icons/ai";

function BottomBar({
  coloring,
  rotation,
  opacity,
  blur,
  setColoring,
  setRotation,
  setOpacity,
  setBlur,
  imageChanged,
  itemSelected,
}) {
  return (
    <Container>
      <Items>
        <p></p>
        {itemSelected === "Coloring" && (
          <Input
            type="range"
            min="0"
            max="100"
            value={coloring}
            onChange={(value) => setColoring(value.target.value)}
          />
        )}

        {itemSelected === "Rotation" && (
          <Input
            type="range"
            min="0"
            max="180"
            step="180"
            value={rotation}
            onChange={(value) => setRotation(value.target.value)}
          />
        )}

        {itemSelected === "Opacity" && (
          <Input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={(value) => setOpacity(value.target.value)}
          />
        )}

        {itemSelected === "Blur" && (
          <Input
            type="range"
            min="0"
            max="10"
            step="0.01"
            value={blur}
            onChange={(value) => setBlur(value.target.value)}
          />
        )}

        <LinkDownload href={imageChanged} download>
          <Button>
            <AiOutlineDownload size={30} />
            Download
          </Button>
        </LinkDownload>
      </Items>
    </Container>
  );
}

export default BottomBar;
