import styled from 'styled-components'

export const ListItem = styled.li`
margin:10px;`;

export const Description = styled.p`
color:blue;
font-size:20px;`; 

export const Button = styled.button`
  background-color: #e63946; /* rich red */
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  width: 100px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1d3557; /* deep navy */
    transform: scale(1.05);    /* slight grow effect */
  }

  &:active {
    background-color: #0f2541;
    transform: scale(1);       /* reset scale */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.4); /* soft red glow */
  }
`;


export const NormalContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;`;

export const InputElement = styled.input`
width:60%;
height:30px;`