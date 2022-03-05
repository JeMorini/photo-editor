import styled from "styled-components";

export const Image = styled.img`
  ${(props) =>
    props.colority &&
    `
  -webkit-filter: grayscale(${props.colority}%);
  filter: grayscale(${props.colority}%);
`}
  ${(props) =>
    props.rotation &&
    `
    transform: rotate(${props.rotation}deg);
`}
`;
