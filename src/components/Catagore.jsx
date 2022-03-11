import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { List } from "../Styles/Element.styled";
import { Slink } from "../Styles/Container.styled";

export default function Catagore() {
  return (
    <List>
      <Slink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to="/cuisine/american">
        <FaHamburger />
        <h4>Amarican</h4>
      </Slink>
      <Slink to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to="/cuisine/japanese">
        <GiChopsticks />
        <h4>japanese</h4>
      </Slink>
    </List>
  );
}
