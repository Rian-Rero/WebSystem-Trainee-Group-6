import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: flex;
  background-color: #0a0a30;
  font-family: "Poppins";
  height: 100%;
  align-items: start;
  justify-content: center;
  flex: 1;
`;

export const Dimensao = styled.div`
  display: flex;
  max-width: 70%;
  flex: 1;
  position: relative;
  z-index: 0;
  top: 50px;
  & > img {
    object-fit: cover;
  }
  @media screen and (max-width: 1208px) {
    max-width: 100%;
  }
`;

export const Prev = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 3vw;
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
  font-size: 3vw;
  color: white;
  line-height: 2px;
  position: absolute;
  z-index: 2;
  top: calc(50% - 50px);
`;
