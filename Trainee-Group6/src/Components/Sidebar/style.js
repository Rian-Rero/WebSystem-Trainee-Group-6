import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4F4E8C;
  position: fixed;
  height: 100%;
  bottom: 0px;
  font-family:"Poppins";
  left: 0px;
  width: 250px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
 
  
 

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
       
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
  margin-top: 100px;
  
  
`;