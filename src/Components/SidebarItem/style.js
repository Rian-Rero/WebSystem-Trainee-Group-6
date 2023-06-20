import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 27px;
  color: white;
  padding: 10px;
  gap: 50px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  font-family: "Poppins";
  background-color: transparent;
  width: 93%;

  > svg {
    margin: 0 20px;
    &:hover {
      background-color: #09082f;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 27px;
  gap: 30px;
  color: white;
  width: 94%;
  padding: 10px;
  margin-right: 0px;
  cursor: pointer;
  border-radius: 10px;

  font-family: "Poppins";
  background-color: #23234f;
  border: none;
  &:hover {
    background-color: #09082f;
  }
`;
