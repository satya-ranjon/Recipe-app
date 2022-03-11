import React, { useState } from "react";
import { Input, Form } from "../Styles/Element.styled";
import { Searchs } from "../Styles/Container.styled";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [input, setInput] = useState(" ");

  const navigate = useNavigate();

  const submithandel = (e) => {
    e.preventDefault();
    navigate(`/search-result/${input}`);
  };
  return (
    <Form onSubmit={submithandel}>
      <Searchs>
        <FaSearch />
        <Input onChange={(e) => setInput(e.target.value)} value={input} />
      </Searchs>
    </Form>
  );
}
