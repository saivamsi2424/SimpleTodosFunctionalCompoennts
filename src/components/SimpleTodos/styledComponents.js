import styled from 'styled-components'

export const Container1 = styled.div`
  background-color: #ffc2a0;
  height: 100%;
  width: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`;
export const Container2 = styled.div`
background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`;

  export const Heading = styled.h1`
   color: #ff8542;
  height: 60px;
  text-align: center;`;

  export const UnorderList = styled.ul`
  list-style:none;
  `
  export const RowContainer = styled.div`
  display:flex;
  flex-direction:row;`;

  export const InputElement = styled.input`
  width:60%;
  height:35px;`;

  export const SaveButton = styled.button`
  height:40px;
  margin-left:20px;
  border-radius: 8px;
  width: 80px;
  padding: 8px 12px;
  color: white;
  background-color: #28a745; /* Bootstrap green */
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  &:active {
    background-color: #1e7e34;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(72, 180, 97, 0.4);
  }
`;
