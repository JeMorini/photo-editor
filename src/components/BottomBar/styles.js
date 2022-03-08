import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #1f2f3a;
  height: 4rem;
  width: 56rem;
  position: bottom;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 56rem;
  padding: 0rem 1rem;
`;

export const Input = styled.input`
  width: 20rem;
  accent-color: #6d165a;
`;

export const Button = styled.div`
  display: flex;
  width: 10rem;
  height: 2.5rem;
  background-color: #6d165a;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  justify-content: space-evenly;
`;

export const LinkDownload = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;
