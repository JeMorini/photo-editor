import React, { useState } from "react";
import { Container, Items } from "./styles";

function TabItems({ setItemSelected, itemSelected }) {
  return (
    <Container>
      <Items
        onClick={() => setItemSelected("Coloring")}
        selected={itemSelected === "Coloring"}
      >
        <p>Co</p>
      </Items>
      <Items
        onClick={() => setItemSelected("Rotation")}
        selected={itemSelected === "Rotation"}
      >
        <p>Ro</p>
      </Items>
      <Items
        onClick={() => setItemSelected("Opacity")}
        selected={itemSelected === "Opacity"}
      >
        <p>Op</p>
      </Items>
    </Container>
  );
}

export default TabItems;
