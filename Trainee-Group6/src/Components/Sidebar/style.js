import styled from "styled-components";

export const Container = styled.div`
  background-color: #23234f;
  position: fixed;
  height: 100%;
  top: 0;
  cursor: default;
  font-family: "Poppins";
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 245px;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  margin-top: 100px;
  & > h2 {
    display: flex;
    justify-content: center;
    align-items: end;

    font-size: 13px;
    text-align: center;
  }
`;
