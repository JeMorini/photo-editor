import styled from "styled-components";

export const Image = styled.img`
  ${(props) =>
    `
  filter: grayscale(${props.colority}%) blur(${props.blur}px);
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
  height: 14rem;
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

export const InputImage = styled.label`
  cursor: pointer;
`;

export const TitleInputImage = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`;
