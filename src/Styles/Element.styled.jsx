import { Link } from "react-router-dom";
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

export const Button = Styled.button`
      padding:1rem 2rem;
      margin: 1rem;
      color:#313131;
      background:white;
      border:2px solid black;
      margin-right:2rem;
      font-weight:600; 
`;

export const LogoIcon = Styled(Link)`
      text-decoration:none;
      font-size:1.5rem;
      font-weight:400;
      font-family: "lobster Two" , cursive;
`;

export const Nav = Styled.div`
      padding: 4rem 0rem;
      display: flex;
      justify-content:flex-start
      align-items:center;
      svg{
            font-size:2rem;
      }
`;
