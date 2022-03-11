import { NavLink } from "react-router-dom";
import Styled from "styled-components";

export const Wrapper = Styled.div`
     margin: 4rem 0rem;
     
`;

export const Card = Styled.div`
     border-radius:2rem;
     min-height:12rem;
     overflow:hidden;
     position:relative;
     img{
          border-radius:2rem;

          position:absolute;
          object-fit:cover;
          left:0;
     }
     p{
          position:absolute;
          z-index:10;
          left:50%;
          bottom:0%;
          transform:translate(-50%,0%);
          color:#ffff;
          width:100%;
          text-align:center;font-weight:600;
          height:50%;
          display:flex;
          justify-content:center;
          align-items:center;
     }
`;

export const Gradient = Styled.div`
     z-index:3;
     position:absolute;
     width:100%;
     height:100%;
     background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
     
`;

export const Grid = Styled.div`
     display:grid;
     grid-template-columns: repeat(auto-fit,minmax(20rem,4fr));
     
`;
export const Card1 = Styled.div`
height:300px;
padding:3rem;
     img{
          border-radius:2rem;
          width:100%;
          height:100%;
     }
     h4{
          text-align:center;
          padding:1rem;
     }
`;

export const Slink = Styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  color: white;
  cursor: pointer;
  transform: scale(0.8);
h4 {
  color: white;
  font-size: 0.8rem;
  padding: 0;
  margin: 0;
}
svg {
  font-size: 1.5rem;
}
&.active{
  background: linear-gradient(to right, #f27121, #e94057);
}
`;

export const Searchs = Styled.div`
      width:50%;
      position:relative;
`;
