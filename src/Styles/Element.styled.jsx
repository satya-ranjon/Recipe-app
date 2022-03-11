import Styled from "styled-components";

export const Img = Styled.img`
     width:100%;
     height:100%;

`;

export const List = Styled.li`
      list-style:none;
      display:flex;     
      margin:3rem 0rem;
      justify-content: center;

`;

export const Input = Styled.input`
      background:linear-gradient(35deg, #494949 , #313131);
      color:#ffff;
      padding:1rem 3rem;
      border:none;
      border-radius:1rem;
      border:none;
      font-size:1.5rem;
      outline:none;
      width:100%;
`;

export const Form = Styled.form`
      margin:3rem 0rem;
      justify-content:center;
      display:flex;
      svg{
            position:absolute;
            top:50%;
            left:0%;
            transform:translate(100%, -50%);
            color:#ffff;
      }
`;
