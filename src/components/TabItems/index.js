import React, { useState } from "react";
import { Container, Items } from "./styles";
import { AiOutlineBgColors, AiOutlineSync } from "react-icons/ai";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { MdOutlineLensBlur } from "react-icons/md";

function TabItems({ setItemSelected, itemSelected }) {
  return (
    <Container>
      <Items
        onClick={() => setItemSelected("Coloring")}
        selected={itemSelected === "Coloring"}
      >
        <AiOutlineBgColors size={50} />
      </Items>
      <Items
        onClick={() => setItemSelected("Rotation")}
        selected={itemSelected === "Rotation"}
      >
        <AiOutlineSync size={50} />
      </Items>
      <Items
        onClick={() => setItemSelected("Opacity")}
        selected={itemSelected === "Opacity"}
      >
        <BsFillBrightnessHighFill size={50} />
      </Items>
      <Items
        onClick={() => setItemSelected("Blur")}
        selected={itemSelected === "Blur"}
      >
        <MdOutlineLensBlur size={50} />
      </Items>
    </Container>
  );
}

export default TabItems;
