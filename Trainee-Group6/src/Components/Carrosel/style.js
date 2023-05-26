import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  background-color: #0a0a30;
  font-family: "Poppins";
  height: 100%;
  align-items: start;
  justify-content: center;
  width: 100%;
`;

export const Dimensao = styled.div`
  display: flex;
  width: 40%;

  overflow: none;
  position: relative;
  z-index: 0;
  top: 50px;
  & > img {
    object-fit: cover;
  }
`;
export const Image = styled.image``;

export const Prev = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 28px;
  color: white;
  line-height: 2px;
  position: absolute;
  z-index: 2;
  top: calc(50% - 50px);
`;

export const Next = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 28px;
  color: white;
  line-height: 2px;
  position: absolute;
  z-index: 0;
  top: calc(50% - 50px);
`;
