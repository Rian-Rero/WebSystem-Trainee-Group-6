import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;  
  font-size: 27px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  font-family:"Poppins";
  background-color: #4F4E8C;
  width: 93%;
  
  
  

  > svg {
    margin: 0 20px;
    &:hover {
    background-color: #09082F;
  }
  }

  
 
    
     
  
  
`;

export const Button = styled.button`
display: flex;
  align-items: center;  
  font-size: 27px;
  color: white;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  font-family:"Poppins";
  background-color: #4F4E8C;
  border: none;
  &:hover {
    background-color: #09082F;
  }
`
