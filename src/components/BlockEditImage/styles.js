import styled from "styled-components";

export const Image = styled.img`
  ${(props) =>
    props.colority &&
    `
  filter: grayscale(${props.colority}%);
`};
  ${(props) =>
    props.rotation &&
    `
    transform: rotate(${props.rotation}deg);
`};
  ${(props) =>
    props.opacity &&
    `
    opacity: ${props.opacity}
`};
  height: 45%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.type};
  background-color: #373b44;
  justify-content: space-between;
  height: 30rem;
  width: 60rem;
  box-shadow: 10px 5px 5px black;
  border-radius: 8px;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
