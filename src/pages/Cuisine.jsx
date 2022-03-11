import React from "react";
import { useParams } from "react-router-dom";
import useCuisineFetch from "../Hooks/useCuisineFetch";
import { Card1, Grid } from "../Styles/Container.styled";
import { Img } from "../Styles/Element.styled";

export default function Cuisine() {
  const pram = useParams();
  const { loading, error, result } = useCuisineFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${pram.type}&number=16`,
    pram.type
  );

  return (
    <Grid>
      {loading && <div>Loading ....</div>}
      {error && <div>Error ....</div>}
      {!loading &&
        !error &&
        result !== null &&
        result.results.map((recipe) => (
          <Card1 key={recipe.id}>
            <Img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title} </h4>
          </Card1>
        ))}
    </Grid>
  );
}
