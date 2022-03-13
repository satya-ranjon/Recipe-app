import React from "react";
import { LogoIcon, Nav } from "../Styles/Element.styled";
import { GiKnifeFork } from "react-icons/gi";

export default function Logo() {
  return (
    <Nav>
      <GiKnifeFork />
      <LogoIcon to="/">deliciousss</LogoIcon>
    </Nav>
  );
}
