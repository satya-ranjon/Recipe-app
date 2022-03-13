import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import usePopularFetch from "../Hooks/usePopularFetch";
import { Card, Gradient, Wrapper } from "../Styles/Container.styled";
import { Img } from "../Styles/Element.styled";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";
// or
// import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default function Popular() {
  const { loading, error, result } = usePopularFetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
  );
  return (
    <Wrapper>
      <h4>Populer Picks</h4>
      {loading && <Loading />}
      {error && <div>Error ....</div>}

      <Splide
        options={{
          rewind: true,
          width: "",
          gap: "2rem",
          perPage: 4,
          pagination: false,
          drag: "free",
          arrows: false,
        }}
      >
        {!loading &&
          !error &&
          result !== null &&
          result.recipes.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={`/recipe-ditiels/${recipe.id}`}>
                <Card>
                  <p>{recipe.title} </p>
                  <Img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </Link>
            </SplideSlide>
          ))}
      </Splide>
    </Wrapper>
  );
}
