import styled from "styled-components";

export const Image = styled.img`
  ${(props) =>
    props.colority &&
    `
  filter: grayscale(${props.colority}%);
`}
  ${(props) =>
    props.rotation &&
    `
    transform: rotate(${props.rotation}deg);
`}
    ${(props) =>
    props.opacity &&
    `
    opacity: ${props.opacity}
`};
`;
