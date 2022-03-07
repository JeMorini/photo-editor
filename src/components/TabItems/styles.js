import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1f2f3a;
  height: 30rem;
  width: 5rem;
  position: left;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.selected ? "#6d165a" : "#1f2f3a")};
  height: 10rem;
  width: 5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
